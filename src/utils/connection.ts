import * as http from "http";
import * as https from "https";
import * as uuid from "uuid";
import * as FormData from "form-data";
import * as obfuscate from "../utils/obfuscate";
import * as headers from "../utils/headers";
import { Logger, MultipartFormDataObject, SdkContext } from "../model";

export type ConnectionCallback = (e: Error | null, res: http.IncomingMessage | null) => void;

function handleResponse(res: http.IncomingMessage, context: SdkContext, logger: Logger, uuidString: string): void {
  if (context.isLoggingEnabled()) {
    let body = "";

    if (headers.isBinaryContent(res.headers["content-type"])) {
      body = "<binary content>";
    } else {
      res.setEncoding("utf8");
      res.on("data", chunk => {
        body += chunk;
      });
    }

    res.on("end", () => {
      if (context.isLoggingEnabled()) {
        // headers: case insensitive, body: case sensitive
        const obfuscatedHeaders = obfuscate.getObfuscated(res.headers, context, true);
        const obfuscatedBody = headers.isJSON(res.headers["content-type"]) ? obfuscate.getObfuscated(body, context, false) : body;
        logger("info", `Response from Message ID: ${uuidString}, status: ${res.statusCode}, headers: ${obfuscatedHeaders}, body: ${obfuscatedBody}`);
      }
    });
  }
}

function handleError(error: Error, context: SdkContext, logger: Logger, uuidString: string): void {
  if (context.isLoggingEnabled()) {
    logger("error", `Error for Message ID:${uuidString}, error: ${JSON.stringify(error)}`);
  }
}

// Cannot use Promises for these two functions.
// Doing so will cause logging to consume the body, making it unavailable for processing later on.
// By using callbacks the two event listeners (logging + processing) will be added in the same flow and therefore will both be processed

export function sendJSON(options: https.RequestOptions, postData: object | undefined | null, context: SdkContext, cb: ConnectionCallback): void {
  const logger = context.getLogger();
  const uuidString = uuid.v4();
  if (context.isLoggingEnabled()) {
    // headers: case insensitive, body: case sensitive
    const obfuscatedHeaders = obfuscate.getObfuscated(options.headers, context, true);
    const obfuscatedBody = obfuscate.getObfuscated(postData, context, false);
    logger("info", `Request with Message ID: ${uuidString}, ${options.method} to ${options.path}, headers: ${obfuscatedHeaders}, body: ${obfuscatedBody}`);
  }
  const h = options.protocol === "https:" ? https : http;
  const req = h.request(options, res => {
    handleResponse(res, context, logger, uuidString);
    cb(null, res);
  });
  req.on("error", e => {
    handleError(e, context, logger, uuidString);
    cb(e, null);
  });

  if (postData) {
    req.write(JSON.stringify(postData));
  }
  req.end();
}

export function sendMultipart(options: https.RequestOptions, postData: MultipartFormDataObject, boundary: string, context: SdkContext, cb: ConnectionCallback): void {
  const logger = context.getLogger();
  const uuidString = uuid.v4();
  if (context.isLoggingEnabled()) {
    // headers: case insensitive
    const obfuscatedHeaders = obfuscate.getObfuscated(options.headers, context, true);
    logger("info", `Request with Message ID: ${uuidString}, ${options.method} to ${options.path}, headers: ${obfuscatedHeaders}, body: <binary data>`);
  }
  const h = options.protocol === "https:" ? https : http;
  const req = h.request(options, res => {
    handleResponse(res, context, logger, uuidString);
    cb(null, res);
  });
  req.on("error", e => {
    handleError(e, context, logger, uuidString);
    cb(e, null);
  });

  const form = new FormData();
  // Use the provided boundary instead of letting the form generate one
  form.setBoundary(boundary);
  if (postData) {
    for (const key in postData) {
      const item = postData[key];
      if (typeof item === "object") {
        if (!item.fileName) {
          cb(new Error(key + ": fileName is required"), null);
          return;
        }
        if (!item.contentType) {
          cb(new Error(key + ": contentType is required"), null);
          return;
        }
        if (!item.content) {
          cb(new Error(key + ": content is required"), null);
          return;
        }
        const opts: FormData.AppendOptions = {
          filename: item.fileName,
          contentType: item.contentType
        };
        if (item.contentLength || item.contentLength === 0) {
          opts.knownLength = item.contentLength;
        }
        form.append(key, item.content, opts);
      } else if (typeof item !== "undefined") {
        form.append(key, item);
      }
    }
  }
  form.pipe(req);
}
