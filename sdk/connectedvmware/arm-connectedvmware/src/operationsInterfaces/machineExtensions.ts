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
  MachineExtension,
  MachineExtensionsListOptionalParams,
  MachineExtensionsCreateOrUpdateOptionalParams,
  MachineExtensionsCreateOrUpdateResponse,
  MachineExtensionUpdate,
  MachineExtensionsUpdateOptionalParams,
  MachineExtensionsUpdateResponse,
  MachineExtensionsDeleteOptionalParams,
  MachineExtensionsGetOptionalParams,
  MachineExtensionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MachineExtensions. */
export interface MachineExtensions {
  /**
   * The operation to get all extensions of a non-Azure machine
   * @param resourceGroupName The Resource Group Name.
   * @param name The name of the machine containing the extension.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    name: string,
    options?: MachineExtensionsListOptionalParams
  ): PagedAsyncIterableIterator<MachineExtension>;
  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The Resource Group Name.
   * @param name The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    extensionName: string,
    extensionParameters: MachineExtension,
    options?: MachineExtensionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MachineExtensionsCreateOrUpdateResponse>,
      MachineExtensionsCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The Resource Group Name.
   * @param name The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    extensionName: string,
    extensionParameters: MachineExtension,
    options?: MachineExtensionsCreateOrUpdateOptionalParams
  ): Promise<MachineExtensionsCreateOrUpdateResponse>;
  /**
   * The operation to update the extension.
   * @param resourceGroupName The Resource Group Name.
   * @param name The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    name: string,
    extensionName: string,
    extensionParameters: MachineExtensionUpdate,
    options?: MachineExtensionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MachineExtensionsUpdateResponse>,
      MachineExtensionsUpdateResponse
    >
  >;
  /**
   * The operation to update the extension.
   * @param resourceGroupName The Resource Group Name.
   * @param name The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    name: string,
    extensionName: string,
    extensionParameters: MachineExtensionUpdate,
    options?: MachineExtensionsUpdateOptionalParams
  ): Promise<MachineExtensionsUpdateResponse>;
  /**
   * The operation to delete the extension.
   * @param resourceGroupName The Resource Group Name.
   * @param name The name of the machine where the extension should be deleted.
   * @param extensionName The name of the machine extension.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    name: string,
    extensionName: string,
    options?: MachineExtensionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to delete the extension.
   * @param resourceGroupName The Resource Group Name.
   * @param name The name of the machine where the extension should be deleted.
   * @param extensionName The name of the machine extension.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    extensionName: string,
    options?: MachineExtensionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation to get the extension.
   * @param resourceGroupName The Resource Group Name.
   * @param name The name of the machine containing the extension.
   * @param extensionName The name of the machine extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    extensionName: string,
    options?: MachineExtensionsGetOptionalParams
  ): Promise<MachineExtensionsGetResponse>;
}
