/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { RequestHeaders, WebhooksContext } from "../../../model/webhooks/types";
import { WebhooksEvent } from "../domain";

export interface V1WebhooksFactory {
  init(context: WebhooksContext): WebhooksHelper;
}

export interface WebhooksHelper {
  unmarshal(body: string | Buffer, requestHeaders: RequestHeaders): Promise<WebhooksEvent>;
}
