/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { assertSuccess } from "../../../src";
import client, { config } from "../init";

/**
 * @group integration
 */
describe("convertAmount", () => {
  test("called successfully", async () => {
    const query = {
      source: "EUR",
      target: "USD",
      amount: 100
    };

    const response = await client.v1.services.convertAmount(config.merchantId, query);
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();

    const responseBody = assertSuccess(response).body;
    expect(responseBody.convertedAmount).not.toBeNull();
  });
});
