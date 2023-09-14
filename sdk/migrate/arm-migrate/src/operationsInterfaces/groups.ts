/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Group,
  GroupsListByProjectOptionalParams,
  GroupsGetOptionalParams,
  GroupsGetResponse,
  GroupsCreateOptionalParams,
  GroupsCreateResponse,
  GroupsDeleteOptionalParams,
  GroupsDeleteResponse,
  GroupsUpdateMachinesOptionalParams,
  GroupsUpdateMachinesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Groups. */
export interface Groups {
  /**
   * Get all groups created in the project. Returns a json array of objects of type 'group' as specified
   * in the Models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: GroupsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<Group>;
  /**
   * Get information related to a specific group in the project. Returns a json object of type 'group' as
   * specified in the models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: GroupsGetOptionalParams
  ): Promise<GroupsGetResponse>;
  /**
   * Create a new group by sending a json object of type 'group' as given in Models section as part of
   * the Request Body. The group name in a project is unique.
   *
   * This operation is Idempotent.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: GroupsCreateOptionalParams
  ): Promise<GroupsCreateResponse>;
  /**
   * Delete the group from the project. The machines remain in the project. Deleting a non-existent group
   * results in a no-operation.
   *
   * A group is an aggregation mechanism for machines in a project. Therefore, deleting group does not
   * delete machines in it.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: GroupsDeleteOptionalParams
  ): Promise<GroupsDeleteResponse>;
  /**
   * Update machines in group by adding or removing machines.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  updateMachines(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: GroupsUpdateMachinesOptionalParams
  ): Promise<GroupsUpdateMachinesResponse>;
}
