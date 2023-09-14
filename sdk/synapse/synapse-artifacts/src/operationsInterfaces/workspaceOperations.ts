/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  WorkspaceOperationsGetOptionalParams,
  WorkspaceOperationsGetResponse
} from "../models";

/** Interface representing a WorkspaceOperations. */
export interface WorkspaceOperations {
  /**
   * Get Workspace
   * @param options The options parameters.
   */
  get(
    options?: WorkspaceOperationsGetOptionalParams
  ): Promise<WorkspaceOperationsGetResponse>;
}
