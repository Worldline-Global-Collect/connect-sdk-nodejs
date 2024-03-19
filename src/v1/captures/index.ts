/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { get } from "./get";
import { refund } from "./refund";
import { SdkContext } from "../../model";
import { CapturesClient } from "../model/captures";

export function newCapturesClient(sdkContext: SdkContext): CapturesClient {
  return {
    get: get(sdkContext),
    refund: refund(sdkContext)
  };
}
