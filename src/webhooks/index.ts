/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { InMemorySecretKeyStore, SecretKeyNotAvailableError } from "../model/webhooks";
import { v1WebhooksFactory } from "../v1/webhooks";

const secretKeyStore: object = {};

export const v1 = v1WebhooksFactory;

export const inMemorySecretKeyStore: InMemorySecretKeyStore = {
  getSecretKey(keyId): Promise<string> {
    const secretKey = secretKeyStore[keyId];
    if (secretKey) {
      return Promise.resolve(secretKey);
    } else {
      return Promise.reject(new SecretKeyNotAvailableError(`could not find secret key for key id ${keyId}`, keyId));
    }
  },
  storeSecretKey(keyId, secretKey): void {
    if (!keyId || !keyId.trim()) {
      throw new Error("keyId is required");
    }
    if (!secretKey || !secretKey.trim()) {
      throw new Error("secretKey is required");
    }
    secretKeyStore[keyId] = secretKey;
  },
  removeSecretKey(keyId): void {
    delete secretKeyStore[keyId];
  },
  clear(): void {
    for (const prop in secretKeyStore) {
      if (Object.prototype.hasOwnProperty.call(secretKeyStore, prop)) {
        delete secretKeyStore[prop];
      }
    }
  }
};
