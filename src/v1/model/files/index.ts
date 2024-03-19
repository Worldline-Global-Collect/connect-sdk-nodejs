/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkBinaryResponse } from "../../../model/types";
import { ErrorResponse } from "../domain";

export interface FilesClient {
  /**
   * Resource /{merchantId}/files/{fileId} - <a href="https://apireference.connect.worldline-solutions.com/fileserviceapi/v1/en_US/nodejs/files/getFile.html">Retrieve File</a>
   */
  getFile(merchantId: string, fileId: string, paymentContext?: PaymentContext | null): Promise<SdkBinaryResponse<ErrorResponse>>;
}
