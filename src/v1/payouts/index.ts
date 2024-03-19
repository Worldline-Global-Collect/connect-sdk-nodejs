/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { create } from "./create";
import { find } from "./find";
import { get } from "./get";
import { approve } from "./approve";
import { cancel } from "./cancel";
import { cancelapproval } from "./cancelapproval";
import { SdkContext } from "../../model";
import { PayoutsClient } from "../model/payouts";

export function newPayoutsClient(sdkContext: SdkContext): PayoutsClient {
  return {
    create: create(sdkContext),
    find: find(sdkContext),
    get: get(sdkContext),
    approve: approve(sdkContext),
    cancel: cancel(sdkContext),
    cancelapproval: cancelapproval(sdkContext)
  };
}
