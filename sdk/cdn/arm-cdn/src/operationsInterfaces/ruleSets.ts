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
  RuleSet,
  RuleSetsListByProfileOptionalParams,
  Usage,
  RuleSetsListResourceUsageOptionalParams,
  RuleSetsGetOptionalParams,
  RuleSetsGetResponse,
  RuleSetsCreateOptionalParams,
  RuleSetsCreateResponse,
  RuleSetsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RuleSets. */
export interface RuleSets {
  /**
   * Lists existing AzureFrontDoor rule sets within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param options The options parameters.
   */
  listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: RuleSetsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<RuleSet>;
  /**
   * Checks the quota and actual usage of the given AzureFrontDoor rule set under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsListResourceUsageOptionalParams
  ): PagedAsyncIterableIterator<Usage>;
  /**
   * Gets an existing AzureFrontDoor rule set with the specified rule set name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsGetOptionalParams
  ): Promise<RuleSetsGetResponse>;
  /**
   * Creates a new rule set within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsCreateOptionalParams
  ): Promise<RuleSetsCreateResponse>;
  /**
   * Deletes an existing AzureFrontDoor rule set with the specified rule set name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing AzureFrontDoor rule set with the specified rule set name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsDeleteOptionalParams
  ): Promise<void>;
}
