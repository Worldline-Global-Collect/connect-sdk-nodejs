/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { ErrorResponse, SessionRequest, SessionResponse } from "../domain";

export interface SessionsClient {
  /**
   * Resource /{merchantId}/sessions - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/sessions/create.html">Create session</a>
   */
  create(merchantId: string, postData: SessionRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<SessionResponse, ErrorResponse>>;
}
