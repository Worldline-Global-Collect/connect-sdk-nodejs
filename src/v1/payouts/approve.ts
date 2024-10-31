/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ApprovePayoutRequest, ErrorResponse, PayoutResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/ApprovePayoutRequest.json");

export function approve(
  sdkContext: SdkContext
): (merchantId: string, payoutId: string, postData: ApprovePayoutRequest, paymentContext?: PaymentContext | null) => Promise<SdkResponse<PayoutResponse, ErrorResponse>> {
  return function(merchantId, payoutId, postData, paymentContext): Promise<SdkResponse<PayoutResponse, ErrorResponse>> {
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
        modulePath: `/v1/${merchantId}/payouts/${payoutId}/approve`,
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PayoutResponse, ErrorResponse>>;
  };
}
