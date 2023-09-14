/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a new Private Endpoint Connection or updates an existing one.
 *
 * @summary Creates a new Private Endpoint Connection or updates an existing one.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementApproveOrRejectPrivateEndpointConnection.json
 */
async function apiManagementApproveOrRejectPrivateEndpointConnection() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const privateEndpointConnectionName = "privateEndpointConnectionName";
  const privateEndpointConnectionRequest = {
    id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/privateEndpointConnections/connectionName",
    properties: {
      privateLinkServiceConnectionState: {
        description: "The Private Endpoint Connection is approved.",
        status: "Approved",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnectionOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    privateEndpointConnectionName,
    privateEndpointConnectionRequest
  );
  console.log(result);
}

async function main() {
  apiManagementApproveOrRejectPrivateEndpointConnection();
}

main().catch(console.error);
