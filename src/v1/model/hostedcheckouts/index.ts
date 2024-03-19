/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { CreateHostedCheckoutRequest, CreateHostedCheckoutResponse, ErrorResponse, GetHostedCheckoutResponse } from "../domain";

export interface HostedcheckoutsClient {
  /**
   * Resource /{merchantId}/hostedcheckouts - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/hostedcheckouts/create.html">Create hosted checkout</a>
   */
  create(merchantId: string, postData: CreateHostedCheckoutRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<CreateHostedCheckoutResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/hostedcheckouts/{hostedCheckoutId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/hostedcheckouts/get.html">Get hosted checkout status</a>
   */
  get(merchantId: string, hostedCheckoutId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<GetHostedCheckoutResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/hostedcheckouts/{hostedCheckoutId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/hostedcheckouts/delete.html">Delete hosted checkout</a>
   */
  remove(merchantId: string, hostedCheckoutId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<void, ErrorResponse>>;
}
