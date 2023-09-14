/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  DeploymentWhatIf,
  ResourceManagementClient
} from "@azure/arm-resources-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns changes that will be made by the deployment if executed at the scope of the subscription.
 *
 * @summary Returns changes that will be made by the deployment if executed at the scope of the subscription.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2019-10-01/examples/PostDeploymentWhatIfOnSubscription.json
 */
async function predictTemplateChangesAtSubscriptionScope() {
  const subscriptionId =
    process.env["RESOURCES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000001";
  const deploymentName = "exampleDeploymentName";
  const parameters: DeploymentWhatIf = {
    location: "westus",
    properties: { mode: "Incremental", parameters: {}, templateLink: { uri: "https://example.com/exampleTemplate.json" } }
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginWhatIfAtSubscriptionScopeAndWait(
    deploymentName,
    parameters
  );
  console.log(result);
}

async function main() {
  predictTemplateChangesAtSubscriptionScope();
}

main().catch(console.error);
