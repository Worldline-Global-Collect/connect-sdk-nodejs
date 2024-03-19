/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, PaymentProductGroups } from "../model/domain";
import { FindProductgroupsParams } from "../model/productgroups";

export function find(sdkContext: SdkContext): (merchantId: string, paymentContext: FindProductgroupsParams) => Promise<SdkResponse<PaymentProductGroups, ErrorResponse>> {
  return function(merchantId, paymentContext): Promise<SdkResponse<PaymentProductGroups, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/productgroups",
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<PaymentProductGroups, ErrorResponse>>;
  };
}
