/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkBinaryResponse, SdkContext } from "../../model";
import { ErrorResponse } from "../model/domain";

export function getFile(sdkContext: SdkContext): (merchantId: string, fileId: string, paymentContext?: PaymentContext | null) => Promise<SdkBinaryResponse<ErrorResponse>> {
  return function(merchantId, fileId, paymentContext): Promise<SdkBinaryResponse<ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/files/v1/${merchantId}/files/${fileId}`,
        body: null,
        paymentContext: paymentContext,
        expectBinaryResponse: true
      },
      sdkContext
    ) as Promise<SdkBinaryResponse<ErrorResponse>>;
  };
}
