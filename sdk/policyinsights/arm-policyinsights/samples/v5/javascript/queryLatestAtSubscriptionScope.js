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
 * This sample demonstrates how to Queries policy states for the resources under the subscription.
 *
 * @summary Queries policy states for the resources under the subscription.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyStates_QuerySubscriptionScope.json
 */
const { PolicyInsightsClient } = require("@azure/arm-policyinsights");
const { DefaultAzureCredential } = require("@azure/identity");

async function queryLatestAtSubscriptionScope() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policyStatesResource = "latest";
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyStates.listQueryResultsForSubscription(
    policyStatesResource,
    subscriptionId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryLatestAtSubscriptionScope().catch(console.error);
