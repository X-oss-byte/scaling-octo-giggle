/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Regenerate a shared access key for a partner namespace.
 *
 * @summary Regenerate a shared access key for a partner namespace.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-06-01-preview/examples/PartnerNamespaces_RegenerateKey.json
 */
async function partnerNamespacesRegenerateKey() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const partnerNamespaceName = "examplePartnerNamespaceName1";
  const regenerateKeyRequest = {
    keyName: "key1",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerNamespaces.regenerateKey(
    resourceGroupName,
    partnerNamespaceName,
    regenerateKeyRequest
  );
  console.log(result);
}

async function main() {
  partnerNamespacesRegenerateKey();
}

main().catch(console.error);
