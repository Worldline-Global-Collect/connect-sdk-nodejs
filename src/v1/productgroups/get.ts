/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, PaymentProductGroupResponse } from "../model/domain";
import { GetProductgroupParams } from "../model/productgroups";

export function get(
  sdkContext: SdkContext
): (merchantId: string, paymentProductGroupId: string, paymentContext: GetProductgroupParams) => Promise<SdkResponse<PaymentProductGroupResponse, ErrorResponse>> {
  return function(merchantId, paymentProductGroupId, paymentContext): Promise<SdkResponse<PaymentProductGroupResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/productgroups/" + paymentProductGroupId,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PaymentProductGroupResponse, ErrorResponse>>;
  };
}
