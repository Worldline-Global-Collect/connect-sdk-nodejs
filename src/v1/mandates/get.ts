/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, GetMandateResponse } from "../model/domain";

export function get(
  sdkContext: SdkContext
): (merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<GetMandateResponse, ErrorResponse>> {
  return function(merchantId, uniqueMandateReference, paymentContext): Promise<SdkResponse<GetMandateResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/mandates/" + uniqueMandateReference,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<GetMandateResponse, ErrorResponse>>;
  };
}
