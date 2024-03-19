/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import {
  BankDetailsRequest,
  BankDetailsResponse,
  ConvertAmount,
  ErrorResponse,
  GetIINDetailsRequest,
  GetIINDetailsResponse,
  GetPrivacyPolicyResponse,
  TestConnection
} from "../domain";

export interface ServicesClient {
  /**
   * Resource /{merchantId}/services/convert/amount - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/services/convertAmount.html">Convert amount</a>
   */
  convertAmount(merchantId: string, paymentContext: ConvertAmountParams): Promise<SdkResponse<ConvertAmount, ErrorResponse>>;
  /**
   * Resource /{merchantId}/services/convert/bankaccount - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/services/bankaccount.html">Convert bankaccount</a>
   */
  bankaccount(merchantId: string, postData: BankDetailsRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<BankDetailsResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/services/getIINdetails - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/services/getIINdetails.html">Get IIN details</a>
   */
  getIINdetails(merchantId: string, postData: GetIINDetailsRequest, paymentContext?: PaymentContext | null): Promise<SdkResponse<GetIINDetailsResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/services/privacypolicy - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/services/privacypolicy.html">Get privacy policy</a>
   */
  privacypolicy(merchantId: string, paymentContext: PrivacypolicyParams): Promise<SdkResponse<GetPrivacyPolicyResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/services/testconnection - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/services/testconnection.html">Test connection</a>
   */
  testconnection(merchantId: string, paymentContext?: PaymentContext | null): Promise<SdkResponse<TestConnection, ErrorResponse>>;
}

export interface ConvertAmountParams extends PaymentContext {
  source?: string;
  target?: string;
  amount?: number;
}

export interface PrivacypolicyParams extends PaymentContext {
  locale?: string;
  paymentProductId?: number;
}
