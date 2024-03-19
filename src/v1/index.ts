/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { SdkContext } from "../model";
import { newHostedcheckoutsClient } from "./hostedcheckouts";
import { newHostedmandatemanagementsClient } from "./hostedmandatemanagements";
import { newPaymentsClient } from "./payments";
import { newCapturesClient } from "./captures";
import { newRefundsClient } from "./refunds";
import { newDisputesClient } from "./disputes";
import { newPayoutsClient } from "./payouts";
import { newProductgroupsClient } from "./productgroups";
import { newProductsClient } from "./products";
import { newRiskassessmentsClient } from "./riskassessments";
import { newServicesClient } from "./services";
import { newTokensClient } from "./tokens";
import { newMandatesClient } from "./mandates";
import { newSessionsClient } from "./sessions";
import { newInstallmentsClient } from "./installments";
import { newFilesClient } from "./files";
import { V1Client } from "./model";

export function newV1Client(sdkContext: SdkContext): V1Client {
  return {
    hostedcheckouts: newHostedcheckoutsClient(sdkContext),
    hostedmandatemanagements: newHostedmandatemanagementsClient(sdkContext),
    payments: newPaymentsClient(sdkContext),
    captures: newCapturesClient(sdkContext),
    refunds: newRefundsClient(sdkContext),
    disputes: newDisputesClient(sdkContext),
    payouts: newPayoutsClient(sdkContext),
    productgroups: newProductgroupsClient(sdkContext),
    products: newProductsClient(sdkContext),
    riskassessments: newRiskassessmentsClient(sdkContext),
    services: newServicesClient(sdkContext),
    tokens: newTokensClient(sdkContext),
    mandates: newMandatesClient(sdkContext),
    sessions: newSessionsClient(sdkContext),
    installments: newInstallmentsClient(sdkContext),
    files: newFilesClient(sdkContext)
  };
}
