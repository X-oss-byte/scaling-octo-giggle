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
 * This sample demonstrates how to Queries policy events for the subscription level policy set definition.
 *
 * @summary Queries policy events for the subscription level policy set definition.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyEvents_QuerySubscriptionLevelPolicySetDefinitionScopeNextLink.json
 */
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function queryAtSubscriptionLevelPolicySetDefinitionScopeWithNextLink() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const policySetDefinitionName = "3e3807c1-65c9-49e0-a406-82d8ae3e338c";
  const skipToken = "WpmWfBSvPhkAK6QD";
  const options = { skipToken: skipToken };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyEvents.listQueryResultsForPolicySetDefinition(
    subscriptionId,
    policySetDefinitionName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryAtSubscriptionLevelPolicySetDefinitionScopeWithNextLink().catch(
  console.error
);
