/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GenericResourceExpanded,
  ResourcesListByResourceGroupNextOptionalParams,
  ResourcesListByResourceGroupOptionalParams,
  ResourcesListNextOptionalParams,
  ResourcesListOptionalParams,
  ResourcesMoveInfo,
  ResourcesMoveResourcesOptionalParams,
  ResourcesValidateMoveResourcesOptionalParams,
  ResourcesCheckExistenceOptionalParams,
  ResourcesCheckExistenceResponse,
  ResourcesDeleteOptionalParams,
  GenericResource,
  ResourcesCreateOrUpdateOptionalParams,
  ResourcesCreateOrUpdateResponse,
  ResourcesUpdateOptionalParams,
  ResourcesUpdateResponse,
  ResourcesGetOptionalParams,
  ResourcesGetResponse,
  ResourcesCheckExistenceByIdOptionalParams,
  ResourcesCheckExistenceByIdResponse,
  ResourcesDeleteByIdOptionalParams,
  ResourcesCreateOrUpdateByIdOptionalParams,
  ResourcesCreateOrUpdateByIdResponse,
  ResourcesUpdateByIdOptionalParams,
  ResourcesUpdateByIdResponse,
  ResourcesGetByIdOptionalParams,
  ResourcesGetByIdResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Resources. */
export interface Resources {
  /**
   * Get all the resources for a resource group.
   * @param resourceGroupName The resource group with the resources to get.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ResourcesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded>;
  /**
   * Get all the resources in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: ResourcesListOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded>;
  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group with the resources to get.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ResourcesListByResourceGroupNextOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded>;
  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: ResourcesListNextOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded>;
  /**
   * The resources to be moved must be in the same source resource group in the source subscription being
   * used. The target resource group may be in a different subscription. When moving resources, both the
   * source group and the target group are locked for the duration of the operation. Write and delete
   * operations are blocked on the groups until the move completes.
   * @param sourceResourceGroupName The name of the resource group from the source subscription
   *                                containing the resources to be moved.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  beginMoveResources(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: ResourcesMoveResourcesOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The resources to be moved must be in the same source resource group in the source subscription being
   * used. The target resource group may be in a different subscription. When moving resources, both the
   * source group and the target group are locked for the duration of the operation. Write and delete
   * operations are blocked on the groups until the move completes.
   * @param sourceResourceGroupName The name of the resource group from the source subscription
   *                                containing the resources to be moved.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  beginMoveResourcesAndWait(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: ResourcesMoveResourcesOptionalParams
  ): Promise<void>;
  /**
   * This operation checks whether the specified resources can be moved to the target. The resources to
   * be moved must be in the same source resource group in the source subscription being used. The target
   * resource group may be in a different subscription. If validation succeeds, it returns HTTP response
   * code 204 (no content). If validation fails, it returns HTTP response code 409 (Conflict) with an
   * error message. Retrieve the URL in the Location header value to check the result of the long-running
   * operation.
   * @param sourceResourceGroupName The name of the resource group from the source subscription
   *                                containing the resources to be validated for move.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  beginValidateMoveResources(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: ResourcesValidateMoveResourcesOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * This operation checks whether the specified resources can be moved to the target. The resources to
   * be moved must be in the same source resource group in the source subscription being used. The target
   * resource group may be in a different subscription. If validation succeeds, it returns HTTP response
   * code 204 (no content). If validation fails, it returns HTTP response code 409 (Conflict) with an
   * error message. Retrieve the URL in the Location header value to check the result of the long-running
   * operation.
   * @param sourceResourceGroupName The name of the resource group from the source subscription
   *                                containing the resources to be validated for move.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  beginValidateMoveResourcesAndWait(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: ResourcesValidateMoveResourcesOptionalParams
  ): Promise<void>;
  /**
   * Checks whether a resource exists.
   * @param resourceGroupName The name of the resource group containing the resource to check. The name
   *                          is case insensitive.
   * @param resourceProviderNamespace The resource provider of the resource to check.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type.
   * @param resourceName The name of the resource to check whether it exists.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  checkExistence(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: ResourcesCheckExistenceOptionalParams
  ): Promise<ResourcesCheckExistenceResponse>;
  /**
   * Deletes a resource.
   * @param resourceGroupName The name of the resource group that contains the resource to delete. The
   *                          name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type.
   * @param resourceName The name of the resource to delete.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: ResourcesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a resource.
   * @param resourceGroupName The name of the resource group that contains the resource to delete. The
   *                          name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type.
   * @param resourceName The name of the resource to delete.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: ResourcesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Creates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to create.
   * @param resourceName The name of the resource to create.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for creating or updating the resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourcesCreateOrUpdateResponse>,
      ResourcesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to create.
   * @param resourceName The name of the resource to create.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for creating or updating the resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesCreateOrUpdateOptionalParams
  ): Promise<ResourcesCreateOrUpdateResponse>;
  /**
   * Updates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to update.
   * @param resourceName The name of the resource to update.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for updating the resource.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourcesUpdateResponse>,
      ResourcesUpdateResponse
    >
  >;
  /**
   * Updates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to update.
   * @param resourceName The name of the resource to update.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for updating the resource.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesUpdateOptionalParams
  ): Promise<ResourcesUpdateResponse>;
  /**
   * Gets a resource.
   * @param resourceGroupName The name of the resource group containing the resource to get. The name is
   *                          case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: ResourcesGetOptionalParams
  ): Promise<ResourcesGetResponse>;
  /**
   * Checks by ID whether a resource exists.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  checkExistenceById(
    resourceId: string,
    apiVersion: string,
    options?: ResourcesCheckExistenceByIdOptionalParams
  ): Promise<ResourcesCheckExistenceByIdResponse>;
  /**
   * Deletes a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  beginDeleteById(
    resourceId: string,
    apiVersion: string,
    options?: ResourcesDeleteByIdOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  beginDeleteByIdAndWait(
    resourceId: string,
    apiVersion: string,
    options?: ResourcesDeleteByIdOptionalParams
  ): Promise<void>;
  /**
   * Create a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Create or update resource parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateById(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesCreateOrUpdateByIdOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourcesCreateOrUpdateByIdResponse>,
      ResourcesCreateOrUpdateByIdResponse
    >
  >;
  /**
   * Create a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Create or update resource parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateByIdAndWait(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesCreateOrUpdateByIdOptionalParams
  ): Promise<ResourcesCreateOrUpdateByIdResponse>;
  /**
   * Updates a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Update resource parameters.
   * @param options The options parameters.
   */
  beginUpdateById(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesUpdateByIdOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourcesUpdateByIdResponse>,
      ResourcesUpdateByIdResponse
    >
  >;
  /**
   * Updates a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Update resource parameters.
   * @param options The options parameters.
   */
  beginUpdateByIdAndWait(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesUpdateByIdOptionalParams
  ): Promise<ResourcesUpdateByIdResponse>;
  /**
   * Gets a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  getById(
    resourceId: string,
    apiVersion: string,
    options?: ResourcesGetByIdOptionalParams
  ): Promise<ResourcesGetByIdResponse>;
}
