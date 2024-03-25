/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { assertSuccess } from "../../../src";
import client, { config } from "../init";

/**
 * @group integration
 */
describe("token", () => {
  test("created and deleted successfully", async () => {
    const body = {
      paymentProductId: 1,
      card: {
        customer: {
          billingAddress: {
            countryCode: "NL"
          }
        },
        data: {
          cardWithoutCvv: {
            cardholderName: "Jan",
            issueNumber: "12",
            cardNumber: "4567350000427977",
            expiryDate: "1225"
          }
        }
      }
    };

    const createResponse = await client.v1.tokens.create(config.merchantId, body);
    expect(createResponse.status).toBeGreaterThanOrEqual(200);
    expect(createResponse.status).toBeLessThanOrEqual(201);
    expect(createResponse.body).not.toBeNull();

    const createResponseBody = assertSuccess(createResponse).body;
    expect(createResponseBody.token).not.toBeNull();
    expect(createResponseBody.isNewToken).toBeDefined();

    if (createResponseBody.isNewToken) {
      const deleteResponse = await client.v1.tokens.remove(config.merchantId, createResponseBody.token!, {});
      expect(deleteResponse.status).toBe(204);
    }
  });
});
