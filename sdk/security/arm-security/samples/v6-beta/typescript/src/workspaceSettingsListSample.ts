/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set
 *
 * @summary Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/WorkspaceSettings/GetWorkspaceSettings_example.json
 */
async function getWorkspaceSettingsOnSubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workspaceSettings.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getWorkspaceSettingsOnSubscription().catch(console.error);
