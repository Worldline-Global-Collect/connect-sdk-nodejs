/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { create } from "./create";
import { get } from "./get";
import { remove } from "./remove";
import { SdkContext } from "../../model";
import { HostedcheckoutsClient } from "../model/hostedcheckouts";

export function newHostedcheckoutsClient(sdkContext: SdkContext): HostedcheckoutsClient {
  return {
    create: create(sdkContext),
    get: get(sdkContext),
    remove: remove(sdkContext)
  };
}
