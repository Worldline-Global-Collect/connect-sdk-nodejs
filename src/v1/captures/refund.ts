/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { RefundErrorResponse, RefundRequest, RefundResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/RefundRequest.json");

export function refund(
  sdkContext: SdkContext
): (merchantId: string, captureId: string, postData: RefundRequest, paymentContext?: PaymentContext | null) => Promise<SdkResponse<RefundResponse, RefundErrorResponse>> {
  return function(merchantId, captureId, postData, paymentContext): Promise<SdkResponse<RefundResponse, RefundErrorResponse>> {
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
        modulePath: `/v1/${merchantId}/captures/${captureId}/refund`,
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<RefundResponse, RefundErrorResponse>>;
  };
}
