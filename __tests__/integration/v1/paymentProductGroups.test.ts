import { assertSuccess } from "../../../src";
import client, { config } from "../init";

/**
 * @group integration
 */
describe("paymentProductGroup", () => {
  test("with id 'cards' retrieved successfully", async () => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR"
    };

    const response = await client.v1.productgroups.get(config.merchantId, "cards", query);
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();

    const responseBody = assertSuccess(response).body;
    expect(responseBody.id).toBe("cards");
  });
});
