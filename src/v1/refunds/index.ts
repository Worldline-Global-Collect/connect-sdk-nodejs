/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { find } from "./find";
import { get } from "./get";
import { approve } from "./approve";
import { cancel } from "./cancel";
import { cancelapproval } from "./cancelapproval";
import { SdkContext } from "../../model";
import { RefundsClient } from "../model/refunds";

export function newRefundsClient(sdkContext: SdkContext): RefundsClient {
  return {
    find: find(sdkContext),
    get: get(sdkContext),
    approve: approve(sdkContext),
    cancel: cancel(sdkContext),
    cancelapproval: cancelapproval(sdkContext)
  };
}
