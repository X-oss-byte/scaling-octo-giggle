/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ConfigServersGetOptionalParams,
  ConfigServersGetResponse,
  ConfigServerResource,
  ConfigServersUpdatePutOptionalParams,
  ConfigServersUpdatePutResponse,
  ConfigServersUpdatePatchOptionalParams,
  ConfigServersUpdatePatchResponse,
  ConfigServerSettings,
  ConfigServersValidateOptionalParams,
  ConfigServersValidateResponse
} from "../models";

/** Interface representing a ConfigServers. */
export interface ConfigServers {
  /**
   * Get the config server and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: ConfigServersGetOptionalParams
  ): Promise<ConfigServersGetResponse>;
  /**
   * Update the config server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configServerResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdatePut(
    resourceGroupName: string,
    serviceName: string,
    configServerResource: ConfigServerResource,
    options?: ConfigServersUpdatePutOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConfigServersUpdatePutResponse>,
      ConfigServersUpdatePutResponse
    >
  >;
  /**
   * Update the config server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configServerResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdatePutAndWait(
    resourceGroupName: string,
    serviceName: string,
    configServerResource: ConfigServerResource,
    options?: ConfigServersUpdatePutOptionalParams
  ): Promise<ConfigServersUpdatePutResponse>;
  /**
   * Update the config server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configServerResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdatePatch(
    resourceGroupName: string,
    serviceName: string,
    configServerResource: ConfigServerResource,
    options?: ConfigServersUpdatePatchOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConfigServersUpdatePatchResponse>,
      ConfigServersUpdatePatchResponse
    >
  >;
  /**
   * Update the config server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configServerResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdatePatchAndWait(
    resourceGroupName: string,
    serviceName: string,
    configServerResource: ConfigServerResource,
    options?: ConfigServersUpdatePatchOptionalParams
  ): Promise<ConfigServersUpdatePatchResponse>;
  /**
   * Check if the config server settings are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configServerSettings Config server settings to be validated
   * @param options The options parameters.
   */
  beginValidate(
    resourceGroupName: string,
    serviceName: string,
    configServerSettings: ConfigServerSettings,
    options?: ConfigServersValidateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConfigServersValidateResponse>,
      ConfigServersValidateResponse
    >
  >;
  /**
   * Check if the config server settings are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configServerSettings Config server settings to be validated
   * @param options The options parameters.
   */
  beginValidateAndWait(
    resourceGroupName: string,
    serviceName: string,
    configServerSettings: ConfigServerSettings,
    options?: ConfigServersValidateOptionalParams
  ): Promise<ConfigServersValidateResponse>;
}
