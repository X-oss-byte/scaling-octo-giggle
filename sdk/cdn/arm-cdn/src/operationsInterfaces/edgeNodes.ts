/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EdgeNode, EdgeNodesListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EdgeNodes. */
export interface EdgeNodes {
  /**
   * Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.
   * @param options The options parameters.
   */
  list(
    options?: EdgeNodesListOptionalParams
  ): PagedAsyncIterableIterator<EdgeNode>;
}
