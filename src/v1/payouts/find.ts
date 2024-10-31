/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, FindPayoutsResponse } from "../model/domain";
import { FindPayoutsParams } from "../model/payouts";

export function find(sdkContext: SdkContext): (merchantId: string, paymentContext: FindPayoutsParams) => Promise<SdkResponse<FindPayoutsResponse, ErrorResponse>> {
  return function(merchantId, paymentContext): Promise<SdkResponse<FindPayoutsResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/payouts`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<FindPayoutsResponse, ErrorResponse>>;
  };
}
