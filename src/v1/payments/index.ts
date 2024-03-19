/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { create } from "./create";
import { find } from "./find";
import { get } from "./get";
import { complete } from "./complete";
import { thirdPartyStatus } from "./thirdPartyStatus";
import { tokenize } from "./tokenize";
import { processchallenged } from "./processchallenged";
import { approve } from "./approve";
import { capture } from "./capture";
import { cancelapproval } from "./cancelapproval";
import { captures } from "./captures";
import { refund } from "./refund";
import { refunds } from "./refunds";
import { cancel } from "./cancel";
import { dispute } from "./dispute";
import { disputes } from "./disputes";
import { devicefingerprint } from "./devicefingerprint";
import { SdkContext } from "../../model";
import { PaymentsClient } from "../model/payments";

export function newPaymentsClient(sdkContext: SdkContext): PaymentsClient {
  return {
    create: create(sdkContext),
    find: find(sdkContext),
    get: get(sdkContext),
    complete: complete(sdkContext),
    thirdPartyStatus: thirdPartyStatus(sdkContext),
    tokenize: tokenize(sdkContext),
    processchallenged: processchallenged(sdkContext),
    approve: approve(sdkContext),
    capture: capture(sdkContext),
    cancelapproval: cancelapproval(sdkContext),
    captures: captures(sdkContext),
    refund: refund(sdkContext),
    refunds: refunds(sdkContext),
    cancel: cancel(sdkContext),
    dispute: dispute(sdkContext),
    disputes: disputes(sdkContext),
    devicefingerprint: devicefingerprint(sdkContext)
  };
}
