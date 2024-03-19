import * as uuid from "uuid";
import { assertSuccess } from "../../src";
import { SdkApiError, SdkBinaryResponse, SdkResponse } from "../../src/model";
import { ErrorResponse, TestConnection } from "../../src/v1/model/domain";
import { Readable } from "stream";

/**
 * @group unit:index
 */
describe("assertSuccess", () => {
  describe("SdkResponse", () => {
    test("isSuccess", () => {
      const response: SdkResponse<TestConnection, ErrorResponse> = {
        status: 200,
        isSuccess: true,
        body: {
          result: "OK"
        }
      };
      const asserted = assertSuccess(response);
      expect(asserted).toBe(response);
    });

    test("!isSuccess", () => {
      const response: SdkResponse<TestConnection, ErrorResponse> = {
        status: 500,
        isSuccess: false,
        body: {
          errorId: uuid.v4()
        }
      };
      try {
        assertSuccess(response);
        fail("expected an error");
      } catch (e) {
        const error = e as SdkApiError<ErrorResponse>;
        expect(error.message).toBe("the Worldline Global Collect platform returned an error response");
        expect(error.status).toBe(response.status);
        expect(error.body).toBe(response.body);
      }
    });
  });

  describe("SdkBinaryResponse", () => {
    test("isSuccess", () => {
      const response: SdkBinaryResponse<ErrorResponse> = {
        status: 200,
        isSuccess: true,
        body: new Readable(),
        file: {
          contentType: "text/plain",
          contentLength: 0,
          filename: "test.txt"
        }
      };
      const asserted = assertSuccess(response);
      expect(asserted).toBe(response);
    });

    test("!isSuccess", () => {
      const response: SdkBinaryResponse<ErrorResponse> = {
        status: 500,
        isSuccess: false,
        body: {
          errorId: uuid.v4()
        }
      };
      try {
        assertSuccess(response);
        fail("expected an error");
      } catch (e) {
        const error = e as SdkApiError<ErrorResponse>;
        expect(error.message).toBe("the Worldline Global Collect platform returned an error response");
        expect(error.status).toBe(response.status);
        expect(error.body).toBe(response.body);
      }
    });
  });
});
