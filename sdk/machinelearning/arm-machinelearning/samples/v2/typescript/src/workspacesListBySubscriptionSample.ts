/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMachineLearningWorkspaces } from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all the available machine learning workspaces under the specified subscription.
 *
 * @summary Lists all the available machine learning workspaces under the specified subscription.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-10-01/examples/Workspace/listBySubscription.json
 */
async function getWorkspacesBySubscription() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workspaces.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getWorkspacesBySubscription().catch(console.error);
