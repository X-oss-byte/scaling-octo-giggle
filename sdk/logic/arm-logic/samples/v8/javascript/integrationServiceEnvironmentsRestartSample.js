/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { LogicManagementClient } = require("@azure/arm-logic");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Restarts an integration service environment.
 *
 * @summary Restarts an integration service environment.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/IntegrationServiceEnvironments_Restart.json
 */
async function restartsAnIntegrationServiceEnvironment() {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] || "f34b22a3-2202-4fb1-b040-1332bd928c84";
  const resourceGroup = "testResourceGroup";
  const integrationServiceEnvironmentName = "testIntegrationServiceEnvironment";
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const result = await client.integrationServiceEnvironments.restart(
    resourceGroup,
    integrationServiceEnvironmentName
  );
  console.log(result);
}

async function main() {
  restartsAnIntegrationServiceEnvironment();
}

main().catch(console.error);
