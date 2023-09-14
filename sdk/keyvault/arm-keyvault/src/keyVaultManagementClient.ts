/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreAuth from "@azure/core-auth";
import {
  KeysImpl,
  VaultsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  ManagedHsmsImpl,
  MhsmPrivateEndpointConnectionsImpl,
  MhsmPrivateLinkResourcesImpl,
  OperationsImpl,
  SecretsImpl
} from "./operations";
import {
  Keys,
  Vaults,
  PrivateEndpointConnections,
  PrivateLinkResources,
  ManagedHsms,
  MhsmPrivateEndpointConnections,
  MhsmPrivateLinkResources,
  Operations,
  Secrets
} from "./operationsInterfaces";
import { KeyVaultManagementClientContext } from "./keyVaultManagementClientContext";
import { KeyVaultManagementClientOptionalParams } from "./models";

export class KeyVaultManagementClient extends KeyVaultManagementClientContext {
  /**
   * Initializes a new instance of the KeyVaultManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: KeyVaultManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.keys = new KeysImpl(this);
    this.vaults = new VaultsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.managedHsms = new ManagedHsmsImpl(this);
    this.mhsmPrivateEndpointConnections = new MhsmPrivateEndpointConnectionsImpl(
      this
    );
    this.mhsmPrivateLinkResources = new MhsmPrivateLinkResourcesImpl(this);
    this.operations = new OperationsImpl(this);
    this.secrets = new SecretsImpl(this);
  }

  keys: Keys;
  vaults: Vaults;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  managedHsms: ManagedHsms;
  mhsmPrivateEndpointConnections: MhsmPrivateEndpointConnections;
  mhsmPrivateLinkResources: MhsmPrivateLinkResources;
  operations: Operations;
  secrets: Secrets;
}
