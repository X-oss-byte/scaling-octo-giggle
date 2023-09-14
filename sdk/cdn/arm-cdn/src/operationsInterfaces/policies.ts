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
  CdnWebApplicationFirewallPolicy,
  PoliciesListOptionalParams,
  PoliciesGetOptionalParams,
  PoliciesGetResponse,
  PoliciesCreateOrUpdateOptionalParams,
  PoliciesCreateOrUpdateResponse,
  CdnWebApplicationFirewallPolicyPatchParameters,
  PoliciesUpdateOptionalParams,
  PoliciesUpdateResponse,
  PoliciesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Policies. */
export interface Policies {
  /**
   * Lists all of the protection policies within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: PoliciesListOptionalParams
  ): PagedAsyncIterableIterator<CdnWebApplicationFirewallPolicy>;
  /**
   * Retrieve protection policy with specified name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    policyName: string,
    options?: PoliciesGetOptionalParams
  ): Promise<PoliciesGetResponse>;
  /**
   * Create or update policy with specified rule set name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicy Policy to be created.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    policyName: string,
    cdnWebApplicationFirewallPolicy: CdnWebApplicationFirewallPolicy,
    options?: PoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PoliciesCreateOrUpdateResponse>,
      PoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update policy with specified rule set name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicy Policy to be created.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    policyName: string,
    cdnWebApplicationFirewallPolicy: CdnWebApplicationFirewallPolicy,
    options?: PoliciesCreateOrUpdateOptionalParams
  ): Promise<PoliciesCreateOrUpdateResponse>;
  /**
   * Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the
   * specified subscription and resource group
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicyPatchParameters CdnWebApplicationFirewallPolicy parameters to
   *                                                       be patched.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    policyName: string,
    cdnWebApplicationFirewallPolicyPatchParameters: CdnWebApplicationFirewallPolicyPatchParameters,
    options?: PoliciesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PoliciesUpdateResponse>,
      PoliciesUpdateResponse
    >
  >;
  /**
   * Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the
   * specified subscription and resource group
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicyPatchParameters CdnWebApplicationFirewallPolicy parameters to
   *                                                       be patched.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    policyName: string,
    cdnWebApplicationFirewallPolicyPatchParameters: CdnWebApplicationFirewallPolicyPatchParameters,
    options?: PoliciesUpdateOptionalParams
  ): Promise<PoliciesUpdateResponse>;
  /**
   * Deletes Policy
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    policyName: string,
    options?: PoliciesDeleteOptionalParams
  ): Promise<void>;
}
