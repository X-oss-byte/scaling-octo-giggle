/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { VirtualMachineRunCommands } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  RunCommandDocumentBase,
  VirtualMachineRunCommandsListNextOptionalParams,
  VirtualMachineRunCommandsListOptionalParams,
  VirtualMachineRunCommandsListResponse,
  VirtualMachineRunCommand,
  VirtualMachineRunCommandsListByVirtualMachineNextOptionalParams,
  VirtualMachineRunCommandsListByVirtualMachineOptionalParams,
  VirtualMachineRunCommandsListByVirtualMachineResponse,
  VirtualMachineRunCommandsGetOptionalParams,
  VirtualMachineRunCommandsGetResponse,
  VirtualMachineRunCommandsCreateOrUpdateOptionalParams,
  VirtualMachineRunCommandsCreateOrUpdateResponse,
  VirtualMachineRunCommandUpdate,
  VirtualMachineRunCommandsUpdateOptionalParams,
  VirtualMachineRunCommandsUpdateResponse,
  VirtualMachineRunCommandsDeleteOptionalParams,
  VirtualMachineRunCommandsGetByVirtualMachineOptionalParams,
  VirtualMachineRunCommandsGetByVirtualMachineResponse,
  VirtualMachineRunCommandsListNextResponse,
  VirtualMachineRunCommandsListByVirtualMachineNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualMachineRunCommands operations. */
export class VirtualMachineRunCommandsImpl
  implements VirtualMachineRunCommands {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class VirtualMachineRunCommands class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all available run commands for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams
  ): PagedAsyncIterableIterator<RunCommandDocumentBase> {
    const iter = this.listPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(location, options, settings);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<RunCommandDocumentBase[]> {
    let result: VirtualMachineRunCommandsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(location, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams
  ): AsyncIterableIterator<RunCommandDocumentBase> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * The operation to get all run commands of a Virtual Machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param options The options parameters.
   */
  public listByVirtualMachine(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineRunCommand> {
    const iter = this.listByVirtualMachinePagingAll(
      resourceGroupName,
      vmName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByVirtualMachinePagingPage(
          resourceGroupName,
          vmName,
          options,
          settings
        );
      }
    };
  }

  private async *listByVirtualMachinePagingPage(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VirtualMachineRunCommand[]> {
    let result: VirtualMachineRunCommandsListByVirtualMachineResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByVirtualMachine(
        resourceGroupName,
        vmName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByVirtualMachineNext(
        resourceGroupName,
        vmName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByVirtualMachinePagingAll(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams
  ): AsyncIterableIterator<VirtualMachineRunCommand> {
    for await (const page of this.listByVirtualMachinePagingPage(
      resourceGroupName,
      vmName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all available run commands for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams
  ): Promise<VirtualMachineRunCommandsListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }

  /**
   * Gets specific run command for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param commandId The command id.
   * @param options The options parameters.
   */
  get(
    location: string,
    commandId: string,
    options?: VirtualMachineRunCommandsGetOptionalParams
  ): Promise<VirtualMachineRunCommandsGetResponse> {
    return this.client.sendOperationRequest(
      { location, commandId, options },
      getOperationSpec
    );
  }

  /**
   * The operation to create or update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be created or updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineRunCommandsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineRunCommandsCreateOrUpdateResponse>,
      VirtualMachineRunCommandsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineRunCommandsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vmName, runCommandName, runCommand, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to create or update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be created or updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineRunCommandsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineRunCommandsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vmName,
      runCommandName,
      runCommand,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineRunCommandsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineRunCommandsUpdateResponse>,
      VirtualMachineRunCommandsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineRunCommandsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vmName, runCommandName, runCommand, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineRunCommandsUpdateOptionalParams
  ): Promise<VirtualMachineRunCommandsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmName,
      runCommandName,
      runCommand,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be deleted.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vmName, runCommandName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to delete the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be deleted.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vmName,
      runCommandName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  getByVirtualMachine(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsGetByVirtualMachineOptionalParams
  ): Promise<VirtualMachineRunCommandsGetByVirtualMachineResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, runCommandName, options },
      getByVirtualMachineOperationSpec
    );
  }

  /**
   * The operation to get all run commands of a Virtual Machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param options The options parameters.
   */
  private _listByVirtualMachine(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams
  ): Promise<VirtualMachineRunCommandsListByVirtualMachineResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      listByVirtualMachineOperationSpec
    );
  }

  /**
   * ListNext
   * @param location The location upon which run commands is queried.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: VirtualMachineRunCommandsListNextOptionalParams
  ): Promise<VirtualMachineRunCommandsListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByVirtualMachineNext
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param nextLink The nextLink from the previous successful call to the ListByVirtualMachine method.
   * @param options The options parameters.
   */
  private _listByVirtualMachineNext(
    resourceGroupName: string,
    vmName: string,
    nextLink: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineNextOptionalParams
  ): Promise<VirtualMachineRunCommandsListByVirtualMachineNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, nextLink, options },
      listByVirtualMachineNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.location,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands/{commandId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandDocument
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.location,
    Parameters.subscriptionId,
    Parameters.commandId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    201: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    202: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    204: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.runCommand,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    201: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    202: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    204: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.runCommand1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const getByVirtualMachineOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vmName,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listByVirtualMachineOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommandsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandListResult
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.location,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listByVirtualMachineNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommandsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
