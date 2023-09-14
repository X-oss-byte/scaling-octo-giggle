/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes a live event.
 *
 * @summary Deletes a live event.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2022-08-01/examples/liveevent-delete.json
 */
async function deleteALiveEvent() {
  const subscriptionId = "0a6ec948-5a62-437d-b9df-934dc7c1b722";
  const resourceGroupName = "mediaresources";
  const accountName = "slitestmedia10";
  const liveEventName = "myLiveEvent1";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.liveEvents.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    liveEventName
  );
  console.log(result);
}

deleteALiveEvent().catch(console.error);