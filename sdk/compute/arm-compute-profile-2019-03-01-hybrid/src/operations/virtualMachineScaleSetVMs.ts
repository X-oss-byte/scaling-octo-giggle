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
import * as Mappers from "../models/virtualMachineScaleSetVMsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a VirtualMachineScaleSetVMs. */
export class VirtualMachineScaleSetVMs {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a VirtualMachineScaleSetVMs.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsReimageResponse>
   */
  reimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsReimageResponse> {
    return this.beginReimage(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsReimageResponse>;
  }

  /**
   * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance.
   * This operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsReimageAllResponse>
   */
  reimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsReimageAllResponse> {
    return this.beginReimageAll(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsReimageAllResponse>;
  }

  /**
   * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
   * releases the compute resources it uses. You are not billed for the compute resources of this
   * virtual machine once it is deallocated.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsDeallocateResponse>
   */
  deallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsDeallocateResponse> {
    return this.beginDeallocate(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsDeallocateResponse>;
  }

  /**
   * Updates a virtual machine of a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or
   * updated.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsUpdateResponse>
   */
  update(resourceGroupName: string, vmScaleSetName: string, instanceId: string, parameters: Models.VirtualMachineScaleSetVM, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,vmScaleSetName,instanceId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsUpdateResponse>;
  }

  /**
   * Deletes a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsDeleteMethodResponse>;
  }

  /**
   * Gets a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsGetResponse>
   */
  get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param callback The callback
   */
  get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVM>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVM>): void;
  get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualMachineScaleSetVM>, callback?: msRest.ServiceCallback<Models.VirtualMachineScaleSetVM>): Promise<Models.VirtualMachineScaleSetVMsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualMachineScaleSetVMsGetResponse>;
  }

  /**
   * Gets the status of a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsGetInstanceViewResponse>
   */
  getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsGetInstanceViewResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param callback The callback
   */
  getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMInstanceView>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The optional parameters
   * @param callback The callback
   */
  getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMInstanceView>): void;
  getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualMachineScaleSetVMInstanceView>, callback?: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMInstanceView>): Promise<Models.VirtualMachineScaleSetVMsGetInstanceViewResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      getInstanceViewOperationSpec,
      callback) as Promise<Models.VirtualMachineScaleSetVMsGetInstanceViewResponse>;
  }

  /**
   * Gets a list of all virtual machines in a VM scale sets.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the VM scale set.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsListResponse>
   */
  list(resourceGroupName: string, virtualMachineScaleSetName: string, options?: Models.VirtualMachineScaleSetVMsListOptionalParams): Promise<Models.VirtualMachineScaleSetVMsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the VM scale set.
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualMachineScaleSetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the VM scale set.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualMachineScaleSetName: string, options: Models.VirtualMachineScaleSetVMsListOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): void;
  list(resourceGroupName: string, virtualMachineScaleSetName: string, options?: Models.VirtualMachineScaleSetVMsListOptionalParams | msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>, callback?: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): Promise<Models.VirtualMachineScaleSetVMsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualMachineScaleSetVMsListResponse>;
  }

  /**
   * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and
   * you are getting charged for the resources. Instead, use deallocate to release resources and
   * avoid charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsPowerOffResponse>
   */
  powerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsPowerOffResponse> {
    return this.beginPowerOff(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsPowerOffResponse>;
  }

  /**
   * Restarts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsRestartResponse>
   */
  restart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsRestartResponse> {
    return this.beginRestart(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsRestartResponse>;
  }

  /**
   * Starts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsStartResponse>
   */
  start(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsStartResponse> {
    return this.beginStart(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsStartResponse>;
  }

  /**
   * Redeploys a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsRedeployResponse>
   */
  redeploy(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsRedeployResponse> {
    return this.beginRedeploy(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsRedeployResponse>;
  }

  /**
   * Performs maintenance on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsPerformMaintenanceResponse>
   */
  performMaintenance(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsPerformMaintenanceResponse> {
    return this.beginPerformMaintenance(resourceGroupName,vmScaleSetName,instanceId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetVMsPerformMaintenanceResponse>;
  }

  /**
   * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginReimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginReimageOperationSpec,
      options);
  }

  /**
   * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance.
   * This operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginReimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginReimageAllOperationSpec,
      options);
  }

  /**
   * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
   * releases the compute resources it uses. You are not billed for the compute resources of this
   * virtual machine once it is deallocated.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginDeallocateOperationSpec,
      options);
  }

  /**
   * Updates a virtual machine of a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or
   * updated.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, parameters: Models.VirtualMachineScaleSetVM, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and
   * you are getting charged for the resources. Instead, use deallocate to release resources and
   * avoid charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPowerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginPowerOffOperationSpec,
      options);
  }

  /**
   * Restarts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRestart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginRestartOperationSpec,
      options);
  }

  /**
   * Starts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Redeploys a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRedeploy(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginRedeployOperationSpec,
      options);
  }

  /**
   * Performs maintenance on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPerformMaintenance(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        options
      },
      beginPerformMaintenanceOperationSpec,
      options);
  }

  /**
   * Gets a list of all virtual machines in a VM scale sets.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetVMsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>, callback?: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): Promise<Models.VirtualMachineScaleSetVMsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualMachineScaleSetVMsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVM
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getInstanceViewOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/instanceView",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVMInstanceView
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualMachineScaleSetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.select,
    Parameters.expand0,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVMListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginReimageOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/reimage",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginReimageAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/reimageall",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeallocateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/deallocate",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VirtualMachineScaleSetVM,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVM
    },
    202: {
      bodyMapper: Mappers.VirtualMachineScaleSetVM
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPowerOffOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/poweroff",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRestartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/restart",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/start",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRedeployOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/redeploy",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPerformMaintenanceOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/performMaintenance",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVMListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
