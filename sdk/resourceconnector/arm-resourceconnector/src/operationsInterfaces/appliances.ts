/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ApplianceOperation,
  AppliancesListOperationsOptionalParams,
  Appliance,
  AppliancesListBySubscriptionOptionalParams,
  AppliancesListByResourceGroupOptionalParams,
  AppliancesGetOptionalParams,
  AppliancesGetResponse,
  AppliancesCreateOrUpdateOptionalParams,
  AppliancesCreateOrUpdateResponse,
  AppliancesDeleteOptionalParams,
  AppliancesUpdateOptionalParams,
  AppliancesUpdateResponse,
  AppliancesListClusterCustomerUserCredentialOptionalParams,
  AppliancesListClusterCustomerUserCredentialResponse,
  AppliancesListClusterUserCredentialOptionalParams,
  AppliancesListClusterUserCredentialResponse,
  AppliancesGetUpgradeGraphOptionalParams,
  AppliancesGetUpgradeGraphResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Appliances. */
export interface Appliances {
  /**
   * Lists all available Appliances operations.
   * @param options The options parameters.
   */
  listOperations(
    options?: AppliancesListOperationsOptionalParams
  ): PagedAsyncIterableIterator<ApplianceOperation>;
  /**
   * Gets a list of Appliances in the specified subscription. The operation returns properties of each
   * Appliance
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AppliancesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Appliance>;
  /**
   * Gets a list of Appliances in the specified subscription and resource group. The operation returns
   * properties of each Appliance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AppliancesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Appliance>;
  /**
   * Gets the details of an Appliance with a specified resource group and name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: AppliancesGetOptionalParams
  ): Promise<AppliancesGetResponse>;
  /**
   * Creates or updates an Appliance in the specified Subscription and Resource Group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param parameters Parameters supplied to create or update an Appliance.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    parameters: Appliance,
    options?: AppliancesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AppliancesCreateOrUpdateResponse>,
      AppliancesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an Appliance in the specified Subscription and Resource Group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param parameters Parameters supplied to create or update an Appliance.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: Appliance,
    options?: AppliancesCreateOrUpdateOptionalParams
  ): Promise<AppliancesCreateOrUpdateResponse>;
  /**
   * Deletes an Appliance with the specified Resource Name, Resource Group, and Subscription Id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: AppliancesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an Appliance with the specified Resource Name, Resource Group, and Subscription Id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: AppliancesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates an Appliance with the specified Resource Name in the specified Resource Group and
   * Subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    options?: AppliancesUpdateOptionalParams
  ): Promise<AppliancesUpdateResponse>;
  /**
   * Returns the cluster customer user credentials for the dedicated appliance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param options The options parameters.
   */
  listClusterCustomerUserCredential(
    resourceGroupName: string,
    resourceName: string,
    options?: AppliancesListClusterCustomerUserCredentialOptionalParams
  ): Promise<AppliancesListClusterCustomerUserCredentialResponse>;
  /**
   * Returns the cluster user credentials for the dedicated appliance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param options The options parameters.
   */
  listClusterUserCredential(
    resourceGroupName: string,
    resourceName: string,
    options?: AppliancesListClusterUserCredentialOptionalParams
  ): Promise<AppliancesListClusterUserCredentialResponse>;
  /**
   * Gets the upgrade graph of an Appliance with a specified resource group and name and specific release
   * train.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Appliances name.
   * @param upgradeGraph Upgrade graph version, ex - stable
   * @param options The options parameters.
   */
  getUpgradeGraph(
    resourceGroupName: string,
    resourceName: string,
    upgradeGraph: string,
    options?: AppliancesGetUpgradeGraphOptionalParams
  ): Promise<AppliancesGetUpgradeGraphResponse>;
}
