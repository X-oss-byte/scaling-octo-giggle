/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DesktopVirtualizationAPIClient } from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List the private link resources available for this workspace.
 *
 * @summary List the private link resources available for this workspace.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/preview/2021-09-03-preview/examples/PrivateLinkResources_ListByWorkspace.json
 */
async function privateLinkResourcesListByWorkspace() {
  const subscriptionId = "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName = "resourceGroup1";
  const workspaceName = "workspace1";
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateLinkResources.listByWorkspace(
    resourceGroupName,
    workspaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

privateLinkResourcesListByWorkspace().catch(console.error);
