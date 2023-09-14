/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ManagedVirtualNetworkResource,
  ManagedVirtualNetworksListByFactoryOptionalParams,
  ManagedVirtualNetworksCreateOrUpdateOptionalParams,
  ManagedVirtualNetworksCreateOrUpdateResponse,
  ManagedVirtualNetworksGetOptionalParams,
  ManagedVirtualNetworksGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedVirtualNetworks. */
export interface ManagedVirtualNetworks {
  /**
   * Lists managed Virtual Networks.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<ManagedVirtualNetworkResource>;
  /**
   * Creates or updates a managed Virtual Network.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedVirtualNetwork Managed Virtual Network resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedVirtualNetwork: ManagedVirtualNetworkResource,
    options?: ManagedVirtualNetworksCreateOrUpdateOptionalParams
  ): Promise<ManagedVirtualNetworksCreateOrUpdateResponse>;
  /**
   * Gets a managed Virtual Network.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    options?: ManagedVirtualNetworksGetOptionalParams
  ): Promise<ManagedVirtualNetworksGetResponse>;
}
