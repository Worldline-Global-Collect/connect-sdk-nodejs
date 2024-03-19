/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { create } from "./create";
import { createWithMandateReference } from "./createWithMandateReference";
import { get } from "./get";
import { block } from "./block";
import { unblock } from "./unblock";
import { revoke } from "./revoke";
import { SdkContext } from "../../model";
import { MandatesClient } from "../model/mandates";

export function newMandatesClient(sdkContext: SdkContext): MandatesClient {
  return {
    create: create(sdkContext),
    createWithMandateReference: createWithMandateReference(sdkContext),
    get: get(sdkContext),
    block: block(sdkContext),
    unblock: unblock(sdkContext),
    revoke: revoke(sdkContext)
  };
}
