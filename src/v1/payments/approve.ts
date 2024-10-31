/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ApprovePaymentRequest, ErrorResponse, PaymentApprovalResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/ApprovePaymentRequest.json");

export function approve(
  sdkContext: SdkContext
): (
  merchantId: string,
  paymentId: string,
  postData: ApprovePaymentRequest,
  paymentContext?: PaymentContext | null
) => Promise<SdkResponse<PaymentApprovalResponse, ErrorResponse>> {
  return function(merchantId, paymentId, postData, paymentContext): Promise<SdkResponse<PaymentApprovalResponse, ErrorResponse>> {
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
        modulePath: `/v1/${merchantId}/payments/${paymentId}/approve`,
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PaymentApprovalResponse, ErrorResponse>>;
  };
}
