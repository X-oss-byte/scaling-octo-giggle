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
  MonitoredResource,
  MonitorsListMonitoredResourcesOptionalParams,
  MonitorResource,
  MonitorsListBySubscriptionIdOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  VMInfo,
  MonitorsListHostsOptionalParams,
  AppServiceInfo,
  MonitorsListAppServicesOptionalParams,
  LinkableEnvironmentResponse,
  LinkableEnvironmentRequest,
  MonitorsListLinkableEnvironmentsOptionalParams,
  MonitorsGetAccountCredentialsOptionalParams,
  MonitorsGetAccountCredentialsResponse,
  MonitorsGetVMHostPayloadOptionalParams,
  MonitorsGetVMHostPayloadResponse,
  MonitorsGetOptionalParams,
  MonitorsGetResponse,
  MonitorsCreateOrUpdateOptionalParams,
  MonitorsCreateOrUpdateResponse,
  MonitorResourceUpdate,
  MonitorsUpdateOptionalParams,
  MonitorsUpdateResponse,
  MonitorsDeleteOptionalParams,
  MonitorsGetSSODetailsOptionalParams,
  MonitorsGetSSODetailsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Monitors. */
export interface Monitors {
  /**
   * List the resources currently being monitored by the Dynatrace monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  listMonitoredResources(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsListMonitoredResourcesOptionalParams
  ): PagedAsyncIterableIterator<MonitoredResource>;
  /**
   * List all MonitorResource by subscriptionId
   * @param options The options parameters.
   */
  listBySubscriptionId(
    options?: MonitorsListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<MonitorResource>;
  /**
   * List MonitorResource resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: MonitorsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<MonitorResource>;
  /**
   * List the compute resources currently being monitored by the Dynatrace resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  listHosts(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsListHostsOptionalParams
  ): PagedAsyncIterableIterator<VMInfo>;
  /**
   * Gets list of App Services with Dynatrace PaaS OneAgent enabled
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  listAppServices(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsListAppServicesOptionalParams
  ): PagedAsyncIterableIterator<AppServiceInfo>;
  /**
   * Gets all the Dynatrace environments that a user can link a azure resource to
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param request The details of the linkable environment request.
   * @param options The options parameters.
   */
  listLinkableEnvironments(
    resourceGroupName: string,
    monitorName: string,
    request: LinkableEnvironmentRequest,
    options?: MonitorsListLinkableEnvironmentsOptionalParams
  ): PagedAsyncIterableIterator<LinkableEnvironmentResponse>;
  /**
   * Gets the user account credentials for a Monitor
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  getAccountCredentials(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsGetAccountCredentialsOptionalParams
  ): Promise<MonitorsGetAccountCredentialsResponse>;
  /**
   * Returns the payload that needs to be passed in the request body for installing Dynatrace agent on a
   * VM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  getVMHostPayload(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsGetVMHostPayloadOptionalParams
  ): Promise<MonitorsGetVMHostPayloadResponse>;
  /**
   * Get a MonitorResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsGetOptionalParams
  ): Promise<MonitorsGetResponse>;
  /**
   * Create a MonitorResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    monitorName: string,
    resource: MonitorResource,
    options?: MonitorsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MonitorsCreateOrUpdateResponse>,
      MonitorsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a MonitorResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    monitorName: string,
    resource: MonitorResource,
    options?: MonitorsCreateOrUpdateOptionalParams
  ): Promise<MonitorsCreateOrUpdateResponse>;
  /**
   * Update a MonitorResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param resource The resource properties to be updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    monitorName: string,
    resource: MonitorResourceUpdate,
    options?: MonitorsUpdateOptionalParams
  ): Promise<MonitorsUpdateResponse>;
  /**
   * Delete a MonitorResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a MonitorResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the SSO configuration details from the partner.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  getSSODetails(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsGetSSODetailsOptionalParams
  ): Promise<MonitorsGetSSODetailsResponse>;
}
