/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { SdkContext } from "./model";
import { Client } from "./model/client";

import { newV1Client } from "./v1";

export function newClient(sdkContext: SdkContext): Client {
  return {
    v1: newV1Client(sdkContext),

    context: sdkContext
  };
}
