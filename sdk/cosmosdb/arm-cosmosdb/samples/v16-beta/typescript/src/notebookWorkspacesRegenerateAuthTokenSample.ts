/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Regenerates the auth token for the notebook workspace
 *
 * @summary Regenerates the auth token for the notebook workspace
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBNotebookWorkspaceRegenerateAuthToken.json
 */
async function cosmosDbNotebookWorkspaceRegenerateAuthToken() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const notebookWorkspaceName = "default";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.notebookWorkspaces.beginRegenerateAuthTokenAndWait(
    resourceGroupName,
    accountName,
    notebookWorkspaceName
  );
  console.log(result);
}

cosmosDbNotebookWorkspaceRegenerateAuthToken().catch(console.error);