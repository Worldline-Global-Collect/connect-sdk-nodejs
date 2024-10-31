/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse } from "../model/domain";

export function remove(
  sdkContext: SdkContext
): (merchantId: string, hostedCheckoutId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<void, ErrorResponse>> {
  return function(merchantId, hostedCheckoutId, paymentContext): Promise<SdkResponse<void, ErrorResponse>> {
    return json(
      {
        method: "DELETE",
        modulePath: `/v1/${merchantId}/hostedcheckouts/${hostedCheckoutId}`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<void, ErrorResponse>>;
  };
}
