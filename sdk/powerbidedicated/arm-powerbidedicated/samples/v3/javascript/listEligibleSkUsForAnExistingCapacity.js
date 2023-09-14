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
 * This sample demonstrates how to Lists eligible SKUs for a PowerBI Dedicated resource.
 *
 * @summary Lists eligible SKUs for a PowerBI Dedicated resource.
 * x-ms-original-file: specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/stable/2021-01-01/examples/listSKUsForExisting.json
 */
const { PowerBIDedicated } = require("@azure/arm-powerbidedicated");
const { DefaultAzureCredential } = require("@azure/identity");

async function listEligibleSkUsForAnExistingCapacity() {
  const subscriptionId = "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName = "TestRG";
  const dedicatedCapacityName = "azsdktest";
  const credential = new DefaultAzureCredential();
  const client = new PowerBIDedicated(credential, subscriptionId);
  const result = await client.capacities.listSkusForCapacity(
    resourceGroupName,
    dedicatedCapacityName
  );
  console.log(result);
}

listEligibleSkUsForAnExistingCapacity().catch(console.error);
