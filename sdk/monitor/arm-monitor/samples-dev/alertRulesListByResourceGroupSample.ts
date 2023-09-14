/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List the classic metric alert rules within a resource group.
 *
 * @summary List the classic metric alert rules within a resource group.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2016-03-01/examples/listAlertRule.json
 */
async function listAlertRules() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "b67f7fec-69fc-4974-9099-a26bd6ffeda3";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "Rac46PostSwapRG";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.alertRules.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAlertRules();
}

main().catch(console.error);
