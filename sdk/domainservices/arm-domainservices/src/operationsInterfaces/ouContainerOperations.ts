/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OperationEntity,
  OuContainerOperationsListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OuContainerOperations. */
export interface OuContainerOperations {
  /**
   * Lists all the available OuContainer operations.
   * @param options The options parameters.
   */
  list(
    options?: OuContainerOperationsListOptionalParams
  ): PagedAsyncIterableIterator<OperationEntity>;
}
