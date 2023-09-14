/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ExtensionsListByAccountOptionalParams,
  ExtensionsListByAccountResponse,
  ExtensionResourceRequest,
  ExtensionsCreateOptionalParams,
  ExtensionsCreateResponse,
  ExtensionsDeleteOptionalParams,
  ExtensionsGetOptionalParams,
  ExtensionsGetResponse,
  ExtensionsUpdateOptionalParams,
  ExtensionsUpdateResponse
} from "../models";

/** Interface representing a Extensions. */
export interface Extensions {
  /**
   * Gets the details of the extension resources created within the resource group.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param options The options parameters.
   */
  listByAccount(
    resourceGroupName: string,
    accountResourceName: string,
    options?: ExtensionsListByAccountOptionalParams
  ): Promise<ExtensionsListByAccountResponse>;
  /**
   * Registers the extension with a Visual Studio Team Services account.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param body An object containing additional information related to the extension request.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountResourceName: string,
    extensionResourceName: string,
    body: ExtensionResourceRequest,
    options?: ExtensionsCreateOptionalParams
  ): Promise<ExtensionsCreateResponse>;
  /**
   * Removes an extension resource registration for a Visual Studio Team Services account.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountResourceName: string,
    extensionResourceName: string,
    options?: ExtensionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the details of an extension associated with a Visual Studio Team Services account resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountResourceName: string,
    extensionResourceName: string,
    options?: ExtensionsGetOptionalParams
  ): Promise<ExtensionsGetResponse>;
  /**
   * Updates an existing extension registration for the Visual Studio Team Services account.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param body An object containing additional information related to the extension request.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountResourceName: string,
    extensionResourceName: string,
    body: ExtensionResourceRequest,
    options?: ExtensionsUpdateOptionalParams
  ): Promise<ExtensionsUpdateResponse>;
}
