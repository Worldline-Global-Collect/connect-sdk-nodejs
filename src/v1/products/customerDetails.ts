/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { ErrorResponse, GetCustomerDetailsRequest, GetCustomerDetailsResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/GetCustomerDetailsRequest.json");

export function customerDetails(
  sdkContext: SdkContext
): (
  merchantId: string,
  paymentProductId: number,
  postData: GetCustomerDetailsRequest,
  paymentContext?: PaymentContext | null
) => Promise<SdkResponse<GetCustomerDetailsResponse, ErrorResponse>> {
  return function(merchantId, paymentProductId, postData, paymentContext): Promise<SdkResponse<GetCustomerDetailsResponse, ErrorResponse>> {
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
        modulePath: "/v1/" + merchantId + "/products/" + paymentProductId + "/customerDetails",
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<GetCustomerDetailsResponse, ErrorResponse>>;
  };
}
