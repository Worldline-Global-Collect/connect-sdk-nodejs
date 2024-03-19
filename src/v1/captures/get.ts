/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { CaptureResponse, ErrorResponse } from "../model/domain";

export function get(
  sdkContext: SdkContext
): (merchantId: string, captureId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<CaptureResponse, ErrorResponse>> {
  return function(merchantId, captureId, paymentContext): Promise<SdkResponse<CaptureResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/captures/" + captureId,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CaptureResponse, ErrorResponse>>;
  };
}
