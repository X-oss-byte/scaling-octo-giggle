/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PolicyDefinition,
  PolicyDefinitionsListNextOptionalParams,
  PolicyDefinitionsListOptionalParams,
  PolicyDefinitionsListBuiltInNextOptionalParams,
  PolicyDefinitionsListBuiltInOptionalParams,
  PolicyDefinitionsListByManagementGroupNextOptionalParams,
  PolicyDefinitionsListByManagementGroupOptionalParams,
  PolicyDefinitionsCreateOrUpdateOptionalParams,
  PolicyDefinitionsCreateOrUpdateResponse,
  PolicyDefinitionsDeleteOptionalParams,
  PolicyDefinitionsGetOptionalParams,
  PolicyDefinitionsGetResponse,
  PolicyDefinitionsGetBuiltInOptionalParams,
  PolicyDefinitionsGetBuiltInResponse,
  PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams,
  PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse,
  PolicyDefinitionsDeleteAtManagementGroupOptionalParams,
  PolicyDefinitionsGetAtManagementGroupOptionalParams,
  PolicyDefinitionsGetAtManagementGroupResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PolicyDefinitions. */
export interface PolicyDefinitions {
  /**
   * This operation retrieves a list of all the policy definitions in a given subscription that match the
   * optional given $filter. Valid values for $filter are: 'atExactScope()', 'policyType -eq {value}' or
   * 'category eq '{value}''. If $filter is not provided, the unfiltered list includes all policy
   * definitions associated with the subscription, including those that apply directly or from management
   * groups that contain the given subscription. If $filter=atExactScope() is provided, the returned list
   * only includes all policy definitions that at the given subscription. If $filter='policyType -eq
   * {value}' is provided, the returned list only includes all policy definitions whose type match the
   * {value}. Possible policyType values are NotSpecified, BuiltIn, Custom, and Static. If
   * $filter='category -eq {value}' is provided, the returned list only includes all policy definitions
   * whose category match the {value}.
   * @param options The options parameters.
   */
  list(
    options?: PolicyDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * This operation retrieves a list of all the built-in policy definitions that match the optional given
   * $filter. If $filter='policyType -eq {value}' is provided, the returned list only includes all
   * built-in policy definitions whose type match the {value}. Possible policyType values are
   * NotSpecified, BuiltIn, Custom, and Static. If $filter='category -eq {value}' is provided, the
   * returned list only includes all built-in policy definitions whose category match the {value}.
   * @param options The options parameters.
   */
  listBuiltIn(
    options?: PolicyDefinitionsListBuiltInOptionalParams
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * This operation retrieves a list of all the policy definitions in a given management group that match
   * the optional given $filter. Valid values for $filter are: 'atExactScope()', 'policyType -eq {value}'
   * or 'category eq '{value}''. If $filter is not provided, the unfiltered list includes all policy
   * definitions associated with the management group, including those that apply directly or from
   * management groups that contain the given management group. If $filter=atExactScope() is provided,
   * the returned list only includes all policy definitions that at the given management group. If
   * $filter='policyType -eq {value}' is provided, the returned list only includes all policy definitions
   * whose type match the {value}. Possible policyType values are NotSpecified, BuiltIn, Custom, and
   * Static. If $filter='category -eq {value}' is provided, the returned list only includes all policy
   * definitions whose category match the {value}.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  listByManagementGroup(
    managementGroupId: string,
    options?: PolicyDefinitionsListByManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: PolicyDefinitionsListNextOptionalParams
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * ListBuiltInNext
   * @param nextLink The nextLink from the previous successful call to the ListBuiltIn method.
   * @param options The options parameters.
   */
  listBuiltInNext(
    nextLink: string,
    options?: PolicyDefinitionsListBuiltInNextOptionalParams
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * ListByManagementGroupNext
   * @param managementGroupId The ID of the management group.
   * @param nextLink The nextLink from the previous successful call to the ListByManagementGroup method.
   * @param options The options parameters.
   */
  listByManagementGroupNext(
    managementGroupId: string,
    nextLink: string,
    options?: PolicyDefinitionsListByManagementGroupNextOptionalParams
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * This operation creates or updates a policy definition in the given subscription with the given name.
   * @param policyDefinitionName The name of the policy definition to create.
   * @param parameters The policy definition properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    policyDefinitionName: string,
    parameters: PolicyDefinition,
    options?: PolicyDefinitionsCreateOrUpdateOptionalParams
  ): Promise<PolicyDefinitionsCreateOrUpdateResponse>;
  /**
   * This operation deletes the policy definition in the given subscription with the given name.
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param options The options parameters.
   */
  delete(
    policyDefinitionName: string,
    options?: PolicyDefinitionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * This operation retrieves the policy definition in the given subscription with the given name.
   * @param policyDefinitionName The name of the policy definition to get.
   * @param options The options parameters.
   */
  get(
    policyDefinitionName: string,
    options?: PolicyDefinitionsGetOptionalParams
  ): Promise<PolicyDefinitionsGetResponse>;
  /**
   * This operation retrieves the built-in policy definition with the given name.
   * @param policyDefinitionName The name of the built-in policy definition to get.
   * @param options The options parameters.
   */
  getBuiltIn(
    policyDefinitionName: string,
    options?: PolicyDefinitionsGetBuiltInOptionalParams
  ): Promise<PolicyDefinitionsGetBuiltInResponse>;
  /**
   * This operation creates or updates a policy definition in the given management group with the given
   * name.
   * @param policyDefinitionName The name of the policy definition to create.
   * @param managementGroupId The ID of the management group.
   * @param parameters The policy definition properties.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    policyDefinitionName: string,
    managementGroupId: string,
    parameters: PolicyDefinition,
    options?: PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams
  ): Promise<PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse>;
  /**
   * This operation deletes the policy definition in the given management group with the given name.
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    policyDefinitionName: string,
    managementGroupId: string,
    options?: PolicyDefinitionsDeleteAtManagementGroupOptionalParams
  ): Promise<void>;
  /**
   * This operation retrieves the policy definition in the given management group with the given name.
   * @param policyDefinitionName The name of the policy definition to get.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    policyDefinitionName: string,
    managementGroupId: string,
    options?: PolicyDefinitionsGetAtManagementGroupOptionalParams
  ): Promise<PolicyDefinitionsGetAtManagementGroupResponse>;
}
