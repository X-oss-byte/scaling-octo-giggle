/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApplicationStackResource,
  ProviderGetAvailableStacksOptionalParams,
  FunctionAppStack,
  ProviderGetFunctionAppStacksOptionalParams,
  ProviderGetFunctionAppStacksForLocationOptionalParams,
  WebAppStack,
  ProviderGetWebAppStacksForLocationOptionalParams,
  CsmOperationDescription,
  ProviderListOperationsOptionalParams,
  ProviderGetWebAppStacksOptionalParams,
  ProviderGetAvailableStacksOnPremOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Provider. */
export interface Provider {
  /**
   * Description for Get available application frameworks and their versions
   * @param options The options parameters.
   */
  listAvailableStacks(
    options?: ProviderGetAvailableStacksOptionalParams
  ): PagedAsyncIterableIterator<ApplicationStackResource>;
  /**
   * Description for Get available Function app frameworks and their versions
   * @param options The options parameters.
   */
  listFunctionAppStacks(
    options?: ProviderGetFunctionAppStacksOptionalParams
  ): PagedAsyncIterableIterator<FunctionAppStack>;
  /**
   * Description for Get available Function app frameworks and their versions for location
   * @param location Function App stack location.
   * @param options The options parameters.
   */
  listFunctionAppStacksForLocation(
    location: string,
    options?: ProviderGetFunctionAppStacksForLocationOptionalParams
  ): PagedAsyncIterableIterator<FunctionAppStack>;
  /**
   * Description for Get available Web app frameworks and their versions for location
   * @param location Web App stack location.
   * @param options The options parameters.
   */
  listWebAppStacksForLocation(
    location: string,
    options?: ProviderGetWebAppStacksForLocationOptionalParams
  ): PagedAsyncIterableIterator<WebAppStack>;
  /**
   * Description for Gets all available operations for the Microsoft.Web resource provider. Also exposes
   * resource metric definitions
   * @param options The options parameters.
   */
  listOperations(
    options?: ProviderListOperationsOptionalParams
  ): PagedAsyncIterableIterator<CsmOperationDescription>;
  /**
   * Description for Get available Web app frameworks and their versions
   * @param options The options parameters.
   */
  listWebAppStacks(
    options?: ProviderGetWebAppStacksOptionalParams
  ): PagedAsyncIterableIterator<WebAppStack>;
  /**
   * Description for Get available application frameworks and their versions
   * @param options The options parameters.
   */
  listAvailableStacksOnPrem(
    options?: ProviderGetAvailableStacksOnPremOptionalParams
  ): PagedAsyncIterableIterator<ApplicationStackResource>;
}
