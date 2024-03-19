/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, RefundResponse } from "../model/domain";

export function get(sdkContext: SdkContext): (merchantId: string, refundId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<RefundResponse, ErrorResponse>> {
  return function(merchantId, refundId, paymentContext): Promise<SdkResponse<RefundResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/refunds/" + refundId,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<RefundResponse, ErrorResponse>>;
  };
}
