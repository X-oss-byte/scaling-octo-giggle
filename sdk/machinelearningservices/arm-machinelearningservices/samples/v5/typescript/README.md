# client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for in some common scenarios.

| **File Name**                                                                                                           | **Description**                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [computeCreateOrUpdateSample.ts][computecreateorupdatesample]                                                           | Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/createOrUpdate/KubernetesCompute.json |
| [computeDeleteSample.ts][computedeletesample]                                                                           | Deletes specified Machine Learning compute. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/delete.json                                                                                                                                                                                                |
| [computeGetSample.ts][computegetsample]                                                                                 | Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not returned - use 'keys' nested resource to get them. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/get/AKSCompute.json                                                                               |
| [computeListKeysSample.ts][computelistkeyssample]                                                                       | Gets secrets related to Machine Learning compute (storage keys, service credentials, etc). x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/listKeys.json                                                                                                                                               |
| [computeListNodesSample.ts][computelistnodessample]                                                                     | Get the details (e.g IP address, port etc) of all the compute nodes in the compute. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/listNodes.json                                                                                                                                                     |
| [computeListSample.ts][computelistsample]                                                                               | Gets computes in specified workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/list.json                                                                                                                                                                                                        |
| [computeRestartSample.ts][computerestartsample]                                                                         | Posts a restart action to a compute instance x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/restart.json                                                                                                                                                                                              |
| [computeStartSample.ts][computestartsample]                                                                             | Posts a start action to a compute instance x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/start.json                                                                                                                                                                                                  |
| [computeStopSample.ts][computestopsample]                                                                               | Posts a stop action to a compute instance x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/stop.json                                                                                                                                                                                                    |
| [computeUpdateSample.ts][computeupdatesample]                                                                           | Updates properties of a compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Compute/patch.json                                                                                                                       |
| [privateEndpointConnectionsCreateOrUpdateSample.ts][privateendpointconnectionscreateorupdatesample]                     | Update the state of specified private endpoint connection associated with the workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/PrivateEndpointConnection/createOrUpdate.json                                                                                                                         |
| [privateEndpointConnectionsDeleteSample.ts][privateendpointconnectionsdeletesample]                                     | Deletes the specified private endpoint connection associated with the workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/PrivateEndpointConnection/delete.json                                                                                                                                         |
| [privateEndpointConnectionsGetSample.ts][privateendpointconnectionsgetsample]                                           | Gets the specified private endpoint connection associated with the workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/PrivateEndpointConnection/get.json                                                                                                                                               |
| [privateEndpointConnectionsListSample.ts][privateendpointconnectionslistsample]                                         | List all the private endpoint connections associated with the workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/PrivateEndpointConnection/list.json                                                                                                                                                   |
| [privateLinkResourcesListSample.ts][privatelinkresourceslistsample]                                                     | Gets the private link resources that need to be created for a workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/PrivateLinkResource/list.json                                                                                                                                                         |
| [quotasListSample.ts][quotaslistsample]                                                                                 | Gets the currently assigned Workspace Quotas based on VMFamily. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Quota/list.json                                                                                                                                                                                |
| [quotasUpdateSample.ts][quotasupdatesample]                                                                             | Update quota for each VM family in workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Quota/update.json                                                                                                                                                                                                |
| [usagesListSample.ts][usageslistsample]                                                                                 | Gets the current usage information as well as limits for AML resources for given subscription and location. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Usage/list.json                                                                                                                                    |
| [virtualMachineSizesListSample.ts][virtualmachinesizeslistsample]                                                       | Returns supported VM Sizes in a location x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/VirtualMachineSize/list.json                                                                                                                                                                                          |
| [workspaceConnectionsCreateSample.ts][workspaceconnectionscreatesample]                                                 | Add a new workspace connection. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/WorkspaceConnection/create.json                                                                                                                                                                                                |
| [workspaceConnectionsDeleteSample.ts][workspaceconnectionsdeletesample]                                                 | Delete a workspace connection. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/WorkspaceConnection/delete.json                                                                                                                                                                                                 |
| [workspaceConnectionsGetSample.ts][workspaceconnectionsgetsample]                                                       | Get the detail of a workspace connection. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/WorkspaceConnection/get.json                                                                                                                                                                                         |
| [workspaceConnectionsListSample.ts][workspaceconnectionslistsample]                                                     | List all connections under a AML workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/WorkspaceConnection/list.json                                                                                                                                                                                      |
| [workspaceFeaturesListSample.ts][workspacefeatureslistsample]                                                           | Lists all enabled features for a workspace x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/WorkspaceFeature/list.json                                                                                                                                                                                          |
| [workspaceSkusListSample.ts][workspaceskuslistsample]                                                                   | Lists all skus with associated features x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/WorkspaceSku/list.json                                                                                                                                                                                                 |
| [workspacesCreateOrUpdateSample.ts][workspacescreateorupdatesample]                                                     | Creates or updates a workspace with the specified parameters. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/create.json                                                                                                                                                                            |
| [workspacesDeleteSample.ts][workspacesdeletesample]                                                                     | Deletes a machine learning workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/delete.json                                                                                                                                                                                                    |
| [workspacesDiagnoseSample.ts][workspacesdiagnosesample]                                                                 | Diagnose workspace setup issue. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/diagnose.json                                                                                                                                                                                                        |
| [workspacesGetSample.ts][workspacesgetsample]                                                                           | Gets the properties of the specified machine learning workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/get.json                                                                                                                                                                            |
| [workspacesListByResourceGroupSample.ts][workspaceslistbyresourcegroupsample]                                           | Lists all the available machine learning workspaces under the specified resource group. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/listByResourceGroup.json                                                                                                                                     |
| [workspacesListBySubscriptionSample.ts][workspaceslistbysubscriptionsample]                                             | Lists all the available machine learning workspaces under the specified subscription. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/listBySubscription.json                                                                                                                                        |
| [workspacesListKeysSample.ts][workspaceslistkeyssample]                                                                 | Lists all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/listKeys.json                                                                                        |
| [workspacesListNotebookAccessTokenSample.ts][workspaceslistnotebookaccesstokensample]                                   | return notebook access token and refresh token x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/listNotebookAccessToken.json                                                                                                                                                                          |
| [workspacesListNotebookKeysSample.ts][workspaceslistnotebookkeyssample]                                                 | List keys of a notebook. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Notebook/listKeys.json                                                                                                                                                                                                                |
| [workspacesListOutboundNetworkDependenciesEndpointsSample.ts][workspaceslistoutboundnetworkdependenciesendpointssample] | Called by Client (Portal, CLI, etc) to get a list of all external outbound dependencies (FQDNs) programmatically. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/ExternalFQDN/get.json                                                                                                                        |
| [workspacesListStorageAccountKeysSample.ts][workspacesliststorageaccountkeyssample]                                     | List storage account keys of a workspace. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/listStorageAccountKeys.json                                                                                                                                                                                |
| [workspacesPrepareNotebookSample.ts][workspacespreparenotebooksample]                                                   | Prepare a notebook. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Notebook/prepare.json                                                                                                                                                                                                                      |
| [workspacesResyncKeysSample.ts][workspacesresynckeyssample]                                                             | Resync all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/resyncKeys.json                                                                                     |
| [workspacesUpdateSample.ts][workspacesupdatesample]                                                                     | Updates a machine learning workspace with the specified parameters. x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2021-07-01/examples/Workspace/update.json                                                                                                                                                                      |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/computeCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node dist/computeCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[computecreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeCreateOrUpdateSample.ts
[computedeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeDeleteSample.ts
[computegetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeGetSample.ts
[computelistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeListKeysSample.ts
[computelistnodessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeListNodesSample.ts
[computelistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeListSample.ts
[computerestartsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeRestartSample.ts
[computestartsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeStartSample.ts
[computestopsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeStopSample.ts
[computeupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/computeUpdateSample.ts
[privateendpointconnectionscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/privateEndpointConnectionsCreateOrUpdateSample.ts
[privateendpointconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/privateEndpointConnectionsDeleteSample.ts
[privateendpointconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/privateEndpointConnectionsGetSample.ts
[privateendpointconnectionslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/privateEndpointConnectionsListSample.ts
[privatelinkresourceslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/privateLinkResourcesListSample.ts
[quotaslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/quotasListSample.ts
[quotasupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/quotasUpdateSample.ts
[usageslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/usagesListSample.ts
[virtualmachinesizeslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/virtualMachineSizesListSample.ts
[workspaceconnectionscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspaceConnectionsCreateSample.ts
[workspaceconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspaceConnectionsDeleteSample.ts
[workspaceconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspaceConnectionsGetSample.ts
[workspaceconnectionslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspaceConnectionsListSample.ts
[workspacefeatureslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspaceFeaturesListSample.ts
[workspaceskuslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspaceSkusListSample.ts
[workspacescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesCreateOrUpdateSample.ts
[workspacesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesDeleteSample.ts
[workspacesdiagnosesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesDiagnoseSample.ts
[workspacesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesGetSample.ts
[workspaceslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesListByResourceGroupSample.ts
[workspaceslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesListBySubscriptionSample.ts
[workspaceslistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesListKeysSample.ts
[workspaceslistnotebookaccesstokensample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesListNotebookAccessTokenSample.ts
[workspaceslistnotebookkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesListNotebookKeysSample.ts
[workspaceslistoutboundnetworkdependenciesendpointssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesListOutboundNetworkDependenciesEndpointsSample.ts
[workspacesliststorageaccountkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesListStorageAccountKeysSample.ts
[workspacespreparenotebooksample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesPrepareNotebookSample.ts
[workspacesresynckeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesResyncKeysSample.ts
[workspacesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/machinelearningservices/arm-machinelearningservices/samples/v5/typescript/src/workspacesUpdateSample.ts
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-machinelearningservices?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/machinelearningservices/arm-machinelearningservices/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html