/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { CancelPaymentResponse, ErrorResponse } from "../model/domain";

export function cancel(
  sdkContext: SdkContext
): (merchantId: string, paymentId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<CancelPaymentResponse, ErrorResponse>> {
  return function(merchantId, paymentId, paymentContext): Promise<SdkResponse<CancelPaymentResponse, ErrorResponse>> {
    return json(
      {
        method: "POST",
        modulePath: `/v1/${merchantId}/payments/${paymentId}/cancel`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CancelPaymentResponse, ErrorResponse>>;
  };
}
