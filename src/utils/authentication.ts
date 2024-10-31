// V1HMAC

import * as crypto from "crypto";
import { Authenticator, Header } from "../model";

function compareHeaders(a: Header, b: Header): number {
  const keyA = a.key.toUpperCase();
  const keyB = b.key.toUpperCase();
  if (keyA < keyB) {
    return -1;
  } else if (keyA > keyB) {
    return 1;
  } else {
    return 0;
  }
}

export function getV1HMACSignature(method: string, contentType: string, date: string, headers: Header[], path: string, secretApiKey: string): string {
  const sortedHeaders = headers
    .filter(header => header.key.toUpperCase().indexOf("X-GCS") === 0)
    .sort(compareHeaders)
    .map(header => `${header.key.toLowerCase()}:${header.value}\n`)
    .join("");
  return crypto
    .createHmac("SHA256", secretApiKey)
    .update(`${method}\n${contentType}\n${date}\n${sortedHeaders}${path}\n`)
    .digest("base64");
}

export class V1HMACAuthenticator implements Authenticator {
  constructor(private readonly apiKeyId: string, private readonly secretApiKey: string) {}

  getAuthorization(method: string, contentType: string, date: string, headers: Header[], path: string): Promise<string> {
    const signature = getV1HMACSignature(method, contentType, date, headers, path, this.secretApiKey);
    return Promise.resolve(`GCS v1HMAC:${this.apiKeyId}:${signature}`);
  }
}
