/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, FindPaymentsResponse } from "../model/domain";
import { FindPaymentsParams } from "../model/payments";

export function find(sdkContext: SdkContext): (merchantId: string, paymentContext: FindPaymentsParams) => Promise<SdkResponse<FindPaymentsResponse, ErrorResponse>> {
  return function(merchantId, paymentContext): Promise<SdkResponse<FindPaymentsResponse, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/payments`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<FindPaymentsResponse, ErrorResponse>>;
  };
}
