# Migrating from version 4.x.x to 5.0.0

Note: in this migration guide, `connectSdk` is the SDK's main module, as imported using `import * as connectSdk from "connect-sdk-nodejs"` or `const connectSdk = require("connect-sdk-nodejs")`.

## Node.js version

The minimum supported Node.js version has changed from Node.js 8 to Node.js 12. If you're still using an older version you need to update to Node.js 12.

## Imports

Each API version now has its own module structure that contains all interfaces (and implementations) specific for that version, including interfaces like `APIError` and `WebhooksHelper`.

You need to change your imports as follows:

| Previous module                                       | Interface             | New module                                               | Notes |
|-------------------------------------------------------|-----------------------|----------------------------------------------------------|-------|
| connect-sdk-nodejs/lib/model/captures                 | All interfaces        | connect-sdk-nodejs/lib/v1/model/captures                 |
| connect-sdk-nodejs/lib/model/disputes                 | All interfaces        | connect-sdk-nodejs/lib/v1/model/disputes                 |
| connect-sdk-nodejs/lib/model/domain/metadata          | ShoppingCartExtension | connect-sdk-nodejs/lib/model/domain                      |
| connect-sdk-nodejs/lib/model/domain/*                 | All interfaces        | connect-sdk-nodejs/lib/v1/model/domain                   | All domain classes for version 1 of the API are now in the same module |
| connect-sdk-nodejs/lib/model/files                    | All interfaces        | connect-sdk-nodejs/lib/v1/model/files                    |
| connect-sdk-nodejs/lib/model/hostedcheckouts          | All interfaces        | connect-sdk-nodejs/lib/v1/model/hostedcheckouts          |
| connect-sdk-nodejs/lib/model/hostedmandatemanagements | All interfaces        | connect-sdk-nodejs/lib/v1/model/hostedmandatemanagements |
| connect-sdk-nodejs/lib/model/installments             | All interfaces        | connect-sdk-nodejs/lib/v1/model/installments             |
| connect-sdk-nodejs/lib/model/mandates                 | All interfaces        | connect-sdk-nodejs/lib/v1/model/mandates                 |
| connect-sdk-nodejs/lib/model/payments                 | All interfaces        | connect-sdk-nodejs/lib/v1/model/payments                 |
| connect-sdk-nodejs/lib/model/payouts                  | All interfaces        | connect-sdk-nodejs/lib/v1/model/payouts                  |
| connect-sdk-nodejs/lib/model/productgroups            | All interfaces        | connect-sdk-nodejs/lib/v1/model/productgroups            |
| connect-sdk-nodejs/lib/model/products                 | All interfaces        | connect-sdk-nodejs/lib/v1/model/products                 |
| connect-sdk-nodejs/lib/model/refunds                  | All interfaces        | connect-sdk-nodejs/lib/v1/model/refunds                  |
| connect-sdk-nodejs/lib/model/riskassessments          | All interfaces        | connect-sdk-nodejs/lib/v1/model/riskassessments          |
| connect-sdk-nodejs/lib/model/services                 | All interfaces        | connect-sdk-nodejs/lib/v1/model/services                 |
| connect-sdk-nodejs/lib/model/sessions                 | All interfaces        | connect-sdk-nodejs/lib/v1/model/sessions                 |
| connect-sdk-nodejs/lib/model/tokens                   | All interfaces        | connect-sdk-nodejs/lib/v1/model/tokens                   |
| connect-sdk-nodejs/lib/model/webhooks                 | WebhooksHelper        | connect-sdk-nodejs/lib/v1/model/webhooks                 |
| connect-sdk-nodejs/lib/captures                       | All interfaces        | connect-sdk-nodejs/lib/v1/captures                       |
| connect-sdk-nodejs/lib/disputes                       | All interfaces        | connect-sdk-nodejs/lib/v1/disputes                       |
| connect-sdk-nodejs/lib/files                          | All interfaces        | connect-sdk-nodejs/lib/v1/files                          |
| connect-sdk-nodejs/lib/hostedcheckouts                | All interfaces        | connect-sdk-nodejs/lib/v1/hostedcheckouts                |
| connect-sdk-nodejs/lib/hostedmandatemanagements       | All interfaces        | connect-sdk-nodejs/lib/v1/hostedmandatemanagements       |
| connect-sdk-nodejs/lib/installments                   | All interfaces        | connect-sdk-nodejs/lib/v1/installments                   |
| connect-sdk-nodejs/lib/mandates                       | All interfaces        | connect-sdk-nodejs/lib/v1/mandates                       |
| connect-sdk-nodejs/lib/payments                       | All interfaces        | connect-sdk-nodejs/lib/v1/payments                       |
| connect-sdk-nodejs/lib/payouts                        | All interfaces        | connect-sdk-nodejs/lib/v1/payouts                        |
| connect-sdk-nodejs/lib/productgroups                  | All interfaces        | connect-sdk-nodejs/lib/v1/productgroups                  |
| connect-sdk-nodejs/lib/products                       | All interfaces        | connect-sdk-nodejs/lib/v1/products                       |
| connect-sdk-nodejs/lib/refunds                        | All interfaces        | connect-sdk-nodejs/lib/v1/refunds                        |
| connect-sdk-nodejs/lib/riskassessments                | All interfaces        | connect-sdk-nodejs/lib/v1/riskassessments                |
| connect-sdk-nodejs/lib/services                       | All interfaces        | connect-sdk-nodejs/lib/v1/services                       |
| connect-sdk-nodejs/lib/sessions                       | All interfaces        | connect-sdk-nodejs/lib/v1/sessions                       |
| connect-sdk-nodejs/lib/tokens                         | All interfaces        | connect-sdk-nodejs/lib/v1/tokens                         |

### JSON schemas

All JSON schemas have moved to folder `schemas/v1`. If needed you need to change your require statements. For instance:

```typescript
const schema = require("connect-sdk-nodejs/schemas/v1/CreatePaymentRequest.json");
```

## Initialization

The SDK no longer has a singleton client. Function `init` now returns a new object that implements new interface `Client` every time it is called. You need to capture the result of all calls to `init` in your code. For instance:

```typescript
const client = connectSdk.init({
  // existing properties
});
```

## Callbacks

Callbacks in the SDKs have been replaced with the use of promises. You need to change all occurrences in your code to work with promises instead of callbacks.

The simplest way is to capture the results of calling the API functions. For instance, using `await`:

```typescript
const sdkResponse = await client.v1.services.testconnection(merchantId);
// sdkResponse still contains properties status, body, isSuccess and (for file downloads) file
```

If you prefer to work with callbacks you can use [util.callbackify](https://nodejs.org/docs/latest-v20.x/api/util.html#utilcallbackifyoriginal). For instance:

```typescript
import { callbackify } from "util";

callbackify(client.v1.services.testconnection)(merchantId, null, (error, response) => {
  // existing code
});
```

### Webhooks

Whereas other functions return promises created by the SDK, you need to provide the promise returned by method `getSecretKey` of interfaces `SecretKeyStore` and `WebhooksContext`. For instance:

```typescript
const store: SecretKeyStore = {
  getSecretKey: (keyId: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      // existing code; replace cb(error, null) with reject(error) and cb(null, result) with resolve(result)
    });
  }
}
```

### Connection

For technical reasons, functions from module `connect-sdk-nodejs/lib/utils/connection` still use callbacks.

## API calls

The properties for API clients like `connectSdk.payments` have moved to new interface `V1Client`. Implementations of this interface are available through property `v1` of interface `Client`. You need to add `.v1` to all API calls in your code. For an example, see [Callbacks](#callbacks).

### Exports

Modules for API clients and calls like `connect-sdk-nodejs/lib/v1/payments` or `connect-sdk-nodejs/lib/v1/payments/create` now export named functions that take an `SdkContext` argument and return what was exported previously. You should ideally access these only through the client returned by calling `connectSdk.init`. Otherwise, you need to replace all occurrences in your code with proper imports and calls, where you provide the `SdkContext`. For instance:

```typescript
import { create as createPayment } from "connect-sdk-nodejs/lib/v1/payments/create";
import { newPaymentsClient } from "connect-sdk-nodejs/lib/v1/payments";
impotr { CreatePaymentResponse} from "connect-sdk-nodejs/lib/v1/model/domain";

const createResponse = await createPayment(sdkContext)(merchantId, body, paymentContext);
const responseBody = createResponse.body as CreatePaymentResponse;
const getResponse = await newPaymentsClient(SdkContext)(merchantId, responseBody.payment.id, paymentContext);
```

## API version

Module `connect-sdk-nodejs/lib/utils/versions` with constant `apiVersion` has been removed. You need to replace all occurrences in your code with string literal `"v1"`.

## Context

Interface `Context` has been renamed to `Configuration`. You need to replace all occurrences in your code with the new name.

## SdkContext

Module `connect-sdk-nodejs/lib/utils/context` no longer exports a singleton `SdkContext` object. It instead exports function `newSdkContext` that creates a new instance every time it is called. Property `connectSdk.context` has moved to interface `Client`, so each client has its own context. You need to replace all occurrences to `connectSdk.context` in your code with `client.context`, where `client` is the result of calling `connectSdk.init`.

Instances created by `newSdkContext`, including the value of `client.context`, are mostly immutable - only logging can be reconfigured. Methods `setContext`, `setIntegrator` and `setShoppingCartExtension` of interface `SdkContext` have been removed, and method `getContext` has been replaced with methods `getEndpoint`, `getProxy` and `getObfuscationRules`. You need to replace all occurrences of these `set` methods in your code with calls to `connectSdk.init`, creating a new `Client` instance with a new `SdkContext` instance, and replace all occurrences of method `getContext` in your code with calls to these new `get` methods.

### Authentication

Method `getSignature` of interface `SdkContext` has been replaced with method `getAuthenticator`. You need to replace all occurrences in your code with calls to `getAuthenticator`. Note that the `getAuthorization` method of the returned `Authenticator` object returns a promise.

You can also import function `getV1HMACSignature` of module `connect-sdk-nodejs/lib/utils/authentication`. This takes the same arguments as the previous `getSignature` method plus the secret API key.

## SdkResponse

Type `SdkResponse` is now generic to indicate the body types for successful and unsuccessful responses. The SDK's API functions specify the correct types. This makes casts unnecessary. For instance:

```typescript
const sdkResponse = await client.v1.services.testconnection(merchantId);
// sdkResponse's type is SdkResponse<TestConnection, ErrorResponse>
if (sdkResponse.isSuccess) {
  // sdkResponse.body's type is now TestConnection
} else {
  // sdkResponse.body's type is now ErrorResponse
}
```

Property `file` has moved to new type `SdkBinaryResponse`, where it has been made required. For instance:

```typescript
const sdkResponse = await client.v1.files.getFile(merchantId, fileId);
// sdkResponse's type is SdkBinaryResponse<ErrorResponse>, which is compatible with SdkResponse<Readable, ErrorResponse>
if (sdkResponse.isSuccess) {
  // sdkResponse.body's type is now Readable
  // sdkResponse.file is now available without needing ? or !, e.g. sdkResponse.file.contentType
} else {
  // sdkResponse.body's type is now ErrorResponse
  // sdkResponse.file is now *not* available
}
```

To make even the `isSuccess` check unnecessary the SDK now exports function `connectSdk.assertSuccess`. This will return the passed `SdkResponse` or `SdkBinaryResponse` as an `SdkSuccessResponse` or `SdkBinarySuccessResponse` if `isSuccess` is `true`, or throw an `SdkApiError` otherwise. For instance:

```typescript
const convertedAmount = connectSdk.assertSuccess(await client.v1.services.convertAmount(merchantId, query)).body.convertedAmount;
```

These examples assume you let TypeScript determine the types of constants automatically. If your code uses the `SdkResponse` type directly, you need to add the generic types to all occurrences. When necessary use `<any, any>`, as this makes the body type available as `any` like before. If your code uses the `file` property on constants, variables or parameters of type `SdkResponse` you need to change the type to `SdkBinaryResponse`, or otherwise cast the `SdkResponse` to `SdkBinaryResponse`.

## Idempotence

Interface `IdemPotence` and property `idemPotence` of interface `paymentContext` used incorrect capitalization. These have been renamed to `Idempotence` and `idempotence` respectively. You need to replace all occurrences in your code with the new names.

Methods `getIdempotenceRequestTimestamp` and `setIdempotenceRequestTimestamp` of interface `SdkContext` have been removed. The idempotence request timestamp is no longer set on a client's shared `SdkContext` object but on property `idempotence` of the request-specific `PaymentContext` instance instead. You need to replace all occurrences in your code with property `idempotence.requestTimestamp` of the `PaymentContext` instance. For instance:

```typescript
const paymentContext = {
  idempotence: {
    key: idempotenceKey
  }
};
const response = await client.v1.payments.create(merchantId, body, paymentContext);
// Note that the request timestamp is updated if the HTTP response contained an
// X-GCS-Idempotence-Request-Timestamp header, even if response.isSuccess is false
const idempotenceRequestTimestamp = paymentContext.idempotence.requestTimestamp;
```

## Communication

Functions `json` and `multipart` of module `connect-sdk-nodejs/lib/utils/communicator` now require an additional argument of type `SdkContext`. You need to change all occurrences in your code to provide a value for the `SdkContext` parameter.

## Obfuscation

The `SdkContext` parameter of function `getObfuscated` of module `connect-sdk-nodejs/lib/utils/obfuscate` has been made required. You need to make sure that all occurrences in your code provide a value for the `SdkContext` parameter.

## Webhooks

### Initializing webhooks helpers

Method `connectSdk.webhooks.init` has moved to new interface `V1WebhooksFactory`. An implementation of this interface is available through property `connectSdk.webhooks.v1`.

The SDK's webhooks helper no longer is a singleton object. Method `init` now returns a new object that implements interface `WebhooksHelper` every time it is called. You need to capture the result of all calls to `init` in your code. For instance:

```typescript
const webhooksHelper = connectSdk.webhooks.v1.init({
  getSecretKey: connectSdk.webhooks.inMemorySecretKeyStore.getSecretKey
});
```

### WebhooksHelper

Method `validate` of interface `WebhooksHelper` has been removed. You need to replace all occurrences in your code with a `SignatureValidator`.

### InMemorySecretKeyStore

Property `inMemorySecretKeyStore` of interface `WebhooksHelper` has moved to new interface `Webhooks`. You need to make that all occurrences in your code use `connectSdk.webhooks.inMemorySecretKeyStore`. Unless you used the result of calling `connectSdk.webhooks.init` you shouldn't have to make any changes though.

### SignatureValidator

Module `connect-sdk-nodejs/lib/webhooks/validation` no longer exports a singleton `SignatureValidator` object. It instead exports function `newSignatureValidator` that creates a new instance every time it is called. Because of this, method `init` of interface `SignatureValidator` has been removed. You need to replace all occurrences in your code with calls to function `newSignatureValidator`.
