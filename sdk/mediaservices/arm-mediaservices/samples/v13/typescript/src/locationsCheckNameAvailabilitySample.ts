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
  CheckNameAvailabilityInput,
  AzureMediaServices
} from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Checks whether the Media Service resource name is available.
 *
 * @summary Checks whether the Media Service resource name is available.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Accounts/stable/2021-11-01/examples/accounts-check-name-availability.json
 */
async function checkNameAvailability() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const locationName = "japanwest";
  const parameters: CheckNameAvailabilityInput = {
    name: "contosotv",
    type: "videoAnalyzers"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.locations.checkNameAvailability(
    locationName,
    parameters
  );
  console.log(result);
}

async function main() {
  checkNameAvailability();
}

main().catch(console.error);
