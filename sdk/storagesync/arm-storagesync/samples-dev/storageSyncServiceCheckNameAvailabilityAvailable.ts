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
 * This sample demonstrates how to Check the give namespace name availability.
 *
 * @summary Check the give namespace name availability.
 * x-ms-original-file: specification/storagesync/resource-manager/Microsoft.StorageSync/stable/2020-09-01/examples/StorageSyncServiceCheckNameAvailability_Available.json
 */
import {
  CheckNameAvailabilityParameters,
  MicrosoftStorageSync
} from "@azure/arm-storagesync";
import { DefaultAzureCredential } from "@azure/identity";

async function storageSyncServiceCheckNameAvailabilityAvailable() {
  const subscriptionId = "5c6bc8e1-1eaf-4192-94d8-58ce463ac86c";
  const locationName = "westus";
  const parameters: CheckNameAvailabilityParameters = {
    name: "newstoragesyncservicename",
    type: "Microsoft.StorageSync/storageSyncServices"
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftStorageSync(credential, subscriptionId);
  const result = await client.storageSyncServices.checkNameAvailability(
    locationName,
    parameters
  );
  console.log(result);
}

storageSyncServiceCheckNameAvailabilityAvailable().catch(console.error);
