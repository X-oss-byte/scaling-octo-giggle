/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IntegrationAccount,
  IntegrationAccountsListBySubscriptionOptionalParams,
  IntegrationAccountsListByResourceGroupOptionalParams,
  KeyVaultKey,
  ListKeyVaultKeysDefinition,
  IntegrationAccountsListKeyVaultKeysOptionalParams,
  IntegrationAccountsGetOptionalParams,
  IntegrationAccountsGetResponse,
  IntegrationAccountsCreateOrUpdateOptionalParams,
  IntegrationAccountsCreateOrUpdateResponse,
  IntegrationAccountsUpdateOptionalParams,
  IntegrationAccountsUpdateResponse,
  IntegrationAccountsDeleteOptionalParams,
  GetCallbackUrlParameters,
  IntegrationAccountsListCallbackUrlOptionalParams,
  IntegrationAccountsListCallbackUrlResponse,
  TrackingEventsDefinition,
  IntegrationAccountsLogTrackingEventsOptionalParams,
  RegenerateActionParameter,
  IntegrationAccountsRegenerateAccessKeyOptionalParams,
  IntegrationAccountsRegenerateAccessKeyResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IntegrationAccounts. */
export interface IntegrationAccounts {
  /**
   * Gets a list of integration accounts by subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: IntegrationAccountsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<IntegrationAccount>;
  /**
   * Gets a list of integration accounts by resource group.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: IntegrationAccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<IntegrationAccount>;
  /**
   * Gets the integration account's Key Vault keys.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param listKeyVaultKeys The key vault parameters.
   * @param options The options parameters.
   */
  listKeyVaultKeys(
    resourceGroupName: string,
    integrationAccountName: string,
    listKeyVaultKeys: ListKeyVaultKeysDefinition,
    options?: IntegrationAccountsListKeyVaultKeysOptionalParams
  ): PagedAsyncIterableIterator<KeyVaultKey>;
  /**
   * Gets an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountsGetOptionalParams
  ): Promise<IntegrationAccountsGetResponse>;
  /**
   * Creates or updates an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    integrationAccountName: string,
    integrationAccount: IntegrationAccount,
    options?: IntegrationAccountsCreateOrUpdateOptionalParams
  ): Promise<IntegrationAccountsCreateOrUpdateResponse>;
  /**
   * Updates an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    integrationAccountName: string,
    integrationAccount: IntegrationAccount,
    options?: IntegrationAccountsUpdateOptionalParams
  ): Promise<IntegrationAccountsUpdateResponse>;
  /**
   * Deletes an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the integration account callback URL.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param parameters The callback URL parameters.
   * @param options The options parameters.
   */
  listCallbackUrl(
    resourceGroupName: string,
    integrationAccountName: string,
    parameters: GetCallbackUrlParameters,
    options?: IntegrationAccountsListCallbackUrlOptionalParams
  ): Promise<IntegrationAccountsListCallbackUrlResponse>;
  /**
   * Logs the integration account's tracking events.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param logTrackingEvents The callback URL parameters.
   * @param options The options parameters.
   */
  logTrackingEvents(
    resourceGroupName: string,
    integrationAccountName: string,
    logTrackingEvents: TrackingEventsDefinition,
    options?: IntegrationAccountsLogTrackingEventsOptionalParams
  ): Promise<void>;
  /**
   * Regenerates the integration account access key.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param regenerateAccessKey The access key type.
   * @param options The options parameters.
   */
  regenerateAccessKey(
    resourceGroupName: string,
    integrationAccountName: string,
    regenerateAccessKey: RegenerateActionParameter,
    options?: IntegrationAccountsRegenerateAccessKeyOptionalParams
  ): Promise<IntegrationAccountsRegenerateAccessKeyResponse>;
}
