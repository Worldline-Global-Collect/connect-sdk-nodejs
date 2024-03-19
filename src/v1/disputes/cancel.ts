/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { DisputeResponse, ErrorResponse } from "../model/domain";

export function cancel(
  sdkContext: SdkContext
): (merchantId: string, disputeId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<DisputeResponse, ErrorResponse>> {
  return function(merchantId, disputeId, paymentContext): Promise<SdkResponse<DisputeResponse, ErrorResponse>> {
    return json(
      {
        method: "POST",
        modulePath: "/v1/" + merchantId + "/disputes/" + disputeId + "/cancel",
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<DisputeResponse, ErrorResponse>>;
  };
}
