/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { ApproveRefundRequest, ErrorResponse, FindRefundsResponse, RefundResponse } from "../domain";

export interface RefundsClient {
  /**
   * Resource /{merchantId}/refunds - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/refunds/find.html">Find refunds</a>
   */
  find(merchantId: string, paymentContext: FindRefundsParams): Promise<SdkResponse<FindRefundsResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/refunds/{refundId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/refunds/get.html">Get refund</a>
   */
  get(merchantId: string, refundId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<RefundResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/refunds/{refundId}/approve - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/refunds/approve.html">Approve refund</a>
   */
  approve(merchantId: string, refundId: string, postData: ApproveRefundRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<void, ErrorResponse>>;
  /**
   * Resource /{merchantId}/refunds/{refundId}/cancel - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/refunds/cancel.html">Cancel refund</a>
   */
  cancel(merchantId: string, refundId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<void, ErrorResponse>>;
  /**
   * Resource /{merchantId}/refunds/{refundId}/cancelapproval - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/refunds/cancelapproval.html">Undo approve refund</a>
   */
  cancelapproval(merchantId: string, refundId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<void, ErrorResponse>>;
}

export interface FindRefundsParams extends PaymentContext {
  hostedCheckoutId?: string;
  merchantReference?: string;
  merchantOrderId?: number;
  offset?: number;
  limit?: number;
}
