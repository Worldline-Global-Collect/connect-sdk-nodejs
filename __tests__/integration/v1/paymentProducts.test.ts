/* eslint-disable @typescript-eslint/no-non-null-assertion */

import each from "jest-each";
import { assertSuccess } from "../../../src";
import client, { config } from "../init";

/**
 * @group integration
 */
describe("paymentProducts", () => {
  test("retrieved successfully", async () => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR"
    };

    const response = await client.v1.products.find(config.merchantId, query);
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();

    const responseBody = assertSuccess(response).body;
    expect(responseBody.paymentProducts).not.toBeNull();
    expect(responseBody.paymentProducts!.length).not.toBe(0);
  });
});

describe("paymentProduct", () => {
  each([809]).test("with id %d retrieved successfully", async id => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR"
    };

    const response = await client.v1.products.get(config.merchantId, id, query);
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();

    const responseBody = assertSuccess(response).body;
    expect(responseBody.id).toBe(id);
  });
});
