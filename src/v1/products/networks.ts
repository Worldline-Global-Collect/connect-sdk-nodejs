/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, PaymentProductNetworksResponse } from "../model/domain";
import { NetworksParams } from "../model/products";

export function networks(
  sdkContext: SdkContext
): (merchantId: string, paymentProductId: number, paymentContext: NetworksParams) => Promise<SdkResponse<PaymentProductNetworksResponse, ErrorResponse>> {
  return function(merchantId, paymentProductId, paymentContext): Promise<SdkResponse<PaymentProductNetworksResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/products/" + paymentProductId + "/networks",
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PaymentProductNetworksResponse, ErrorResponse>>;
  };
}
