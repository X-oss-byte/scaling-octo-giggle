/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  RoleDefinitionsListRoleDefinitionsOptionalParams,
  RoleDefinitionsListRoleDefinitionsResponse,
  RoleDefinitionsGetRoleDefinitionByIdOptionalParams,
  RoleDefinitionsGetRoleDefinitionByIdResponse,
  RoleDefinitionsListScopesOptionalParams,
  RoleDefinitionsListScopesResponse
} from "../models";

/** Interface representing a RoleDefinitions. */
export interface RoleDefinitions {
  /**
   * List role definitions.
   * @param options The options parameters.
   */
  listRoleDefinitions(
    options?: RoleDefinitionsListRoleDefinitionsOptionalParams
  ): Promise<RoleDefinitionsListRoleDefinitionsResponse>;
  /**
   * Get role definition by role definition Id.
   * @param roleDefinitionId Synapse Built-In Role Definition Id.
   * @param options The options parameters.
   */
  getRoleDefinitionById(
    roleDefinitionId: string,
    options?: RoleDefinitionsGetRoleDefinitionByIdOptionalParams
  ): Promise<RoleDefinitionsGetRoleDefinitionByIdResponse>;
  /**
   * List rbac scopes.
   * @param options The options parameters.
   */
  listScopes(
    options?: RoleDefinitionsListScopesOptionalParams
  ): Promise<RoleDefinitionsListScopesResponse>;
}
