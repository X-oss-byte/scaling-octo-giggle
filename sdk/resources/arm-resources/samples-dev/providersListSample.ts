/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ResourceManagementClient } from "@azure/arm-resources";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets all resource providers for a subscription.
 *
 * @summary Gets all resource providers for a subscription.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-04-01/examples/GetProviders.json
 */
async function getProviders() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.providers.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getProviders().catch(console.error);
