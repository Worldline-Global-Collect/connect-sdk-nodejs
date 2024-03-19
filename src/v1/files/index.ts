/*
 * This file was auto-generated from the API references found at
 * https://apireference.connect.worldline-solutions.com/
 */
import { getFile } from "./getFile";
import { SdkContext } from "../../model";
import { FilesClient } from "../model/files";

export function newFilesClient(sdkContext: SdkContext): FilesClient {
  return {
    getFile: getFile(sdkContext)
  };
}
