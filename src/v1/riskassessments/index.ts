/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { bankaccounts } from "./bankaccounts";
import { cards } from "./cards";
import { SdkContext } from "../../model";
import { RiskassessmentsClient } from "../model/riskassessments";

export function newRiskassessmentsClient(sdkContext: SdkContext): RiskassessmentsClient {
  return {
    bankaccounts: bankaccounts(sdkContext),
    cards: cards(sdkContext)
  };
}
