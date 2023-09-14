/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  BackupResourceVaultConfigsGetOptionalParams,
  BackupResourceVaultConfigsGetResponse,
  BackupResourceVaultConfigResource,
  BackupResourceVaultConfigsUpdateOptionalParams,
  BackupResourceVaultConfigsUpdateResponse,
  BackupResourceVaultConfigsPutOptionalParams,
  BackupResourceVaultConfigsPutResponse
} from "../models";

/** Interface representing a BackupResourceVaultConfigs. */
export interface BackupResourceVaultConfigs {
  /**
   * Fetches resource vault config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupResourceVaultConfigsGetOptionalParams
  ): Promise<BackupResourceVaultConfigsGetResponse>;
  /**
   * Updates vault security config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters resource config request
   * @param options The options parameters.
   */
  update(
    vaultName: string,
    resourceGroupName: string,
    parameters: BackupResourceVaultConfigResource,
    options?: BackupResourceVaultConfigsUpdateOptionalParams
  ): Promise<BackupResourceVaultConfigsUpdateResponse>;
  /**
   * Updates vault security config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters resource config request
   * @param options The options parameters.
   */
  put(
    vaultName: string,
    resourceGroupName: string,
    parameters: BackupResourceVaultConfigResource,
    options?: BackupResourceVaultConfigsPutOptionalParams
  ): Promise<BackupResourceVaultConfigsPutResponse>;
}
