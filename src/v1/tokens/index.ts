/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { create } from "./create";
import { get } from "./get";
import { update } from "./update";
import { remove } from "./remove";
import { approvesepadirectdebit } from "./approvesepadirectdebit";
import { SdkContext } from "../../model";
import { TokensClient } from "../model/tokens";

export function newTokensClient(sdkContext: SdkContext): TokensClient {
  return {
    create: create(sdkContext),
    get: get(sdkContext),
    update: update(sdkContext),
    remove: remove(sdkContext),
    approvesepadirectdebit: approvesepadirectdebit(sdkContext)
  };
}
