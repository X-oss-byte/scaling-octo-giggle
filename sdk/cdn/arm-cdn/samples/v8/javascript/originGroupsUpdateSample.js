/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CdnManagementClient } = require("@azure/arm-cdn");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates an existing origin group within an endpoint.
 *
 * @summary Updates an existing origin group within an endpoint.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/OriginGroups_Update.json
 */
async function originGroupsUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "RG";
  const profileName = "profile1";
  const endpointName = "endpoint1";
  const originGroupName = "originGroup1";
  const originGroupUpdateProperties = {
    healthProbeSettings: {
      probeIntervalInSeconds: 120,
      probePath: "/health.aspx",
      probeProtocol: "Http",
      probeRequestType: "GET",
    },
    origins: [
      {
        id: "/subscriptions/subid/resourceGroups/RG/providers/Microsoft.Cdn/profiles/profile1/endpoints/endpoint1/origins/origin2",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.originGroups.beginUpdateAndWait(
    resourceGroupName,
    profileName,
    endpointName,
    originGroupName,
    originGroupUpdateProperties
  );
  console.log(result);
}

originGroupsUpdate().catch(console.error);
