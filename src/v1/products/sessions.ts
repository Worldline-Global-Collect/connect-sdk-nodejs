/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { CreatePaymentProductSessionRequest, CreatePaymentProductSessionResponse, ErrorResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/CreatePaymentProductSessionRequest.json");

export function sessions(
  sdkContext: SdkContext
): (
  merchantId: string,
  paymentProductId: number,
  postData: CreatePaymentProductSessionRequest,
  paymentContext?: PaymentContext | null
) => Promise<SdkResponse<CreatePaymentProductSessionResponse, ErrorResponse>> {
  return function(merchantId, paymentProductId, postData, paymentContext): Promise<SdkResponse<CreatePaymentProductSessionResponse, ErrorResponse>> {
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
        modulePath: "/v1/" + merchantId + "/products/" + paymentProductId + "/sessions",
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CreatePaymentProductSessionResponse, ErrorResponse>>;
  };
}
