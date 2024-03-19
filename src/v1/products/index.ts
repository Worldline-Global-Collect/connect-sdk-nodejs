/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { find } from "./find";
import { get } from "./get";
import { directory } from "./directory";
import { customerDetails } from "./customerDetails";
import { deviceFingerprint } from "./deviceFingerprint";
import { networks } from "./networks";
import { sessions } from "./sessions";
import { SdkContext } from "../../model";
import { ProductsClient } from "../model/products";

export function newProductsClient(sdkContext: SdkContext): ProductsClient {
  return {
    find: find(sdkContext),
    get: get(sdkContext),
    directory: directory(sdkContext),
    customerDetails: customerDetails(sdkContext),
    deviceFingerprint: deviceFingerprint(sdkContext),
    networks: networks(sdkContext),
    sessions: sessions(sdkContext)
  };
}
