/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import {
  ApprovePaymentRequest,
  CancelApprovalPaymentResponse,
  CancelPaymentResponse,
  CapturePaymentRequest,
  CaptureResponse,
  CapturesResponse,
  CompletePaymentRequest,
  CompletePaymentResponse,
  CreateDisputeRequest,
  CreatePaymentRequest,
  CreatePaymentResponse,
  CreateTokenResponse,
  DeviceFingerprintDetails,
  DisputeResponse,
  DisputesResponse,
  ErrorResponse,
  FindPaymentsResponse,
  PaymentApprovalResponse,
  PaymentErrorResponse,
  PaymentResponse,
  RefundErrorResponse,
  RefundRequest,
  RefundResponse,
  RefundsResponse,
  ThirdPartyStatusResponse,
  TokenizePaymentRequest
} from "../domain";

export interface PaymentsClient {
  /**
   * Resource /{merchantId}/payments - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/create.html">Create payment</a>
   */
  create(merchantId: string, postData: CreatePaymentRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<CreatePaymentResponse, PaymentErrorResponse>>;
  /**
   * Resource /{merchantId}/payments - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/find.html">Find payments</a>
   */
  find(merchantId: string, paymentContext: FindPaymentsParams): Promise<SdkResponse<FindPaymentsResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/get.html">Get payment</a>
   */
  get(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<PaymentResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/complete - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/complete.html">Complete payment</a>
   */
  complete(
    merchantId: string,
    paymentId: string,
    postData: CompletePaymentRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<CompletePaymentResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/thirdpartystatus - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/thirdPartyStatus.html">Third party status poll</a>
   */
  thirdPartyStatus(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<ThirdPartyStatusResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/tokenize - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/tokenize.html">Create a token from payment</a>
   */
  tokenize(
    merchantId: string,
    paymentId: string,
    postData: TokenizePaymentRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<CreateTokenResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/processchallenged - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/processchallenged.html">Approves challenged payment</a>
   */
  processchallenged(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<PaymentResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/approve - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/approve.html">Approve payment</a>
   */
  approve(
    merchantId: string,
    paymentId: string,
    postData: ApprovePaymentRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<PaymentApprovalResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/capture - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/capture.html">Capture payment</a>
   */
  capture(merchantId: string, paymentId: string, postData: CapturePaymentRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<CaptureResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/cancelapproval - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/cancelapproval.html">Undo capture payment</a>
   */
  cancelapproval(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<CancelApprovalPaymentResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/captures - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/captures.html">Get captures of payment</a>
   */
  captures(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<CapturesResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/refund - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/refund.html">Create refund</a>
   */
  refund(merchantId: string, paymentId: string, postData: RefundRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<RefundResponse, RefundErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/refunds - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/refunds.html">Get refunds of payment</a>
   */
  refunds(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<RefundsResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/cancel - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/cancel.html">Cancel payment</a>
   */
  cancel(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<CancelPaymentResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/dispute - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/dispute.html">Create dispute</a>
   */
  dispute(merchantId: string, paymentId: string, postData: CreateDisputeRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<DisputeResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/disputes - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/disputes.html">Get disputes</a>
   */
  disputes(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<DisputesResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/payments/{paymentId}/devicefingerprint - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/payments/devicefingerprint.html">Get Device Fingerprint details</a>
   */
  devicefingerprint(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<DeviceFingerprintDetails, ErrorResponse>>;
}

export interface FindPaymentsParams extends PaymentContext {
  hostedCheckoutId?: string;
  merchantReference?: string;
  merchantOrderId?: number;
  offset?: number;
  limit?: number;
}
