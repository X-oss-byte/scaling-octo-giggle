/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApiCollectionResponse,
  APICollectionListOptionalParams,
  APICollectionGetOptionalParams,
  APICollectionGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a APICollection. */
export interface APICollection {
  /**
   * Gets a list of Azure API Management APIs that have been onboarded to Defender for APIs. If an Azure
   * API Management API is onboarded to Defender for APIs, the system will monitor the operations within
   * the Azure API Management API for intrusive behaviors and provide alerts for attacks that have been
   * detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    options?: APICollectionListOptionalParams
  ): PagedAsyncIterableIterator<ApiCollectionResponse>;
  /**
   * Gets an Azure API Management API if it has been onboarded to Defender for APIs. If an Azure API
   * Management API is onboarded to Defender for APIs, the system will monitor the operations within the
   * Azure API Management API for intrusive behaviors and provide alerts for attacks that have been
   * detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiCollectionId A string representing the apiCollections resource within the
   *                        Microsoft.Security provider namespace. This string matches the Azure API Management API name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiCollectionId: string,
    options?: APICollectionGetOptionalParams
  ): Promise<APICollectionGetResponse>;
}
