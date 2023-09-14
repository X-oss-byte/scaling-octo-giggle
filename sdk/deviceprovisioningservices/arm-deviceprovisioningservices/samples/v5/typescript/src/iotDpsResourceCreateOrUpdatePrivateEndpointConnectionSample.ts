/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PrivateEndpointConnection,
  IotDpsClient
} from "@azure/arm-deviceprovisioningservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update the status of a private endpoint connection with the specified name
 *
 * @summary Create or update the status of a private endpoint connection with the specified name
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2022-02-05/examples/DPSCreateOrUpdatePrivateEndpointConnection.json
 */
async function privateEndpointConnectionCreateOrUpdate() {
  const subscriptionId =
    process.env["DEVICEPROVISIONINGSERVICES_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["DEVICEPROVISIONINGSERVICES_RESOURCE_GROUP"] ||
    "myResourceGroup";
  const resourceName = "myFirstProvisioningService";
  const privateEndpointConnectionName = "myPrivateEndpointConnection";
  const privateEndpointConnection: PrivateEndpointConnection = {
    properties: {
      privateLinkServiceConnectionState: {
        description: "Approved by johndoe@contoso.com",
        status: "Approved"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.iotDpsResource.beginCreateOrUpdatePrivateEndpointConnectionAndWait(
    resourceGroupName,
    resourceName,
    privateEndpointConnectionName,
    privateEndpointConnection
  );
  console.log(result);
}

async function main() {
  privateEndpointConnectionCreateOrUpdate();
}

main().catch(console.error);
