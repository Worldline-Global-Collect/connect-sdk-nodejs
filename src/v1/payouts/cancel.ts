/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse } from "../model/domain";

export function cancel(sdkContext: SdkContext): (merchantId: string, payoutId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<void, ErrorResponse>> {
  return function(merchantId, payoutId, paymentContext): Promise<SdkResponse<void, ErrorResponse>> {
    return json(
      {
        method: "POST",
        modulePath: "/v1/" + merchantId + "/payouts/" + payoutId + "/cancel",
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<void, ErrorResponse>>;
  };
}
