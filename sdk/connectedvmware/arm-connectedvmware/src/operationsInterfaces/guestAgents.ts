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
  GuestAgent,
  GuestAgentsListByVmOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsCreateResponse,
  GuestAgentsGetOptionalParams,
  GuestAgentsGetResponse,
  GuestAgentsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GuestAgents. */
export interface GuestAgents {
  /**
   * Returns the list of GuestAgent of the given vm.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineName Name of the vm.
   * @param options The options parameters.
   */
  listByVm(
    resourceGroupName: string,
    virtualMachineName: string,
    options?: GuestAgentsListByVmOptionalParams
  ): PagedAsyncIterableIterator<GuestAgent>;
  /**
   * Create Or Update GuestAgent.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineName Name of the vm.
   * @param name Name of the guestAgents.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    virtualMachineName: string,
    name: string,
    options?: GuestAgentsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GuestAgentsCreateResponse>,
      GuestAgentsCreateResponse
    >
  >;
  /**
   * Create Or Update GuestAgent.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineName Name of the vm.
   * @param name Name of the guestAgents.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    virtualMachineName: string,
    name: string,
    options?: GuestAgentsCreateOptionalParams
  ): Promise<GuestAgentsCreateResponse>;
  /**
   * Implements GuestAgent GET method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineName Name of the vm.
   * @param name Name of the GuestAgent.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualMachineName: string,
    name: string,
    options?: GuestAgentsGetOptionalParams
  ): Promise<GuestAgentsGetResponse>;
  /**
   * Implements GuestAgent DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineName Name of the vm.
   * @param name Name of the GuestAgent.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    virtualMachineName: string,
    name: string,
    options?: GuestAgentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Implements GuestAgent DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineName Name of the vm.
   * @param name Name of the GuestAgent.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    virtualMachineName: string,
    name: string,
    options?: GuestAgentsDeleteOptionalParams
  ): Promise<void>;
}
