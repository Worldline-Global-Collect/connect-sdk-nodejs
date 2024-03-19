/* eslint-disable @typescript-eslint/no-non-null-assertion */

import * as uuid from "uuid";
import { PaymentContext, SdkResponse } from "../../../src/model";
import { CreatePaymentResponse, CreatePaymentResult, PaymentErrorResponse } from "../../../src/v1/model/domain";
import client, { config } from "../init";

/**
 * @group integration
 */
describe("Idempotence", () => {
  test("causes second request to be idempotent", async () => {
    const body = {
      order: {
        amountOfMoney: {
          currencyCode: "EUR",
          amount: 100
        },
        customer: {
          locale: "en_GB",
          billingAddress: {
            countryCode: "NL"
          }
        }
      },
      redirectPaymentMethodSpecificInput: {
        returnUrl: "http://example.com/",
        paymentProductId: 809,
        paymentProduct809SpecificInput: {
          issuerId: "INGBNL2A"
        }
      }
    };

    const idempotenceKey = uuid.v4();
    const paymentContext: PaymentContext = {
      idempotence: {
        key: idempotenceKey
      }
    };

    function extractPaymentResult(response: SdkResponse<CreatePaymentResponse, PaymentErrorResponse>): CreatePaymentResult {
      // For this test it doesn't matter if the response is successful or declined,
      // as long as idempotence is handled correctly
      return response.isSuccess ? response.body : response.body.paymentResult!;
    }

    const response = await client.v1.payments.create(config.merchantId, body, paymentContext);
    expect(response.body).toBeTruthy();

    const paymentResult = extractPaymentResult(response);
    expect(paymentResult.payment).toBeTruthy();
    expect(paymentResult.payment!.id).toBeTruthy();
    expect(paymentContext.idempotence?.key).toBe(idempotenceKey);
    expect(paymentContext.idempotence?.requestTimestamp).toBeUndefined();

    const response2 = await client.v1.payments.create(config.merchantId, body, paymentContext);
    expect(response2.status).toBe(response!.status);
    expect(response2.body).toBeTruthy();

    const paymentResult2 = extractPaymentResult(response2);
    expect(paymentResult2.payment).toBeTruthy();
    expect(paymentResult2.payment!.id).toBe(paymentResult.payment!.id);
    expect(paymentContext.idempotence?.key).toBe(idempotenceKey);
    expect(paymentContext.idempotence?.requestTimestamp).not.toBeUndefined();
    expect(paymentContext.idempotence?.requestTimestamp).not.toBeNull();
  });
});
