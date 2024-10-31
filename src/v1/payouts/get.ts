/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, PayoutResponse } from "../model/domain";

export function get(sdkContext: SdkContext): (merchantId: string, payoutId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<PayoutResponse, ErrorResponse>> {
  return function(merchantId, payoutId, paymentContext): Promise<SdkResponse<PayoutResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/payouts/${payoutId}`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PayoutResponse, ErrorResponse>>;
  };
}
