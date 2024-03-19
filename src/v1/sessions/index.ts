/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { create } from "./create";
import { SdkContext } from "../../model";
import { SessionsClient } from "../model/sessions";

export function newSessionsClient(sdkContext: SdkContext): SessionsClient {
  return {
    create: create(sdkContext)
  };
}
