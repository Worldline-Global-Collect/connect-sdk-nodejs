/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, PaymentProductResponse } from "../model/domain";
import { GetProductParams } from "../model/products";

export function get(
  sdkContext: SdkContext
): (merchantId: string, paymentProductId: number, paymentContext: GetProductParams) => Promise<SdkResponse<PaymentProductResponse, ErrorResponse>> {
  return function(merchantId, paymentProductId, paymentContext): Promise<SdkResponse<PaymentProductResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/products/${paymentProductId}`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PaymentProductResponse, ErrorResponse>>;
  };
}
