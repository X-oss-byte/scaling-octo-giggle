/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AccessIdName,
  TenantAccessGitRegeneratePrimaryKeyOptionalParams,
  TenantAccessGitRegenerateSecondaryKeyOptionalParams
} from "../models";

/** Interface representing a TenantAccessGit. */
export interface TenantAccessGit {
  /**
   * Regenerate primary access key for GIT.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param options The options parameters.
   */
  regeneratePrimaryKey(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    options?: TenantAccessGitRegeneratePrimaryKeyOptionalParams
  ): Promise<void>;
  /**
   * Regenerate secondary access key for GIT.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param options The options parameters.
   */
  regenerateSecondaryKey(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    options?: TenantAccessGitRegenerateSecondaryKeyOptionalParams
  ): Promise<void>;
}
