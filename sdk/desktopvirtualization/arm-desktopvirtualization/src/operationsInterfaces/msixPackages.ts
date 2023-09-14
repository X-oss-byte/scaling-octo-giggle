/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  MsixPackage,
  MsixPackagesListOptionalParams,
  MsixPackagesGetOptionalParams,
  MsixPackagesGetResponse,
  MsixPackagesCreateOrUpdateOptionalParams,
  MsixPackagesCreateOrUpdateResponse,
  MsixPackagesDeleteOptionalParams,
  MsixPackagesUpdateOptionalParams,
  MsixPackagesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MsixPackages. */
export interface MsixPackages {
  /**
   * List MSIX packages in hostpool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    hostPoolName: string,
    options?: MsixPackagesListOptionalParams
  ): PagedAsyncIterableIterator<MsixPackage>;
  /**
   * Get a msixpackage.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param msixPackageFullName The version specific package full name of the MSIX package within
   *                            specified hostpool
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostPoolName: string,
    msixPackageFullName: string,
    options?: MsixPackagesGetOptionalParams
  ): Promise<MsixPackagesGetResponse>;
  /**
   * Create or update a MSIX package.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param msixPackageFullName The version specific package full name of the MSIX package within
   *                            specified hostpool
   * @param msixPackage Object containing  MSIX Package definitions.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    hostPoolName: string,
    msixPackageFullName: string,
    msixPackage: MsixPackage,
    options?: MsixPackagesCreateOrUpdateOptionalParams
  ): Promise<MsixPackagesCreateOrUpdateResponse>;
  /**
   * Remove an MSIX Package.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param msixPackageFullName The version specific package full name of the MSIX package within
   *                            specified hostpool
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    hostPoolName: string,
    msixPackageFullName: string,
    options?: MsixPackagesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update an  MSIX Package.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param msixPackageFullName The version specific package full name of the MSIX package within
   *                            specified hostpool
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    hostPoolName: string,
    msixPackageFullName: string,
    options?: MsixPackagesUpdateOptionalParams
  ): Promise<MsixPackagesUpdateResponse>;
}
