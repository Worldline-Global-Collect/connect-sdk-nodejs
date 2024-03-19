/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { CreatePaymentRequest, CreatePaymentResponse, PaymentErrorResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/CreatePaymentRequest.json");

export function create(
  sdkContext: SdkContext
): (merchantId: string, postData: CreatePaymentRequest, paymentContext?: PaymentContext | null) => Promise<SdkResponse<CreatePaymentResponse, PaymentErrorResponse>> {
  return function(merchantId, postData, paymentContext): Promise<SdkResponse<CreatePaymentResponse, PaymentErrorResponse>> {
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
        modulePath: "/v1/" + merchantId + "/payments",
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CreatePaymentResponse, PaymentErrorResponse>>;
  };
}
