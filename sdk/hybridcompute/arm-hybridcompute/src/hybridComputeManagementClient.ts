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
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { HybridComputeManagementClientContext } from "./hybridComputeManagementClientContext";


class HybridComputeManagementClient extends HybridComputeManagementClientContext {
  // Operation groups
  machines: operations.Machines;
  machineExtensions: operations.MachineExtensions;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the HybridComputeManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.HybridComputeManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.machines = new operations.Machines(this);
    this.machineExtensions = new operations.MachineExtensions(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  HybridComputeManagementClient,
  HybridComputeManagementClientContext,
  Models as HybridComputeManagementModels,
  Mappers as HybridComputeManagementMappers
};
export * from "./operations";
