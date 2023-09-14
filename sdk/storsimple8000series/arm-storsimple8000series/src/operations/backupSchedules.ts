/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/backupSchedulesMappers";
import * as Parameters from "../models/parameters";
import { StorSimple8000SeriesManagementClientContext } from "../storSimple8000SeriesManagementClientContext";

/** Class representing a BackupSchedules. */
export class BackupSchedules {
  private readonly client: StorSimple8000SeriesManagementClientContext;

  /**
   * Create a BackupSchedules.
   * @param {StorSimple8000SeriesManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimple8000SeriesManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the backup schedules in a backup policy.
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupSchedulesListByBackupPolicyResponse>
   */
  listByBackupPolicy(deviceName: string, backupPolicyName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupSchedulesListByBackupPolicyResponse>;
  /**
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByBackupPolicy(deviceName: string, backupPolicyName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.BackupScheduleList>): void;
  /**
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBackupPolicy(deviceName: string, backupPolicyName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupScheduleList>): void;
  listByBackupPolicy(deviceName: string, backupPolicyName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupScheduleList>, callback?: msRest.ServiceCallback<Models.BackupScheduleList>): Promise<Models.BackupSchedulesListByBackupPolicyResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        backupPolicyName,
        resourceGroupName,
        managerName,
        options
      },
      listByBackupPolicyOperationSpec,
      callback) as Promise<Models.BackupSchedulesListByBackupPolicyResponse>;
  }

  /**
   * Gets the properties of the specified backup schedule name.
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupScheduleName The name of the backup schedule to be fetched
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupSchedulesGetResponse>
   */
  get(deviceName: string, backupPolicyName: string, backupScheduleName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupSchedulesGetResponse>;
  /**
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupScheduleName The name of the backup schedule to be fetched
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  get(deviceName: string, backupPolicyName: string, backupScheduleName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.BackupSchedule>): void;
  /**
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupScheduleName The name of the backup schedule to be fetched
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, backupPolicyName: string, backupScheduleName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupSchedule>): void;
  get(deviceName: string, backupPolicyName: string, backupScheduleName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupSchedule>, callback?: msRest.ServiceCallback<Models.BackupSchedule>): Promise<Models.BackupSchedulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        backupPolicyName,
        backupScheduleName,
        resourceGroupName,
        managerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BackupSchedulesGetResponse>;
  }

  /**
   * Creates or updates the backup schedule.
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupScheduleName The backup schedule name.
   * @param parameters The backup schedule.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupSchedulesCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, backupPolicyName: string, backupScheduleName: string, parameters: Models.BackupSchedule, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupSchedulesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,backupPolicyName,backupScheduleName,parameters,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BackupSchedulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes the backup schedule.
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupScheduleName The name the backup schedule.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, backupPolicyName: string, backupScheduleName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,backupPolicyName,backupScheduleName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates the backup schedule.
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupScheduleName The backup schedule name.
   * @param parameters The backup schedule.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, backupPolicyName: string, backupScheduleName: string, parameters: Models.BackupSchedule, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        backupPolicyName,
        backupScheduleName,
        parameters,
        resourceGroupName,
        managerName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the backup schedule.
   * @param deviceName The device name
   * @param backupPolicyName The backup policy name.
   * @param backupScheduleName The name the backup schedule.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, backupPolicyName: string, backupScheduleName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        backupPolicyName,
        backupScheduleName,
        resourceGroupName,
        managerName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBackupPolicyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupPolicies/{backupPolicyName}/schedules",
  urlParameters: [
    Parameters.deviceName,
    Parameters.backupPolicyName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupPolicies/{backupPolicyName}/schedules/{backupScheduleName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.backupPolicyName,
    Parameters.backupScheduleName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupSchedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupPolicies/{backupPolicyName}/schedules/{backupScheduleName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.backupPolicyName,
    Parameters.backupScheduleName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BackupSchedule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackupSchedule
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupPolicies/{backupPolicyName}/schedules/{backupScheduleName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.backupPolicyName,
    Parameters.backupScheduleName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
