/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { BankDetailsRequest, BankDetailsResponse, ErrorResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/BankDetailsRequest.json");

export function bankaccount(
  sdkContext: SdkContext
): (merchantId: string, postData: BankDetailsRequest, paymentContext?: PaymentContext | null) => Promise<SdkResponse<BankDetailsResponse, ErrorResponse>> {
  return function(merchantId, postData, paymentContext): Promise<SdkResponse<BankDetailsResponse, ErrorResponse>> {
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
        modulePath: "/v1/" + merchantId + "/services/convert/bankaccount",
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<BankDetailsResponse, ErrorResponse>>;
  };
}
