/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SignalRManagementClient } = require("@azure/arm-signalr");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 *
 * @summary Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 * x-ms-original-file: specification/signalr/resource-manager/Microsoft.SignalRService/preview/2022-08-01-preview/examples/SignalR_RegenerateKey.json
 */
async function signalRRegenerateKey() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const resourceName = "mySignalRService";
  const parameters = { keyType: "Primary" };
  const credential = new DefaultAzureCredential();
  const client = new SignalRManagementClient(credential, subscriptionId);
  const result = await client.signalR.beginRegenerateKeyAndWait(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

signalRRegenerateKey().catch(console.error);
