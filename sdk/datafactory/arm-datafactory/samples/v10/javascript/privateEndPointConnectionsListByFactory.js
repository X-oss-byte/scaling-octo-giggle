/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Lists Private endpoint connections
 *
 * @summary Lists Private endpoint connections
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/PrivateEndPointConnections_ListByFactory.json
 */
const { DataFactoryManagementClient } = require("@azure/arm-datafactory");
const { DefaultAzureCredential } = require("@azure/identity");

async function privateEndPointConnectionsListByFactory() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndPointConnections.listByFactory(
    resourceGroupName,
    factoryName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

privateEndPointConnectionsListByFactory().catch(console.error);
