/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Application, SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or update a security application on the given subscription.
 *
 * @summary Creates or update a security application on the given subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-07-01-preview/examples/Applications/PutApplication_example.json
 */
async function createApplication() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const applicationId = "ad9a8e26-29d9-4829-bb30-e597a58cdbb8";
  const application: Application = {
    description: "An application on critical recommendations",
    conditionSets: [
      {
        conditions: [{ operator: "contains", property: "$.Id", value: "-bil-" }]
      }
    ],
    displayName: "Admin's application",
    sourceResourceType: "Assessments"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.applicationOperations.createOrUpdate(
    applicationId,
    application
  );
  console.log(result);
}

async function main() {
  createApplication();
}

main().catch(console.error);
