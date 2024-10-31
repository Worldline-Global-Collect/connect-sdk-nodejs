/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { DeviceFingerprintDetails, ErrorResponse } from "../model/domain";

export function devicefingerprint(
  sdkContext: SdkContext
): (merchantId: string, paymentId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<DeviceFingerprintDetails, ErrorResponse>> {
  return function(merchantId, paymentId, paymentContext): Promise<SdkResponse<DeviceFingerprintDetails, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/payments/${paymentId}/devicefingerprint`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<DeviceFingerprintDetails, ErrorResponse>>;
  };
}
