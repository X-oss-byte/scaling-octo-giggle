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
import { ServicemapManagementClientContext } from "./servicemapManagementClientContext";


class ServicemapManagementClient extends ServicemapManagementClientContext {
  // Operation groups
  machines: operations.Machines;
  processes: operations.Processes;
  ports: operations.Ports;
  clientGroups: operations.ClientGroups;
  maps: operations.Maps;
  summaries: operations.Summaries;
  machineGroups: operations.MachineGroups;

  /**
   * Initializes a new instance of the ServicemapManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Azure subscription identifier.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.ServicemapManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.machines = new operations.Machines(this);
    this.processes = new operations.Processes(this);
    this.ports = new operations.Ports(this);
    this.clientGroups = new operations.ClientGroups(this);
    this.maps = new operations.Maps(this);
    this.summaries = new operations.Summaries(this);
    this.machineGroups = new operations.MachineGroups(this);
  }
}

// Operation Specifications

export {
  ServicemapManagementClient,
  ServicemapManagementClientContext,
  Models as ServicemapManagementModels,
  Mappers as ServicemapManagementMappers
};
export * from "./operations";