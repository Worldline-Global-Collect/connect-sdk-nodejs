/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { CaptureResponse, ErrorResponse, RefundErrorResponse, RefundRequest, RefundResponse } from "../domain";

export interface CapturesClient {
  /**
   * Resource /{merchantId}/captures/{captureId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/captures/get.html">Get capture</a>
   */
  get(merchantId: string, captureId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<CaptureResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/captures/{captureId}/refund - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/captures/refund.html">Create Refund</a>
   */
  refund(merchantId: string, captureId: string, postData: RefundRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<RefundResponse, RefundErrorResponse>>;
}
