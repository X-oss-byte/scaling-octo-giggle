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
 * This sample demonstrates how to Gets the file server metrics.
 *
 * @summary Gets the file server metrics.
 * x-ms-original-file: specification/storSimple1200Series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/FileServersListMetrics.json
 */
import { StorSimpleManagementClient } from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

async function fileServersListMetrics() {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const deviceName = "HSDK-DMNJB2PET0";
  const fileServerName = "HSDK-DMNJB2PET0";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const filter =
    "startTime ge '2018-08-10T18:30:00Z' and endTime le '2018-08-11T18:30:00Z'";
  const options = { filter: filter };
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fileServers.listMetrics(
    deviceName,
    fileServerName,
    resourceGroupName,
    managerName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

fileServersListMetrics().catch(console.error);
