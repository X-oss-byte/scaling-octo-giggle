/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureOrbital } from "@azure/arm-orbital";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the specified contact Profile in a specified resource group
 *
 * @summary Gets the specified contact Profile in a specified resource group
 * x-ms-original-file: specification/orbital/resource-manager/Microsoft.Orbital/stable/2022-03-01/examples/ContactProfileGet.json
 */
async function getAContactProfile() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const contactProfileName = "AQUA_DIRECTPLAYBACK_WITH_UPLINK";
  const credential = new DefaultAzureCredential();
  const client = new AzureOrbital(credential, subscriptionId);
  const result = await client.contactProfiles.get(
    resourceGroupName,
    contactProfileName
  );
  console.log(result);
}

getAContactProfile().catch(console.error);