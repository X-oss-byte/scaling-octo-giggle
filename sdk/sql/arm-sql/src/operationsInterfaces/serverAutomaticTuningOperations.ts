/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ServerAutomaticTuningOperationsGetOptionalParams,
  ServerAutomaticTuningOperationsGetResponse,
  ServerAutomaticTuning,
  ServerAutomaticTuningOperationsUpdateOptionalParams,
  ServerAutomaticTuningOperationsUpdateResponse
} from "../models";

/** Interface representing a ServerAutomaticTuningOperations. */
export interface ServerAutomaticTuningOperations {
  /**
   * Retrieves server automatic tuning options.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAutomaticTuningOperationsGetOptionalParams
  ): Promise<ServerAutomaticTuningOperationsGetResponse>;
  /**
   * Update automatic tuning options on server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested automatic tuning resource state.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerAutomaticTuning,
    options?: ServerAutomaticTuningOperationsUpdateOptionalParams
  ): Promise<ServerAutomaticTuningOperationsUpdateResponse>;
}
