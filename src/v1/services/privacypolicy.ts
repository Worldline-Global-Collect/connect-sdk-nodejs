/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, GetPrivacyPolicyResponse } from "../model/domain";
import { PrivacypolicyParams } from "../model/services";

export function privacypolicy(sdkContext: SdkContext): (merchantId: string, paymentContext: PrivacypolicyParams) => Promise<SdkResponse<GetPrivacyPolicyResponse, ErrorResponse>> {
  return function(merchantId, paymentContext): Promise<SdkResponse<GetPrivacyPolicyResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/services/privacypolicy",
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<GetPrivacyPolicyResponse, ErrorResponse>>;
  };
}
