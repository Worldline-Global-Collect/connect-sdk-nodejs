/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, GetHostedCheckoutResponse } from "../model/domain";

export function get(
  sdkContext: SdkContext
): (merchantId: string, hostedCheckoutId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<GetHostedCheckoutResponse, ErrorResponse>> {
  return function(merchantId, hostedCheckoutId, paymentContext): Promise<SdkResponse<GetHostedCheckoutResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/hostedcheckouts/" + hostedCheckoutId,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<GetHostedCheckoutResponse, ErrorResponse>>;
  };
}
