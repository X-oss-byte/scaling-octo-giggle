/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApplicationInsightsComponent,
  ComponentsListOptionalParams,
  ComponentsListByResourceGroupOptionalParams,
  ComponentsDeleteOptionalParams,
  ComponentsGetOptionalParams,
  ComponentsGetResponse,
  ComponentsCreateOrUpdateOptionalParams,
  ComponentsCreateOrUpdateResponse,
  TagsResource,
  ComponentsUpdateTagsOptionalParams,
  ComponentsUpdateTagsResponse,
  ComponentPurgeBody,
  ComponentsPurgeOptionalParams,
  ComponentsPurgeResponse,
  ComponentsGetPurgeStatusOptionalParams,
  ComponentsGetPurgeStatusResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Components. */
export interface Components {
  /**
   * Gets a list of all Application Insights components within a subscription.
   * @param options The options parameters.
   */
  list(
    options?: ComponentsListOptionalParams
  ): PagedAsyncIterableIterator<ApplicationInsightsComponent>;
  /**
   * Gets a list of Application Insights components within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ComponentsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ApplicationInsightsComponent>;
  /**
   * Deletes an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    options?: ComponentsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Returns an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: ComponentsGetOptionalParams
  ): Promise<ComponentsGetResponse>;
  /**
   * Creates (or updates) an Application Insights component. Note: You cannot specify a different value
   * for InstrumentationKey nor AppId in the Put operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param insightProperties Properties that need to be specified to create an Application Insights
   *                          component.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    insightProperties: ApplicationInsightsComponent,
    options?: ComponentsCreateOrUpdateOptionalParams
  ): Promise<ComponentsCreateOrUpdateResponse>;
  /**
   * Updates an existing component's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param componentTags Updated tag information to set into the component instance.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    resourceName: string,
    componentTags: TagsResource,
    options?: ComponentsUpdateTagsOptionalParams
  ): Promise<ComponentsUpdateTagsResponse>;
  /**
   * Purges data in an Application Insights component by a set of user-defined filters.
   *
   * In order to manage system resources, purge requests are throttled at 50 requests per hour. You
   * should batch the execution of purge requests by sending a single command whose predicate includes
   * all user identities that require purging. Use the in operator to specify multiple identities. You
   * should run the query prior to using for a purge request to verify that the results are expected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param body Describes the body of a request to purge data in a single table of an Application
   *             Insights component
   * @param options The options parameters.
   */
  purge(
    resourceGroupName: string,
    resourceName: string,
    body: ComponentPurgeBody,
    options?: ComponentsPurgeOptionalParams
  ): Promise<ComponentsPurgeResponse>;
  /**
   * Get status for an ongoing purge operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param purgeId In a purge status request, this is the Id of the operation the status of which is
   *                returned.
   * @param options The options parameters.
   */
  getPurgeStatus(
    resourceGroupName: string,
    resourceName: string,
    purgeId: string,
    options?: ComponentsGetPurgeStatusOptionalParams
  ): Promise<ComponentsGetPurgeStatusResponse>;
}
