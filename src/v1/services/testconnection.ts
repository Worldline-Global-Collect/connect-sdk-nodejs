/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, TestConnection } from "../model/domain";

export function testconnection(sdkContext: SdkContext): (merchantId: string, paymentContext?: PaymentContext | null) => Promise<SdkResponse<TestConnection, ErrorResponse>> {
  return function(merchantId, paymentContext): Promise<SdkResponse<TestConnection, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: "/v1/" + merchantId + "/services/testconnection",
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<TestConnection, ErrorResponse>>;
  };
}
