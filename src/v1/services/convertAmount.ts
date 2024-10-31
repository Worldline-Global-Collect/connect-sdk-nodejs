/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ConvertAmount, ErrorResponse } from "../model/domain";
import { ConvertAmountParams } from "../model/services";

export function convertAmount(sdkContext: SdkContext): (merchantId: string, paymentContext: ConvertAmountParams) => Promise<SdkResponse<ConvertAmount, ErrorResponse>> {
  return function(merchantId, paymentContext): Promise<SdkResponse<ConvertAmount, ErrorResponse>> {
    return json(
      {
        method: "GET",
        modulePath: `/v1/${merchantId}/services/convert/amount`,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<ConvertAmount, ErrorResponse>>;
  };
}
