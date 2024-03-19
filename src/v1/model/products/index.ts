/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import {
  CreatePaymentProductSessionRequest,
  CreatePaymentProductSessionResponse,
  DeviceFingerprintRequest,
  DeviceFingerprintResponse,
  Directory,
  ErrorResponse,
  GetCustomerDetailsRequest,
  GetCustomerDetailsResponse,
  PaymentProductNetworksResponse,
  PaymentProductResponse,
  PaymentProducts
} from "../domain";

export interface ProductsClient {
  /**
   * Resource /{merchantId}/products - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/products/find.html">Get payment products</a>
   */
  find(merchantId: string, paymentContext: FindProductsParams): Promise<SdkResponse<PaymentProducts, ErrorResponse>>;
  /**
   * Resource /{merchantId}/products/{paymentProductId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/products/get.html">Get payment product</a>
   */
  get(merchantId: string, paymentProductId: number, paymentContext: GetProductParams): Promise<SdkResponse<PaymentProductResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/directory - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/products/directory.html">Get payment product directory</a>
   */
  directory(merchantId: string, paymentProductId: number, paymentContext: DirectoryParams): Promise<SdkResponse<Directory, ErrorResponse>>;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/customerDetails - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/products/customerDetails.html">Get customer details</a>
   */
  customerDetails(
    merchantId: string,
    paymentProductId: number,
    postData: GetCustomerDetailsRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<GetCustomerDetailsResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/deviceFingerprint - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/products/deviceFingerprint.html">Get device fingerprint</a>
   */
  deviceFingerprint(
    merchantId: string,
    paymentProductId: number,
    postData: DeviceFingerprintRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<DeviceFingerprintResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/networks - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/products/networks.html">Get payment product networks</a>
   */
  networks(merchantId: string, paymentProductId: number, paymentContext: NetworksParams): Promise<SdkResponse<PaymentProductNetworksResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/sessions - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/products/sessions.html">Create session for payment product</a>
   */
  sessions(
    merchantId: string,
    paymentProductId: number,
    postData: CreatePaymentProductSessionRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<CreatePaymentProductSessionResponse, ErrorResponse>>;
}

export interface FindProductsParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  locale?: string;
  amount?: number;
  isRecurring?: boolean;
  isInstallments?: boolean;
  hide?: string[];
}

export interface GetProductParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  locale?: string;
  amount?: number;
  isRecurring?: boolean;
  isInstallments?: boolean;
  hide?: string[];
  forceBasicFlow?: boolean;
}

export interface DirectoryParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
}

export interface NetworksParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  amount?: number;
  isRecurring?: boolean;
}
