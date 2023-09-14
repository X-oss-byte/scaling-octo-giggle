/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  BackupStatusRequest,
  BackupStatusGetOptionalParams,
  BackupStatusGetResponse
} from "../models";

/** Interface representing a BackupStatus. */
export interface BackupStatus {
  /**
   * Get the container backup status
   * @param azureRegion Azure region to hit Api
   * @param parameters Container Backup Status Request
   * @param options The options parameters.
   */
  get(
    azureRegion: string,
    parameters: BackupStatusRequest,
    options?: BackupStatusGetOptionalParams
  ): Promise<BackupStatusGetResponse>;
}