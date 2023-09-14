/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  InformationProtectionPolicy,
  InformationProtectionPoliciesListOptionalParams,
  Enum17,
  InformationProtectionPoliciesGetOptionalParams,
  InformationProtectionPoliciesGetResponse,
  InformationProtectionPoliciesCreateOrUpdateOptionalParams,
  InformationProtectionPoliciesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a InformationProtectionPolicies. */
export interface InformationProtectionPolicies {
  /**
   * Information protection policies of a specific management group.
   * @param scope Scope of the query, can be subscription
   *              (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   *              (/providers/Microsoft.Management/managementGroups/mgName).
   * @param options The options parameters.
   */
  list(
    scope: string,
    options?: InformationProtectionPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<InformationProtectionPolicy>;
  /**
   * Details of the information protection policy.
   * @param scope Scope of the query, can be subscription
   *              (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   *              (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy.
   * @param options The options parameters.
   */
  get(
    scope: string,
    informationProtectionPolicyName: Enum17,
    options?: InformationProtectionPoliciesGetOptionalParams
  ): Promise<InformationProtectionPoliciesGetResponse>;
  /**
   * Details of the information protection policy.
   * @param scope Scope of the query, can be subscription
   *              (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   *              (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy.
   * @param informationProtectionPolicy Information protection policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    scope: string,
    informationProtectionPolicyName: Enum17,
    informationProtectionPolicy: InformationProtectionPolicy,
    options?: InformationProtectionPoliciesCreateOrUpdateOptionalParams
  ): Promise<InformationProtectionPoliciesCreateOrUpdateResponse>;
}
