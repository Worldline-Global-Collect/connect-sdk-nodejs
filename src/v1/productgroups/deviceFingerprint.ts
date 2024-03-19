/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { DeviceFingerprintRequest, DeviceFingerprintResponse, ErrorResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/DeviceFingerprintRequest.json");

export function deviceFingerprint(
  sdkContext: SdkContext
): (
  merchantId: string,
  paymentProductGroupId: string,
  postData: DeviceFingerprintRequest,
  paymentContext?: PaymentContext | null
) => Promise<SdkResponse<DeviceFingerprintResponse, ErrorResponse>> {
  return function(merchantId, paymentProductGroupId, postData, paymentContext): Promise<SdkResponse<DeviceFingerprintResponse, ErrorResponse>> {
    // validate postData
    const isValidRequest = validate(postData, requestSchema);
    if (!isValidRequest.valid) {
      const logger = sdkContext.getLogger();
      if (sdkContext.isLoggingEnabled()) {
        logger("error", isValidRequest.errors);
      }
      throw new Error(isValidRequest.errors.toString());
    }
    return json(
      {
        method: "POST",
        modulePath: "/v1/" + merchantId + "/productgroups/" + paymentProductGroupId + "/deviceFingerprint",
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<DeviceFingerprintResponse, ErrorResponse>>;
  };
}
