/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AFDOrigin, CdnManagementClient } from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a new origin within the specified origin group.
 *
 * @summary Creates a new origin within the specified origin group.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/AFDOrigins_Create.json
 */
async function afdOriginsCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "RG";
  const profileName = "profile1";
  const originGroupName = "origingroup1";
  const originName = "origin1";
  const origin: AFDOrigin = {
    enabledState: "Enabled",
    hostName: "host1.blob.core.windows.net",
    httpPort: 80,
    httpsPort: 443,
    originHostHeader: "host1.foo.com"
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.afdOrigins.beginCreateAndWait(
    resourceGroupName,
    profileName,
    originGroupName,
    originName,
    origin
  );
  console.log(result);
}

afdOriginsCreate().catch(console.error);
