/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { ErrorResponse, RiskAssessmentBankAccount, RiskAssessmentCard, RiskAssessmentResponse } from "../domain";

export interface RiskassessmentsClient {
  /**
   * Resource /{merchantId}/riskassessments/bankaccounts - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/riskassessments/bankaccounts.html">Risk-assess bankaccount</a>
   */
  bankaccounts(merchantId: string, postData: RiskAssessmentBankAccount, paymentContext?: PaymentContext | null): Promise<SdkResponse<RiskAssessmentResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/riskassessments/cards - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/riskassessments/cards.html">Risk-assess card</a>
   */
  cards(merchantId: string, postData: RiskAssessmentCard, paymentContext?: PaymentContext | null): Promise<SdkResponse<RiskAssessmentResponse, ErrorResponse>>;
}
