/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { InMemorySecretKeyStore } from "./types";
import { V1WebhooksFactory } from "../../v1/model/webhooks";

export interface Webhooks {
  readonly v1: V1WebhooksFactory;

  readonly inMemorySecretKeyStore: InMemorySecretKeyStore;
}

export * from "./types";
