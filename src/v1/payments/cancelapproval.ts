/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { CancelApprovalPaymentResponse, ErrorResponse } from "../model/domain";

export function cancelapproval(
  sdkContext: SdkContext
): (merchantId: string, paymentId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<CancelApprovalPaymentResponse, ErrorResponse>> {
  return function(merchantId, paymentId, paymentContext): Promise<SdkResponse<CancelApprovalPaymentResponse, ErrorResponse>> {
    return json(
      {
        method: "POST",
        modulePath: `/v1/${merchantId}/payments/${paymentId}/cancelapproval`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CancelApprovalPaymentResponse, ErrorResponse>>;
  };
}
