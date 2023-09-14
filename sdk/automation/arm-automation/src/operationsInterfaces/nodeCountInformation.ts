/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CountType,
  NodeCountInformationGetOptionalParams,
  NodeCountInformationGetResponse
} from "../models";

/** Interface representing a NodeCountInformation. */
export interface NodeCountInformation {
  /**
   * Retrieve counts for Dsc Nodes.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param countType The type of counts to retrieve
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    countType: CountType,
    options?: NodeCountInformationGetOptionalParams
  ): Promise<NodeCountInformationGetResponse>;
}
