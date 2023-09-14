/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AccountFilter,
  AccountFiltersListOptionalParams,
  AccountFiltersGetOptionalParams,
  AccountFiltersGetResponse,
  AccountFiltersCreateOrUpdateOptionalParams,
  AccountFiltersCreateOrUpdateResponse,
  AccountFiltersDeleteOptionalParams,
  AccountFiltersUpdateOptionalParams,
  AccountFiltersUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AccountFilters. */
export interface AccountFilters {
  /**
   * List Account Filters in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: AccountFiltersListOptionalParams
  ): PagedAsyncIterableIterator<AccountFilter>;
  /**
   * Get the details of an Account Filter in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param filterName The Account Filter name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    filterName: string,
    options?: AccountFiltersGetOptionalParams
  ): Promise<AccountFiltersGetResponse>;
  /**
   * Creates or updates an Account Filter in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param filterName The Account Filter name
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    filterName: string,
    parameters: AccountFilter,
    options?: AccountFiltersCreateOrUpdateOptionalParams
  ): Promise<AccountFiltersCreateOrUpdateResponse>;
  /**
   * Deletes an Account Filter in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param filterName The Account Filter name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    filterName: string,
    options?: AccountFiltersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates an existing Account Filter in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param filterName The Account Filter name
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    filterName: string,
    parameters: AccountFilter,
    options?: AccountFiltersUpdateOptionalParams
  ): Promise<AccountFiltersUpdateResponse>;
}
