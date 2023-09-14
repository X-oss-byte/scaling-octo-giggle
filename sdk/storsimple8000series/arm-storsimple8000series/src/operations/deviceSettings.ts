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
import * as Mappers from "../models/deviceSettingsMappers";
import * as Parameters from "../models/parameters";
import { StorSimple8000SeriesManagementClientContext } from "../storSimple8000SeriesManagementClientContext";

/** Class representing a DeviceSettings. */
export class DeviceSettings {
  private readonly client: StorSimple8000SeriesManagementClientContext;

  /**
   * Create a DeviceSettings.
   * @param {StorSimple8000SeriesManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimple8000SeriesManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the alert settings of the specified device.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceSettingsGetAlertSettingsResponse>
   */
  getAlertSettings(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceSettingsGetAlertSettingsResponse>;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  getAlertSettings(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.AlertSettings>): void;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  getAlertSettings(deviceName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertSettings>): void;
  getAlertSettings(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertSettings>, callback?: msRest.ServiceCallback<Models.AlertSettings>): Promise<Models.DeviceSettingsGetAlertSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      getAlertSettingsOperationSpec,
      callback) as Promise<Models.DeviceSettingsGetAlertSettingsResponse>;
  }

  /**
   * Creates or updates the alert settings of the specified device.
   * @param deviceName The device name
   * @param parameters The alert settings to be added or updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceSettingsCreateOrUpdateAlertSettingsResponse>
   */
  createOrUpdateAlertSettings(deviceName: string, parameters: Models.AlertSettings, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceSettingsCreateOrUpdateAlertSettingsResponse> {
    return this.beginCreateOrUpdateAlertSettings(deviceName,parameters,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DeviceSettingsCreateOrUpdateAlertSettingsResponse>;
  }

  /**
   * Gets the network settings of the specified device.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceSettingsGetNetworkSettingsResponse>
   */
  getNetworkSettings(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceSettingsGetNetworkSettingsResponse>;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  getNetworkSettings(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.NetworkSettings>): void;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  getNetworkSettings(deviceName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkSettings>): void;
  getNetworkSettings(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkSettings>, callback?: msRest.ServiceCallback<Models.NetworkSettings>): Promise<Models.DeviceSettingsGetNetworkSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      getNetworkSettingsOperationSpec,
      callback) as Promise<Models.DeviceSettingsGetNetworkSettingsResponse>;
  }

  /**
   * Updates the network settings on the specified device.
   * @param deviceName The device name
   * @param parameters The network settings to be updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceSettingsUpdateNetworkSettingsResponse>
   */
  updateNetworkSettings(deviceName: string, parameters: Models.NetworkSettingsPatch, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceSettingsUpdateNetworkSettingsResponse> {
    return this.beginUpdateNetworkSettings(deviceName,parameters,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DeviceSettingsUpdateNetworkSettingsResponse>;
  }

  /**
   * Returns the Security properties of the specified device name.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceSettingsGetSecuritySettingsResponse>
   */
  getSecuritySettings(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceSettingsGetSecuritySettingsResponse>;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  getSecuritySettings(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.SecuritySettings>): void;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  getSecuritySettings(deviceName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecuritySettings>): void;
  getSecuritySettings(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecuritySettings>, callback?: msRest.ServiceCallback<Models.SecuritySettings>): Promise<Models.DeviceSettingsGetSecuritySettingsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      getSecuritySettingsOperationSpec,
      callback) as Promise<Models.DeviceSettingsGetSecuritySettingsResponse>;
  }

  /**
   * Patch Security properties of the specified device name.
   * @param deviceName The device name
   * @param parameters The security settings properties to be patched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceSettingsUpdateSecuritySettingsResponse>
   */
  updateSecuritySettings(deviceName: string, parameters: Models.SecuritySettingsPatch, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceSettingsUpdateSecuritySettingsResponse> {
    return this.beginUpdateSecuritySettings(deviceName,parameters,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DeviceSettingsUpdateSecuritySettingsResponse>;
  }

  /**
   * sync Remote management Certificate between appliance and Service
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  syncRemotemanagementCertificate(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginSyncRemotemanagementCertificate(deviceName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the time settings of the specified device.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceSettingsGetTimeSettingsResponse>
   */
  getTimeSettings(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceSettingsGetTimeSettingsResponse>;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  getTimeSettings(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.TimeSettings>): void;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  getTimeSettings(deviceName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TimeSettings>): void;
  getTimeSettings(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TimeSettings>, callback?: msRest.ServiceCallback<Models.TimeSettings>): Promise<Models.DeviceSettingsGetTimeSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      getTimeSettingsOperationSpec,
      callback) as Promise<Models.DeviceSettingsGetTimeSettingsResponse>;
  }

  /**
   * Creates or updates the time settings of the specified device.
   * @param deviceName The device name
   * @param parameters The time settings to be added or updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceSettingsCreateOrUpdateTimeSettingsResponse>
   */
  createOrUpdateTimeSettings(deviceName: string, parameters: Models.TimeSettings, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceSettingsCreateOrUpdateTimeSettingsResponse> {
    return this.beginCreateOrUpdateTimeSettings(deviceName,parameters,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DeviceSettingsCreateOrUpdateTimeSettingsResponse>;
  }

  /**
   * Creates or updates the alert settings of the specified device.
   * @param deviceName The device name
   * @param parameters The alert settings to be added or updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdateAlertSettings(deviceName: string, parameters: Models.AlertSettings, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        parameters,
        resourceGroupName,
        managerName,
        options
      },
      beginCreateOrUpdateAlertSettingsOperationSpec,
      options);
  }

  /**
   * Updates the network settings on the specified device.
   * @param deviceName The device name
   * @param parameters The network settings to be updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateNetworkSettings(deviceName: string, parameters: Models.NetworkSettingsPatch, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        parameters,
        resourceGroupName,
        managerName,
        options
      },
      beginUpdateNetworkSettingsOperationSpec,
      options);
  }

  /**
   * Patch Security properties of the specified device name.
   * @param deviceName The device name
   * @param parameters The security settings properties to be patched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateSecuritySettings(deviceName: string, parameters: Models.SecuritySettingsPatch, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        parameters,
        resourceGroupName,
        managerName,
        options
      },
      beginUpdateSecuritySettingsOperationSpec,
      options);
  }

  /**
   * sync Remote management Certificate between appliance and Service
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginSyncRemotemanagementCertificate(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      beginSyncRemotemanagementCertificateOperationSpec,
      options);
  }

  /**
   * Creates or updates the time settings of the specified device.
   * @param deviceName The device name
   * @param parameters The time settings to be added or updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdateTimeSettings(deviceName: string, parameters: Models.TimeSettings, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        parameters,
        resourceGroupName,
        managerName,
        options
      },
      beginCreateOrUpdateTimeSettingsOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAlertSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/alertSettings/default",
  urlParameters: [
    Parameters.deviceName,
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
      bodyMapper: Mappers.AlertSettings
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getNetworkSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/networkSettings/default",
  urlParameters: [
    Parameters.deviceName,
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
      bodyMapper: Mappers.NetworkSettings
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getSecuritySettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/securitySettings/default",
  urlParameters: [
    Parameters.deviceName,
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
      bodyMapper: Mappers.SecuritySettings
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getTimeSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/timeSettings/default",
  urlParameters: [
    Parameters.deviceName,
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
      bodyMapper: Mappers.TimeSettings
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateAlertSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/alertSettings/default",
  urlParameters: [
    Parameters.deviceName,
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
      ...Mappers.AlertSettings,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AlertSettings
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateNetworkSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/networkSettings/default",
  urlParameters: [
    Parameters.deviceName,
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
      ...Mappers.NetworkSettingsPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSettings
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateSecuritySettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/securitySettings/default",
  urlParameters: [
    Parameters.deviceName,
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
      ...Mappers.SecuritySettingsPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySettings
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginSyncRemotemanagementCertificateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/securitySettings/default/syncRemoteManagementCertificate",
  urlParameters: [
    Parameters.deviceName,
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

const beginCreateOrUpdateTimeSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/timeSettings/default",
  urlParameters: [
    Parameters.deviceName,
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
      ...Mappers.TimeSettings,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TimeSettings
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
