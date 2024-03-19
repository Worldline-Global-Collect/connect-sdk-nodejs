/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { convertAmount } from "./convertAmount";
import { bankaccount } from "./bankaccount";
import { getIINdetails } from "./getIINdetails";
import { privacypolicy } from "./privacypolicy";
import { testconnection } from "./testconnection";
import { SdkContext } from "../../model";
import { ServicesClient } from "../model/services";

export function newServicesClient(sdkContext: SdkContext): ServicesClient {
  return {
    convertAmount: convertAmount(sdkContext),
    bankaccount: bankaccount(sdkContext),
    getIINdetails: getIINdetails(sdkContext),
    privacypolicy: privacypolicy(sdkContext),
    testconnection: testconnection(sdkContext)
  };
}
