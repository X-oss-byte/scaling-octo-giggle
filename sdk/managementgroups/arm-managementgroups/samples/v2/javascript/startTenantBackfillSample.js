/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ManagementGroupsAPI } = require("@azure/arm-managementgroups");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Starts backfilling subscriptions for the Tenant.
 *
 * @summary Starts backfilling subscriptions for the Tenant.
 * x-ms-original-file: specification/managementgroups/resource-manager/Microsoft.Management/stable/2021-04-01/examples/StartTenantBackfillRequest.json
 */
async function startTenantBackfill() {
  const credential = new DefaultAzureCredential();
  const client = new ManagementGroupsAPI(credential);
  const result = await client.startTenantBackfill();
  console.log(result);
}

startTenantBackfill().catch(console.error);
