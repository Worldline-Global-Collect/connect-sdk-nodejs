import { assertSuccess } from "../../../src";
import client, { config } from "../init";

/**
 * @group integration
 */
describe("riskassessments", () => {
  describe("for bankaccounts", () => {
    test("called successfully", async () => {
      const body = {
        order: {
          amountOfMoney: {
            currencyCode: "EUR",
            amount: 100
          },
          customer: {
            locale: "en_GB"
          }
        },
        bankAccountBban: {
          countryCode: "DE",
          accountNumber: "0532013000",
          bankCode: "37040044"
        }
      };

      const response = await client.v1.riskassessments.bankaccounts(config.merchantId, body);
      expect(response.status).toBe(200);
      expect(response.body).not.toBeNull();

      const responseBody = assertSuccess(response).body;
      expect(responseBody.results).not.toBeNull();
      expect(responseBody.results).not.toBe([]);
    });
  });
});
