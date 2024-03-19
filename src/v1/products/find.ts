/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, PaymentProducts } from "../model/domain";
import { FindProductsParams } from "../model/products";

export function find(sdkContext: SdkContext): (merchantId: string, paymentContext: FindProductsParams) => Promise<SdkResponse<PaymentProducts, ErrorResponse>> {
  return function(merchantId, paymentContext): Promise<SdkResponse<PaymentProducts, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/products",
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PaymentProducts, ErrorResponse>>;
  };
}
