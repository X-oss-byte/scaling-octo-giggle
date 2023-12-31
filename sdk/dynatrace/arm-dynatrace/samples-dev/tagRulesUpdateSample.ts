/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagRuleUpdate, DynatraceObservability } from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a TagRule
 *
 * @summary Update a TagRule
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/TagRules_Update_MaximumSet_Gen.json
 */
async function tagRulesUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["DYNATRACE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DYNATRACE_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const ruleSetName = "default";
  const resource: TagRuleUpdate = {
    logRules: {
      filteringTags: [
        { name: "Environment", action: "Include", value: "Prod" },
        { name: "Environment", action: "Exclude", value: "Dev" }
      ],
      sendAadLogs: "Enabled",
      sendActivityLogs: "Enabled",
      sendSubscriptionLogs: "Enabled"
    },
    metricRules: {
      filteringTags: [{ name: "Environment", action: "Include", value: "Prod" }]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.tagRules.update(
    resourceGroupName,
    monitorName,
    ruleSetName,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a TagRule
 *
 * @summary Update a TagRule
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/TagRules_Update_MinimumSet_Gen.json
 */
async function tagRulesUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["DYNATRACE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DYNATRACE_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const ruleSetName = "default";
  const resource: TagRuleUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.tagRules.update(
    resourceGroupName,
    monitorName,
    ruleSetName,
    resource
  );
  console.log(result);
}

async function main() {
  tagRulesUpdateMaximumSetGen();
  tagRulesUpdateMinimumSetGen();
}

main().catch(console.error);
