/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get problem classification details for a specific Azure service.
 *
 * @summary Get problem classification details for a specific Azure service.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/stable/2020-04-01/examples/GetProblemClassification.json
 */
async function getsDetailsOfProblemClassificationForAzureService() {
  const subscriptionId =
    process.env["SUPPORT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const serviceName = "service_guid";
  const problemClassificationName = "problemClassification_guid";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const result = await client.problemClassifications.get(
    serviceName,
    problemClassificationName
  );
  console.log(result);
}

async function main() {
  getsDetailsOfProblemClassificationForAzureService();
}

main().catch(console.error);
