/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { json } from "../../utils/communicator";
import { SdkContext, SdkResponse } from "../../model";
import { ErrorResponse } from "../model/domain";
import { DeleteTokenParams } from "../model/tokens";

export function remove(sdkContext: SdkContext): (merchantId: string, tokenId: string, paymentContext: DeleteTokenParams) => Promise<SdkResponse<void, ErrorResponse>> {
  return function(merchantId, tokenId, paymentContext): Promise<SdkResponse<void, ErrorResponse>> {
    return json(
      {
        method: "DELETE",
        modulePath: "/v1/" + merchantId + "/tokens/" + tokenId,
        body: null,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<void, ErrorResponse>>;
  };
}
