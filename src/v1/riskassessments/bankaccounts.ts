/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, RiskAssessmentBankAccount, RiskAssessmentResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/RiskAssessmentBankAccount.json");

export function bankaccounts(
  sdkContext: SdkContext
): (merchantId: string, postData: RiskAssessmentBankAccount, paymentContext?: PaymentContext | null) => Promise<SdkResponse<RiskAssessmentResponse, ErrorResponse>> {
  return function(merchantId, postData, paymentContext): Promise<SdkResponse<RiskAssessmentResponse, ErrorResponse>> {
    // validate postData
    const isValidRequest = validate(postData, requestSchema);
    if (!isValidRequest.valid) {
      const logger = sdkContext.getLogger();
      if (sdkContext.isLoggingEnabled()) {
        logger("error", isValidRequest.errors);
      }
      throw new Error(isValidRequest.errors.toString());
    }
    return json(
      {
        method: "POST",
        modulePath: `/v1/${merchantId}/riskassessments/bankaccounts`,
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<RiskAssessmentResponse, ErrorResponse>>;
  };
}
