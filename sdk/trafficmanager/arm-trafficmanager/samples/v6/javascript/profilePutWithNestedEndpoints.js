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
 * This sample demonstrates how to Create or update a Traffic Manager profile.
 *
 * @summary Create or update a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2018-08-01/examples/Profile-PUT-WithNestedEndpoints.json
 */
const { TrafficManagerManagementClient } = require("@azure/arm-trafficmanager");
const { DefaultAzureCredential } = require("@azure/identity");

async function profilePutWithNestedEndpoints() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myresourcegroup";
  const profileName = "parentprofile";
  const parameters = {
    dnsConfig: { relativeName: "parentprofile", ttl: 35 },
    endpoints: [
      {
        name: "MyFirstNestedEndpoint",
        type: "Microsoft.Network/trafficManagerProfiles/nestedEndpoints",
        endpointStatus: "Enabled",
        minChildEndpoints: 2,
        minChildEndpointsIPv4: 1,
        minChildEndpointsIPv6: 2,
        priority: 1,
        target: "firstnestedprofile.tmpreview.watmtest.azure-test.net",
        weight: 1,
      },
      {
        name: "MySecondNestedEndpoint",
        type: "Microsoft.Network/trafficManagerProfiles/nestedEndpoints",
        endpointStatus: "Enabled",
        minChildEndpoints: 2,
        minChildEndpointsIPv4: 2,
        minChildEndpointsIPv6: 1,
        priority: 2,
        target: "secondnestedprofile.tmpreview.watmtest.azure-test.net",
        weight: 1,
      },
    ],
    location: "global",
    monitorConfig: {
      path: "/testpath.aspx",
      intervalInSeconds: 10,
      port: 80,
      timeoutInSeconds: 5,
      toleratedNumberOfFailures: 2,
      protocol: "HTTP",
    },
    profileStatus: "Enabled",
    trafficRoutingMethod: "Priority",
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.createOrUpdate(resourceGroupName, profileName, parameters);
  console.log(result);
}

profilePutWithNestedEndpoints().catch(console.error);
