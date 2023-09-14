/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BatchManagementClient } = require("@azure/arm-batch");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all of the pools in the specified account.
 *
 * @summary Lists all of the pools in the specified account.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-10-01/examples/PoolList.json
 */
async function listPool() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.poolOperations.listByBatchAccount(resourceGroupName, accountName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPool().catch(console.error);

/**
 * This sample demonstrates how to Lists all of the pools in the specified account.
 *
 * @summary Lists all of the pools in the specified account.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-10-01/examples/PoolListWithFilter.json
 */
async function listPoolWithFilter() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const select =
    "properties/allocationState,properties/provisioningStateTransitionTime,properties/currentDedicatedNodes,properties/currentLowPriorityNodes";
  const filter =
    "startswith(name, 'po') or (properties/allocationState eq 'Steady' and properties/provisioningStateTransitionTime lt datetime'2017-02-02')";
  const options = { select, filter };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.poolOperations.listByBatchAccount(
    resourceGroupName,
    accountName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPoolWithFilter().catch(console.error);
