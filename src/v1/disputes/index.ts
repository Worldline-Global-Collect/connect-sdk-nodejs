/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { get } from "./get";
import { submit } from "./submit";
import { cancel } from "./cancel";
import { uploadFile } from "./uploadFile";
import { SdkContext } from "../../model";
import { DisputesClient } from "../model/disputes";

export function newDisputesClient(sdkContext: SdkContext): DisputesClient {
  return {
    get: get(sdkContext),
    submit: submit(sdkContext),
    cancel: cancel(sdkContext),
    uploadFile: uploadFile(sdkContext)
  };
}
