/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Alert,
  AlertsListByManagerOptionalParams,
  ClearAlertRequest,
  AlertsClearOptionalParams,
  SendTestAlertEmailRequest,
  AlertsSendTestEmailOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Alerts. */
export interface Alerts {
  /**
   * Retrieves all the alerts in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: AlertsListByManagerOptionalParams
  ): PagedAsyncIterableIterator<Alert>;
  /**
   * Clear the alerts.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param request The clear alert request.
   * @param options The options parameters.
   */
  clear(
    resourceGroupName: string,
    managerName: string,
    request: ClearAlertRequest,
    options?: AlertsClearOptionalParams
  ): Promise<void>;
  /**
   * Sends a test alert email.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param request The send test alert email request.
   * @param options The options parameters.
   */
  sendTestEmail(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    request: SendTestAlertEmailRequest,
    options?: AlertsSendTestEmailOptionalParams
  ): Promise<void>;
}
