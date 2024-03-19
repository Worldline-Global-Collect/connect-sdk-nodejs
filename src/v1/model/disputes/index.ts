/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { MultipartFormDataObject, PaymentContext, SdkResponse, UploadableFile } from "../../../model/types";
import { DisputeResponse, ErrorResponse, UploadDisputeFileResponse } from "../domain";

export interface DisputesClient {
  /**
   * Resource /{merchantId}/disputes/{disputeId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/disputes/get.html">Get dispute</a>
   */
  get(merchantId: string, disputeId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<DisputeResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/disputes/{disputeId}/submit - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/disputes/submit.html">Submit dispute</a>
   */
  submit(merchantId: string, disputeId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<DisputeResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/disputes/{disputeId}/cancel - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/disputes/cancel.html">Cancel dispute</a>
   */
  cancel(merchantId: string, disputeId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<DisputeResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/disputes/{disputeId} - <a href="https://apireference.connect.worldline-solutions.com/fileserviceapi/v1/en_US/nodejs/disputes/uploadFile.html">Upload File</a>
   */
  uploadFile(
    merchantId: string,
    disputeId: string,
    postData: UploadFileRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<UploadDisputeFileResponse, ErrorResponse>>;
}

export interface UploadFileRequest extends MultipartFormDataObject {
  file?: UploadableFile;
}
