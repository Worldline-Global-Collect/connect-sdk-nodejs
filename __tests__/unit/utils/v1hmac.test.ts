import { getV1HMACSignature } from "../../../src/utils/authentication";

/**
 * @group unit:authentication
 */
describe("getV1HMACSignature", () => {
  test("with contentType and headers", () => {
    const secretApiKey = "secretApiKey";

    const headers = [
      {
        key: "X-GCS-CustomerHeader",
        value: "processed header value"
      },
      {
        key: "X-GCS-ClientMetaInfo",
        value: "processed header value"
      },
      {
        key: "X-GCS-ServerMetaInfo",
        value: "processed header value"
      }
    ];

    const signature = getV1HMACSignature("DELETE", "application/json", "Fri, 06 Jun 2014 13:39:43 GMT", headers, "/v1/9991/tokens/123456789", secretApiKey);
    expect(signature).toBe("VfnXpPBQQoHZivTcAg0JvOWkhnzlPnaCPKpTQn/uMJM=");
  });

  test("without contentType or headers", () => {
    const secretApiKey = "6Kj5HT0MQKC6D8eb7W3lTg71kVKVDSt1";

    const signature = getV1HMACSignature("GET", "", "Fri, 06 Jun 2014 13:39:43 GMT", [], "/v1/9991/tokens/123456789", secretApiKey);
    expect(signature).toBe("9ond5EIN05dBXJGCLRK5om9pxHsyrh/12pZJ7bvmwNM=");
  });
});
