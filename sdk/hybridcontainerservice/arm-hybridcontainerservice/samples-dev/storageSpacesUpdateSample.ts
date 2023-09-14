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
  StorageSpacesPatch,
  HybridContainerServiceClient
} from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Patches the Hybrid AKS storage object
 *
 * @summary Patches the Hybrid AKS storage object
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-09-01-preview/examples/UpdateStorageSpace.json
 */
async function updateStorageSpace() {
  const subscriptionId =
    process.env["HYBRIDCONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName =
    process.env["HYBRIDCONTAINERSERVICE_RESOURCE_GROUP"] ||
    "test-arcappliance-resgrp";
  const storageSpacesName = "test-storage";
  const storageSpaces: StorageSpacesPatch = {
    tags: { additionalProperties: "sample" }
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.storageSpacesOperations.beginUpdateAndWait(
    resourceGroupName,
    storageSpacesName,
    storageSpaces
  );
  console.log(result);
}

async function main() {
  updateStorageSpace();
}

main().catch(console.error);
