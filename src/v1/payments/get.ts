/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, PaymentResponse } from "../model/domain";
import { GetPaymentParams } from "../model/payments";

export function get(sdkContext: SdkContext): (merchantId: string, paymentId: string, paymentContext: GetPaymentParams) => Promise<SdkResponse<PaymentResponse, ErrorResponse>> {
  return function(merchantId, paymentId, paymentContext): Promise<SdkResponse<PaymentResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/payments/${paymentId}`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PaymentResponse, ErrorResponse>>;
  };
}
