/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { multipart } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { UploadFileRequest } from "../model/disputes";
import { ErrorResponse, UploadDisputeFileResponse } from "../model/domain";

export function uploadFile(
  sdkContext: SdkContext
): (merchantId: string, disputeId: string, postData: UploadFileRequest, paymentContext?: PaymentContext | null) => Promise<SdkResponse<UploadDisputeFileResponse, ErrorResponse>> {
  return function(merchantId, disputeId, postData, paymentContext): Promise<SdkResponse<UploadDisputeFileResponse, ErrorResponse>> {
    return multipart(
      {
        method: "POST",
        modulePath: "/files/v1/" + merchantId + "/disputes/" + disputeId,
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<UploadDisputeFileResponse, ErrorResponse>>;
  };
}
