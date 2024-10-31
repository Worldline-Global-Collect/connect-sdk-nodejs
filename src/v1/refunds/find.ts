/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, FindRefundsResponse } from "../model/domain";
import { FindRefundsParams } from "../model/refunds";

export function find(sdkContext: SdkContext): (merchantId: string, paymentContext: FindRefundsParams) => Promise<SdkResponse<FindRefundsResponse, ErrorResponse>> {
  return function(merchantId, paymentContext): Promise<SdkResponse<FindRefundsResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/refunds`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<FindRefundsResponse, ErrorResponse>>;
  };
}
