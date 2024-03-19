/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator";
import { PaymentContext, SdkContext, SdkResponse } from "../../model";
import { CreateMandateRequest, CreateMandateResponse, ErrorResponse } from "../model/domain";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../../schemas/v1/CreateMandateRequest.json");

export function createWithMandateReference(
  sdkContext: SdkContext
): (
  merchantId: string,
  uniqueMandateReference: string,
  postData: CreateMandateRequest,
  paymentContext?: PaymentContext | null
) => Promise<SdkResponse<CreateMandateResponse, ErrorResponse>> {
  return function(merchantId, uniqueMandateReference, postData, paymentContext): Promise<SdkResponse<CreateMandateResponse, ErrorResponse>> {
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
        method: "PUT",
        modulePath: "/v1/" + merchantId + "/mandates/" + uniqueMandateReference,
        body: postData,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CreateMandateResponse, ErrorResponse>>;
  };
}
