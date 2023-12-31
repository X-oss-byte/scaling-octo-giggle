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
 * This sample demonstrates how to Check if a service instance name is available.
 *
 * @summary Check if a service instance name is available.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/CheckNameAvailabilityPost.json
 */
const { HealthcareApisManagementClient } = require("@azure/arm-healthcareapis");
const { DefaultAzureCredential } = require("@azure/identity");

async function checkNameAvailability() {
  const subscriptionId = "subid";
  const checkNameAvailabilityInputs = {
    name: "serviceName",
    type: "Microsoft.HealthcareApis/services",
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result = await client.services.checkNameAvailability(checkNameAvailabilityInputs);
  console.log(result);
}

checkNameAvailability().catch(console.error);
