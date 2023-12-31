/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  NotificationHubResource,
  NotificationHubsListOptionalParams,
  SharedAccessAuthorizationRuleResource,
  NotificationHubsListAuthorizationRulesOptionalParams,
  CheckAvailabilityParameters,
  NotificationHubsCheckNotificationHubAvailabilityOptionalParams,
  NotificationHubsCheckNotificationHubAvailabilityResponse,
  NotificationHubCreateOrUpdateParameters,
  NotificationHubsCreateOrUpdateOptionalParams,
  NotificationHubsCreateOrUpdateResponse,
  NotificationHubsPatchOptionalParams,
  NotificationHubsPatchResponse,
  NotificationHubsDeleteOptionalParams,
  NotificationHubsGetOptionalParams,
  NotificationHubsGetResponse,
  NotificationHubsDebugSendOptionalParams,
  NotificationHubsDebugSendResponse,
  SharedAccessAuthorizationRuleCreateOrUpdateParameters,
  NotificationHubsCreateOrUpdateAuthorizationRuleOptionalParams,
  NotificationHubsCreateOrUpdateAuthorizationRuleResponse,
  NotificationHubsDeleteAuthorizationRuleOptionalParams,
  NotificationHubsGetAuthorizationRuleOptionalParams,
  NotificationHubsGetAuthorizationRuleResponse,
  NotificationHubsListKeysOptionalParams,
  NotificationHubsListKeysResponse,
  PolicykeyResource,
  NotificationHubsRegenerateKeysOptionalParams,
  NotificationHubsRegenerateKeysResponse,
  NotificationHubsGetPnsCredentialsOptionalParams,
  NotificationHubsGetPnsCredentialsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NotificationHubs. */
export interface NotificationHubs {
  /**
   * Lists the notification hubs associated with a namespace.
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    namespaceName: string,
    options?: NotificationHubsListOptionalParams
  ): PagedAsyncIterableIterator<NotificationHubResource>;
  /**
   * Gets the authorization rules for a NotificationHub.
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name
   * @param notificationHubName The notification hub name.
   * @param options The options parameters.
   */
  listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubsListAuthorizationRulesOptionalParams
  ): PagedAsyncIterableIterator<SharedAccessAuthorizationRuleResource>;
  /**
   * Checks the availability of the given notificationHub in a namespace.
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param parameters The notificationHub name.
   * @param options The options parameters.
   */
  checkNotificationHubAvailability(
    resourceGroupName: string,
    namespaceName: string,
    parameters: CheckAvailabilityParameters,
    options?: NotificationHubsCheckNotificationHubAvailabilityOptionalParams
  ): Promise<NotificationHubsCheckNotificationHubAvailabilityResponse>;
  /**
   * Creates/Update a NotificationHub in a namespace.
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param parameters Parameters supplied to the create/update a NotificationHub Resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    parameters: NotificationHubCreateOrUpdateParameters,
    options?: NotificationHubsCreateOrUpdateOptionalParams
  ): Promise<NotificationHubsCreateOrUpdateResponse>;
  /**
   * Patch a NotificationHub in a namespace.
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubsPatchOptionalParams
  ): Promise<NotificationHubsPatchResponse>;
  /**
   * Deletes a notification hub associated with a namespace.
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Lists the notification hubs associated with a namespace.
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubsGetOptionalParams
  ): Promise<NotificationHubsGetResponse>;
  /**
   * test send a push notification
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param options The options parameters.
   */
  debugSend(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubsDebugSendOptionalParams
  ): Promise<NotificationHubsDebugSendResponse>;
  /**
   * Creates/Updates an authorization rule for a NotificationHub
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param authorizationRuleName Authorization Rule Name.
   * @param parameters The shared access authorization rule.
   * @param options The options parameters.
   */
  createOrUpdateAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    parameters: SharedAccessAuthorizationRuleCreateOrUpdateParameters,
    options?: NotificationHubsCreateOrUpdateAuthorizationRuleOptionalParams
  ): Promise<NotificationHubsCreateOrUpdateAuthorizationRuleResponse>;
  /**
   * Deletes a notificationHub authorization rule
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param authorizationRuleName Authorization Rule Name.
   * @param options The options parameters.
   */
  deleteAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    options?: NotificationHubsDeleteAuthorizationRuleOptionalParams
  ): Promise<void>;
  /**
   * Gets an authorization rule for a NotificationHub by name.
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name
   * @param notificationHubName The notification hub name.
   * @param authorizationRuleName authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    options?: NotificationHubsGetAuthorizationRuleOptionalParams
  ): Promise<NotificationHubsGetAuthorizationRuleResponse>;
  /**
   * Gets the Primary and Secondary ConnectionStrings to the NotificationHub
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param authorizationRuleName The connection string of the NotificationHub for the specified
   *                              authorizationRule.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    options?: NotificationHubsListKeysOptionalParams
  ): Promise<NotificationHubsListKeysResponse>;
  /**
   * Regenerates the Primary/Secondary Keys to the NotificationHub Authorization Rule
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param authorizationRuleName The connection string of the NotificationHub for the specified
   *                              authorizationRule.
   * @param parameters Parameters supplied to regenerate the NotificationHub Authorization Rule Key.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    parameters: PolicykeyResource,
    options?: NotificationHubsRegenerateKeysOptionalParams
  ): Promise<NotificationHubsRegenerateKeysResponse>;
  /**
   * Lists the PNS Credentials associated with a notification hub .
   * @param resourceGroupName The name of the resource group.
   * @param namespaceName The namespace name.
   * @param notificationHubName The notification hub name.
   * @param options The options parameters.
   */
  getPnsCredentials(
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubsGetPnsCredentialsOptionalParams
  ): Promise<NotificationHubsGetPnsCredentialsResponse>;
}
