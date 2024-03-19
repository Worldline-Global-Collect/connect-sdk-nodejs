/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { PaymentContext, SdkResponse } from "../../../model/types";
import { DeviceFingerprintRequest, DeviceFingerprintResponse, ErrorResponse, PaymentProductGroupResponse, PaymentProductGroups } from "../domain";

export interface ProductgroupsClient {
  /**
   * Resource /{merchantId}/productgroups - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/productgroups/find.html">Get payment product groups</a>
   */
  find(merchantId: string, paymentContext: FindProductgroupsParams): Promise<SdkResponse<PaymentProductGroups, ErrorResponse>>;
  /**
   * Resource /{merchantId}/productgroups/{paymentProductGroupId} - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/productgroups/get.html">Get payment product group</a>
   */
  get(merchantId: string, paymentProductGroupId: string, paymentContext: GetProductgroupParams): Promise<SdkResponse<PaymentProductGroupResponse, ErrorResponse>>;
  /**
   * Resource /{merchantId}/productgroups/{paymentProductGroupId}/deviceFingerprint - <a href="https://apireference.connect.worldline-solutions.com/s2sapi/v1/en_US/nodejs/productgroups/deviceFingerprint.html">Get device fingerprint</a>
   */
  deviceFingerprint(
    merchantId: string,
    paymentProductGroupId: string,
    postData: DeviceFingerprintRequest,
    paymentContext?: PaymentContext | null
  ): Promise<SdkResponse<DeviceFingerprintResponse, ErrorResponse>>;
}

export interface FindProductgroupsParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  locale?: string;
  amount?: number;
  isRecurring?: boolean;
  isInstallments?: boolean;
  hide?: string[];
}

export interface GetProductgroupParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  locale?: string;
  amount?: number;
  isRecurring?: boolean;
  isInstallments?: boolean;
  hide?: string[];
}
