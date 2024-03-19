/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { CreateHostedMandateManagementRequest, CreateHostedMandateManagementResponse, ErrorResponse, GetHostedMandateManagementResponse } from "../domain";

export interface HostedmandatemanagementsClient {
  /**
   * Resource /{merchantId}/hostedmandatemanagements - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/hostedmandatemanagements/create.html">Create hosted mandate management</a>
   */
  create(
    merchantId: string,
    postData: CreateHostedMandateManagementRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<CreateHostedMandateManagementResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/hostedmandatemanagements/{hostedMandateManagementId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/hostedmandatemanagements/get.html">Get hosted mandate management status</a>
   */
  get(merchantId: string, hostedMandateManagementId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<GetHostedMandateManagementResponse, ErrorResponse>>;
}
