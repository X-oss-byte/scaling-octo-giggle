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
 * This sample demonstrates how to Queries policy states for the subscription level policy definition.
 *
 * @summary Queries policy states for the subscription level policy definition.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyStates_QuerySubscriptionLevelPolicyDefinitionScope.json
 */
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function queryLatestAtSubscriptionLevelPolicyDefinitionScope() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policyStatesResource = "latest";
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const policyDefinitionName = "24813039-7534-408a-9842-eb99f45721b1";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyStates.listQueryResultsForPolicyDefinition(
    policyStatesResource,
    subscriptionId,
    policyDefinitionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryLatestAtSubscriptionLevelPolicyDefinitionScope().catch(console.error);
