/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update an metric alert definition.
 *
 * @summary Create or update an metric alert definition.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-03-01/examples/createOrUpdateDynamicMetricAlertMultipleResource.json
 */
async function createOrUpdateADynamicAlertRuleForMultipleResources() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "gigtest";
  const ruleName = "MetricAlertOnMultipleResources";
  const parameters = {
    description: "This is the description of the rule1",
    actions: [
      {
        actionGroupId:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2",
        webHookProperties: { key11: "value11", key12: "value12" },
      },
    ],
    autoMitigate: true,
    criteria: {
      allOf: [
        {
          name: "High_CPU_80",
          alertSensitivity: "Medium",
          criterionType: "DynamicThresholdCriterion",
          dimensions: [],
          failingPeriods: {
            minFailingPeriodsToAlert: 4,
            numberOfEvaluationPeriods: 4,
          },
          metricName: "Percentage CPU",
          metricNamespace: "microsoft.compute/virtualmachines",
          operator: "GreaterOrLessThan",
          timeAggregation: "Average",
        },
      ],
      odataType: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    },
    enabled: true,
    evaluationFrequency: "PT1M",
    location: "global",
    scopes: [
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme1",
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme2",
    ],
    severity: 3,
    tags: {},
    targetResourceRegion: "southcentralus",
    targetResourceType: "Microsoft.Compute/virtualMachines",
    windowSize: "PT15M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricAlerts.createOrUpdate(resourceGroupName, ruleName, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an metric alert definition.
 *
 * @summary Create or update an metric alert definition.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-03-01/examples/createOrUpdateDynamicMetricAlertSingleResource.json
 */
async function createOrUpdateADynamicAlertRuleForSingleResource() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "gigtest";
  const ruleName = "chiricutin";
  const parameters = {
    description: "This is the description of the rule1",
    actions: [
      {
        actionGroupId:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2",
        webHookProperties: { key11: "value11", key12: "value12" },
      },
    ],
    autoMitigate: true,
    criteria: {
      allOf: [
        {
          name: "High_CPU_80",
          alertSensitivity: "Medium",
          criterionType: "DynamicThresholdCriterion",
          dimensions: [],
          failingPeriods: {
            minFailingPeriodsToAlert: 4,
            numberOfEvaluationPeriods: 4,
          },
          ignoreDataBefore: new Date("2019-04-04T21:00:00.000Z"),
          metricName: "Percentage CPU",
          metricNamespace: "microsoft.compute/virtualmachines",
          operator: "GreaterOrLessThan",
          timeAggregation: "Average",
        },
      ],
      odataType: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    },
    enabled: true,
    evaluationFrequency: "PT1M",
    location: "global",
    scopes: [
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme",
    ],
    severity: 3,
    tags: {},
    windowSize: "PT15M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricAlerts.createOrUpdate(resourceGroupName, ruleName, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an metric alert definition.
 *
 * @summary Create or update an metric alert definition.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-03-01/examples/createOrUpdateWebTestMetricAlert.json
 */
async function createOrUpdateAWebTestAlertRule() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789101";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "rg-example";
  const ruleName = "webtest-name-example";
  const parameters = {
    description: 'Automatically created alert rule for availability test "component-example" a',
    actions: [],
    criteria: {
      componentId:
        "/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/components/webtest-name-example",
      failedLocationCount: 2,
      odataType: "Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria",
      webTestId:
        "/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/webtests/component-example",
    },
    enabled: true,
    evaluationFrequency: "PT1M",
    location: "global",
    scopes: [
      "/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/webtests/component-example",
      "/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/components/webtest-name-example",
    ],
    severity: 4,
    tags: {
      "hiddenLink:/subscriptions/12345678123412341234123456789101/resourcegroups/rgExample/providers/microsoftInsights/components/webtestNameExample":
        "Resource",
      "hiddenLink:/subscriptions/12345678123412341234123456789101/resourcegroups/rgExample/providers/microsoftInsights/webtests/componentExample":
        "Resource",
    },
    windowSize: "PT15M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricAlerts.createOrUpdate(resourceGroupName, ruleName, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an metric alert definition.
 *
 * @summary Create or update an metric alert definition.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-03-01/examples/createOrUpdateMetricAlertMultipleResource.json
 */
async function createOrUpdateAnAlertRuleForMultipleResource() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "gigtest";
  const ruleName = "MetricAlertOnMultipleResources";
  const parameters = {
    description: "This is the description of the rule1",
    actions: [
      {
        actionGroupId:
          "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2",
        webHookProperties: { key11: "value11", key12: "value12" },
      },
    ],
    autoMitigate: true,
    criteria: {
      allOf: [
        {
          name: "High_CPU_80",
          criterionType: "StaticThresholdCriterion",
          dimensions: [],
          metricName: "Percentage CPU",
          metricNamespace: "microsoft.compute/virtualmachines",
          operator: "GreaterThan",
          threshold: 80.5,
          timeAggregation: "Average",
        },
      ],
      odataType: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    },
    enabled: true,
    evaluationFrequency: "PT1M",
    location: "global",
    scopes: [
      "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme1",
      "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme2",
    ],
    severity: 3,
    tags: {},
    targetResourceRegion: "southcentralus",
    targetResourceType: "Microsoft.Compute/virtualMachines",
    windowSize: "PT15M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricAlerts.createOrUpdate(resourceGroupName, ruleName, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an metric alert definition.
 *
 * @summary Create or update an metric alert definition.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-03-01/examples/createOrUpdateMetricAlertSingleResource.json
 */
async function createOrUpdateAnAlertRuleForSingleResource() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "gigtest";
  const ruleName = "chiricutin";
  const parameters = {
    description: "This is the description of the rule1",
    actions: [
      {
        actionGroupId:
          "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2",
        webHookProperties: { key11: "value11", key12: "value12" },
      },
    ],
    autoMitigate: true,
    criteria: {
      allOf: [
        {
          name: "High_CPU_80",
          criterionType: "StaticThresholdCriterion",
          dimensions: [],
          metricName: "\\Processor(_Total)\\% Processor Time",
          operator: "GreaterThan",
          threshold: 80.5,
          timeAggregation: "Average",
        },
      ],
      odataType: "Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria",
    },
    enabled: true,
    evaluationFrequency: "Pt1m",
    location: "global",
    scopes: [
      "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme",
    ],
    severity: 3,
    tags: {},
    windowSize: "Pt15m",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricAlerts.createOrUpdate(resourceGroupName, ruleName, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an metric alert definition.
 *
 * @summary Create or update an metric alert definition.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-03-01/examples/createOrUpdateMetricAlertResourceGroup.json
 */
async function createOrUpdateAnAlertRuleOnResourceGroupS() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "gigtest1";
  const ruleName = "MetricAlertAtResourceGroupLevel";
  const parameters = {
    description: "This is the description of the rule1",
    actions: [
      {
        actionGroupId:
          "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2",
        webHookProperties: { key11: "value11", key12: "value12" },
      },
    ],
    autoMitigate: true,
    criteria: {
      allOf: [
        {
          name: "High_CPU_80",
          criterionType: "StaticThresholdCriterion",
          dimensions: [],
          metricName: "Percentage CPU",
          metricNamespace: "microsoft.compute/virtualmachines",
          operator: "GreaterThan",
          threshold: 80.5,
          timeAggregation: "Average",
        },
      ],
      odataType: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    },
    enabled: true,
    evaluationFrequency: "PT1M",
    location: "global",
    scopes: [
      "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest1",
      "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest2",
    ],
    severity: 3,
    tags: {},
    targetResourceRegion: "southcentralus",
    targetResourceType: "Microsoft.Compute/virtualMachines",
    windowSize: "PT15M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricAlerts.createOrUpdate(resourceGroupName, ruleName, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an metric alert definition.
 *
 * @summary Create or update an metric alert definition.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-03-01/examples/createOrUpdateMetricAlertSubscription.json
 */
async function createOrUpdateAnAlertRuleOnSubscription() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "gigtest";
  const ruleName = "MetricAlertAtSubscriptionLevel";
  const parameters = {
    description: "This is the description of the rule1",
    actions: [
      {
        actionGroupId:
          "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2",
        webHookProperties: { key11: "value11", key12: "value12" },
      },
    ],
    autoMitigate: true,
    criteria: {
      allOf: [
        {
          name: "High_CPU_80",
          criterionType: "StaticThresholdCriterion",
          dimensions: [],
          metricName: "Percentage CPU",
          metricNamespace: "microsoft.compute/virtualmachines",
          operator: "GreaterThan",
          threshold: 80.5,
          timeAggregation: "Average",
        },
      ],
      odataType: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    },
    enabled: true,
    evaluationFrequency: "PT1M",
    location: "global",
    scopes: ["/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7"],
    severity: 3,
    tags: {},
    targetResourceRegion: "southcentralus",
    targetResourceType: "Microsoft.Compute/virtualMachines",
    windowSize: "PT15M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricAlerts.createOrUpdate(resourceGroupName, ruleName, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an metric alert definition.
 *
 * @summary Create or update an metric alert definition.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-03-01/examples/createOrUpdateMetricAlertWithDimensions.json
 */
async function createOrUpdateAnAlertRulesWithDimensions() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "gigtest";
  const ruleName = "MetricAlertOnMultipleDimensions";
  const parameters = {
    description: "This is the description of the rule1",
    actions: [
      {
        actionGroupId:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2",
        webHookProperties: { key11: "value11", key12: "value12" },
      },
    ],
    autoMitigate: true,
    criteria: {
      allOf: [
        {
          name: "Metric1",
          criterionType: "StaticThresholdCriterion",
          dimensions: [
            { name: "ActivityName", operator: "Include", values: ["*"] },
            { name: "StatusCode", operator: "Include", values: ["200"] },
          ],
          metricName: "Availability",
          metricNamespace: "Microsoft.KeyVault/vaults",
          operator: "GreaterThan",
          threshold: 55,
          timeAggregation: "Average",
        },
      ],
      odataType: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    },
    enabled: true,
    evaluationFrequency: "PT1H",
    location: "global",
    scopes: [
      "/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/Microsoft.KeyVault/vaults/keyVaultResource",
    ],
    severity: 3,
    tags: {},
    windowSize: "P1D",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricAlerts.createOrUpdate(resourceGroupName, ruleName, parameters);
  console.log(result);
}

async function main() {
  createOrUpdateADynamicAlertRuleForMultipleResources();
  createOrUpdateADynamicAlertRuleForSingleResource();
  createOrUpdateAWebTestAlertRule();
  createOrUpdateAnAlertRuleForMultipleResource();
  createOrUpdateAnAlertRuleForSingleResource();
  createOrUpdateAnAlertRuleOnResourceGroupS();
  createOrUpdateAnAlertRuleOnSubscription();
  createOrUpdateAnAlertRulesWithDimensions();
}

main().catch(console.error);
