/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { ApprovePayoutRequest, CreatePayoutRequest, ErrorResponse, FindPayoutsResponse, PayoutErrorResponse, PayoutResponse } from "../domain";

export interface PayoutsClient {
  /**
   * Resource /{merchantId}/payouts - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payouts/create.html">Create payout</a>
   */
  create(merchantId: string, postData: CreatePayoutRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<PayoutResponse, PayoutErrorResponse>>;
  /**
   * Resource /{merchantId}/payouts - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payouts/find.html">Find payouts</a>
   */
  find(merchantId: string, paymentContext: FindPayoutsParams): Promise<SdkResponse<FindPayoutsResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payouts/{payoutId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payouts/get.html">Get payout</a>
   */
  get(merchantId: string, payoutId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<PayoutResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payouts/{payoutId}/approve - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payouts/approve.html">Approve payout</a>
   */
  approve(merchantId: string, payoutId: string, postData: ApprovePayoutRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<PayoutResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payouts/{payoutId}/cancel - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payouts/cancel.html">Cancel payout</a>
   */
  cancel(merchantId: string, payoutId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<void, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payouts/{payoutId}/cancelapproval - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payouts/cancelapproval.html">Undo approve payout</a>
   */
  cancelapproval(merchantId: string, payoutId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<void, ErrorResponse>>;
}

export interface FindPayoutsParams extends PaymentContext {
  merchantReference?: string;
  merchantOrderId?: number;
  offset?: number;
  limit?: number;
}
