/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CustomerInsightsManagementClient } = require("@azure/arm-customerinsights");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a KPI or updates an existing KPI in the hub.
 *
 * @summary Creates a KPI or updates an existing KPI in the hub.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/KpiCreateOrUpdate.json
 */
async function kpiCreateOrUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "sdkTestHub";
  const kpiName = "kpiTest45453647";
  const parameters = {
    description: { enUs: "Kpi Description" },
    aliases: [{ aliasName: "alias", expression: "Id+4" }],
    calculationWindow: "Day",
    displayName: { enUs: "Kpi DisplayName" },
    entityType: "Profile",
    entityTypeName: "testProfile2327128",
    expression: "SavingAccountBalance",
    function: "Sum",
    groupBy: ["SavingAccountBalance"],
    thresHolds: { increasingKpi: true, lowerLimit: 5, upperLimit: 50 },
    unit: "unit",
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(credential, subscriptionId);
  const result = await client.kpi.beginCreateOrUpdateAndWait(
    resourceGroupName,
    hubName,
    kpiName,
    parameters
  );
  console.log(result);
}

kpiCreateOrUpdate().catch(console.error);