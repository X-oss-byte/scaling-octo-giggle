/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Project,
  ProjectsListByWorkspaceOptionalParams,
  ProjectsGetOptionalParams,
  ProjectsGetResponse,
  ProjectsCreateOrUpdateOptionalParams,
  ProjectsCreateOrUpdateResponse,
  ProjectsDeleteOptionalParams,
  ProjectUpdateParameters,
  ProjectsUpdateOptionalParams,
  ProjectsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Projects. */
export interface Projects {
  /**
   * Lists all the available machine learning projects under the specified workspace.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param options The options parameters.
   */
  listByWorkspace(
    accountName: string,
    workspaceName: string,
    resourceGroupName: string,
    options?: ProjectsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<Project>;
  /**
   * Gets the properties of the specified machine learning project.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    workspaceName: string,
    projectName: string,
    options?: ProjectsGetOptionalParams
  ): Promise<ProjectsGetResponse>;
  /**
   * Creates or updates a project with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param parameters The parameters for creating or updating a project.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    workspaceName: string,
    projectName: string,
    parameters: Project,
    options?: ProjectsCreateOrUpdateOptionalParams
  ): Promise<ProjectsCreateOrUpdateResponse>;
  /**
   * Deletes a project.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    workspaceName: string,
    projectName: string,
    options?: ProjectsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a project with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param projectName The name of the machine learning project under a team account workspace.
   * @param parameters The parameters for updating a machine learning team account.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    workspaceName: string,
    projectName: string,
    parameters: ProjectUpdateParameters,
    options?: ProjectsUpdateOptionalParams
  ): Promise<ProjectsUpdateResponse>;
}
