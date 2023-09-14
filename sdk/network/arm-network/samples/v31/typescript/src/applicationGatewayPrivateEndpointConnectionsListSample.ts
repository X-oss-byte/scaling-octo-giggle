/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all private endpoint connections on an application gateway.
 *
 * @summary Lists all private endpoint connections on an application gateway.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-11-01/examples/ApplicationGatewayPrivateEndpointConnectionList.json
 */
async function listsAllPrivateEndpointConnectionsOnApplicationGateway() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const applicationGatewayName = "appgw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.applicationGatewayPrivateEndpointConnections.list(
    resourceGroupName,
    applicationGatewayName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listsAllPrivateEndpointConnectionsOnApplicationGateway();
}

main().catch(console.error);
