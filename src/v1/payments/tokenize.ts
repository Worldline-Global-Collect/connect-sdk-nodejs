/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { CreateTokenResponse, ErrorResponse, TokenizePaymentRequest } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/TokenizePaymentRequest.json");

export function tokenize(
  sdkContext: SdkContext
): (merchantId: string, paymentId: string, postData: TokenizePaymentRequest, paymentContext?: PaymentContext | null) => Promise<SdkResponse<CreateTokenResponse, ErrorResponse>> {
  return function(merchantId, paymentId, postData, paymentContext): Promise<SdkResponse<CreateTokenResponse, ErrorResponse>> {
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
        modulePath: `/v1/${merchantId}/payments/${paymentId}/tokenize`,
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CreateTokenResponse, ErrorResponse>>;
  };
}
