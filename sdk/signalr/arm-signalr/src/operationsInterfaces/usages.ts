/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SignalRUsage, UsagesListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Usages. */
export interface Usages {
  /**
   * List resource usage quotas by location.
   * @param location the location like "eastus"
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: UsagesListOptionalParams
  ): PagedAsyncIterableIterator<SignalRUsage>;
}