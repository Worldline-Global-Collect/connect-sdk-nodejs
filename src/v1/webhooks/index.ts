/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { ApiVersionMismatchError, RequestHeaders, SignatureValidator } from "../../model/webhooks/types";
import { newSignatureValidator } from "../../webhooks/validation";
import { WebhooksEvent } from "../model/domain";
import { V1WebhooksFactory, WebhooksHelper } from "../model/webhooks";

function validateApiVersion(event: WebhooksEvent): void {
  if ("v1" !== event.apiVersion) {
    throw new ApiVersionMismatchError(`event API version ${event.apiVersion} is not compatible with SDK API version v1`, event.apiVersion!, "v1");
  }
}

async function unmarshal(body: string | Buffer, requestHeaders: RequestHeaders, validator: SignatureValidator): Promise<WebhooksEvent> {
  await validator.validate(body, requestHeaders);
  const event = JSON.parse(body.toString());
  validateApiVersion(event);
  return event;
}

function newWebhooksHelper(validator: SignatureValidator): WebhooksHelper {
  return {
    unmarshal: (body, requestHeaders): Promise<WebhooksEvent> => unmarshal(body, requestHeaders, validator)
  };
}

export const v1WebhooksFactory: V1WebhooksFactory = {
  init: context => {
    const validator = newSignatureValidator(context);
    return newWebhooksHelper(validator);
  }
};
