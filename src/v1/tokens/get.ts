/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, TokenResponse } from "../model/domain";

export function get(sdkContext: SdkContext): (merchantId: string, tokenId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<TokenResponse, ErrorResponse>> {
  return function(merchantId, tokenId, paymentContext): Promise<SdkResponse<TokenResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/tokens/${tokenId}`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<TokenResponse, ErrorResponse>>;
  };
}
