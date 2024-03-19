/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { DisputesResponse, ErrorResponse } from "../model/domain";

export function disputes(
  sdkContext: SdkContext
): (merchantId: string, paymentId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<DisputesResponse, ErrorResponse>> {
  return function(merchantId, paymentId, paymentContext): Promise<SdkResponse<DisputesResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/payments/" + paymentId + "/disputes",
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<DisputesResponse, ErrorResponse>>;
  };
}
