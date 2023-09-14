/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  WorkspaceSqlAadAdminsGetOptionalParams,
  WorkspaceSqlAadAdminsGetResponse,
  WorkspaceAadAdminInfo,
  WorkspaceSqlAadAdminsCreateOrUpdateOptionalParams,
  WorkspaceSqlAadAdminsCreateOrUpdateResponse,
  WorkspaceSqlAadAdminsDeleteOptionalParams
} from "../models";

/** Interface representing a WorkspaceSqlAadAdmins. */
export interface WorkspaceSqlAadAdmins {
  /**
   * Gets a workspace SQL active directory admin
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceSqlAadAdminsGetOptionalParams
  ): Promise<WorkspaceSqlAadAdminsGetResponse>;
  /**
   * Creates or updates a workspace SQL active directory admin
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param aadAdminInfo Workspace active directory administrator properties
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    aadAdminInfo: WorkspaceAadAdminInfo,
    options?: WorkspaceSqlAadAdminsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WorkspaceSqlAadAdminsCreateOrUpdateResponse>,
      WorkspaceSqlAadAdminsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a workspace SQL active directory admin
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param aadAdminInfo Workspace active directory administrator properties
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    aadAdminInfo: WorkspaceAadAdminInfo,
    options?: WorkspaceSqlAadAdminsCreateOrUpdateOptionalParams
  ): Promise<WorkspaceSqlAadAdminsCreateOrUpdateResponse>;
  /**
   * Deletes a workspace SQL active directory admin
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceSqlAadAdminsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a workspace SQL active directory admin
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceSqlAadAdminsDeleteOptionalParams
  ): Promise<void>;
}
