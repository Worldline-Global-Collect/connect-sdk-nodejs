/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { ApproveTokenRequest, CreateTokenRequest, CreateTokenResponse, ErrorResponse, TokenResponse, UpdateTokenRequest } from "../domain";

export interface TokensClient {
  /**
   * Resource /{merchantId}/tokens - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/tokens/create.html">Create token</a>
   */
  create(merchantId: string, postData: CreateTokenRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<CreateTokenResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/tokens/{tokenId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/tokens/get.html">Get token</a>
   */
  get(merchantId: string, tokenId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<TokenResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/tokens/{tokenId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/tokens/update.html">Update token</a>
   */
  update(merchantId: string, tokenId: string, postData: UpdateTokenRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<void, ErrorResponse>>;
  /**
   * Resource /{merchantId}/tokens/{tokenId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/tokens/delete.html">Delete token</a>
   */
  remove(merchantId: string, tokenId: string, paymentContext: DeleteTokenParams): Promise<SdkResponse<void, ErrorResponse>>;
  /**
   * Resource /{merchantId}/tokens/{tokenId}/approvesepadirectdebit - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/tokens/approvesepadirectdebit.html">Approve SEPA DD mandate</a>
   */
  approvesepadirectdebit(merchantId: string, tokenId: string, postData: ApproveTokenRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<void, ErrorResponse>>;
}

export interface DeleteTokenParams extends PaymentContext {
  mandateCancelDate?: string;
}
