/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { Directory, ErrorResponse } from "../model/domain";
import { DirectoryParams } from "../model/products";

export function directory(
  sdkContext: SdkContext
): (merchantId: string, paymentProductId: number, paymentContext: DirectoryParams) => Promise<SdkResponse<Directory, ErrorResponse>> {
  return function(merchantId, paymentProductId, paymentContext): Promise<SdkResponse<Directory, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/products/${paymentProductId}/directory`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<Directory, ErrorResponse>>;
  };
}
