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
  UserSessionsListByHostPoolOptionalParams,
  DesktopVirtualizationAPIClient
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List userSessions.
 *
 * @summary List userSessions.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/preview/2021-09-03-preview/examples/UserSession_ListByHostPool.json
 */
async function userSessionListByHostPool() {
  const subscriptionId = "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName = "resourceGroup1";
  const hostPoolName = "hostPool1";
  const filter =
    "userPrincipalName eq 'user1@microsoft.com' and state eq 'active'";
  const options: UserSessionsListByHostPoolOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.userSessions.listByHostPool(
    resourceGroupName,
    hostPoolName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

userSessionListByHostPool().catch(console.error);
