/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { getInstallmentsInfo } from "./getInstallmentsInfo";
import { SdkContext } from "../../model";
import { InstallmentsClient } from "../model/installments";

export function newInstallmentsClient(sdkContext: SdkContext): InstallmentsClient {
  return {
    getInstallmentsInfo: getInstallmentsInfo(sdkContext)
  };
}
