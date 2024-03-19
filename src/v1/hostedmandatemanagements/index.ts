/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { create } from "./create";
import { get } from "./get";
import { SdkContext } from "../../model";
import { HostedmandatemanagementsClient } from "../model/hostedmandatemanagements";

export function newHostedmandatemanagementsClient(sdkContext: SdkContext): HostedmandatemanagementsClient {
  return {
    create: create(sdkContext),
    get: get(sdkContext)
  };
}
