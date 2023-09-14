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
  Workspace,
  WorkspacesListOptionalParams,
  WorkspacesListByResourceGroupOptionalParams,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacesDeleteOptionalParams,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacePatch,
  WorkspacesUpdateOptionalParams,
  WorkspacesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspaces. */
export interface Workspaces {
  /**
   * Gets the workspaces in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: WorkspacesListOptionalParams
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Gets workspaces in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspacesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Create or update a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param parameters The parameters required to create or update a workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    parameters: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WorkspacesCreateOrUpdateResponse>,
      WorkspacesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param parameters The parameters required to create or update a workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    parameters: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<WorkspacesCreateOrUpdateResponse>;
  /**
   * Deletes a workspace resource. To recover the workspace, create it again with the same name, in the
   * same subscription, resource group and location. The name is kept for 14 days and cannot be used for
   * another workspace. To remove the workspace completely and release the name, use the force flag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a workspace resource. To recover the workspace, create it again with the same name, in the
   * same subscription, resource group and location. The name is kept for 14 days and cannot be used for
   * another workspace. To remove the workspace completely and release the name, use the force flag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets a workspace instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams
  ): Promise<WorkspacesGetResponse>;
  /**
   * Updates a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param parameters The parameters required to patch a workspace.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    parameters: WorkspacePatch,
    options?: WorkspacesUpdateOptionalParams
  ): Promise<WorkspacesUpdateResponse>;
}
