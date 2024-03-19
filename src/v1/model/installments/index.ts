/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { ErrorResponse, GetInstallmentRequest, InstallmentOptionsResponse } from "../domain";

export interface InstallmentsClient {
  /**
   * Resource /{merchantId}/installments/getInstallmentsInfo - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/installments/getInstallmentsInfo.html">Get installment information</a>
   */
  getInstallmentsInfo(merchantId: string, postData: GetInstallmentRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<InstallmentOptionsResponse, ErrorResponse>>;
}
