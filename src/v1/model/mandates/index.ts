/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { CreateMandateRequest, CreateMandateResponse, ErrorResponse, GetMandateResponse } from "../domain";

export interface MandatesClient {
  /**
   * Resource /{merchantId}/mandates - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/mandates/create.html">Create mandate</a>
   */
  create(merchantId: string, postData: CreateMandateRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<CreateMandateResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/mandates/createWithMandateReference.html">Create mandate with mandatereference</a>
   */
  createWithMandateReference(
    merchantId: string,
    uniqueMandateReference: string,
    postData: CreateMandateRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<CreateMandateResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/mandates/get.html">Get mandate</a>
   */
  get(merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<GetMandateResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference}/block - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/mandates/block.html">Block mandate</a>
   */
  block(merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<GetMandateResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference}/unblock - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/mandates/unblock.html">Unblock mandate</a>
   */
  unblock(merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<GetMandateResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference}/revoke - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/mandates/revoke.html">Revoke mandate</a>
   */
  revoke(merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<GetMandateResponse, ErrorResponse>>;
}
