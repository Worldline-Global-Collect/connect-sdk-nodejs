/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, GetHostedMandateManagementResponse } from "../model/domain";

export function get(
  sdkContext: SdkContext
): (merchantId: string, hostedMandateManagementId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<GetHostedMandateManagementResponse, ErrorResponse>> {
  return function(merchantId, hostedMandateManagementId, paymentContext): Promise<SdkResponse<GetHostedMandateManagementResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/hostedmandatemanagements/" + hostedMandateManagementId,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<GetHostedMandateManagementResponse, ErrorResponse>>;
  };
}
