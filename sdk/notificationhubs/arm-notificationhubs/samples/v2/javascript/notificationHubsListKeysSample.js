/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NotificationHubsManagementClient } = require("@azure/arm-notificationhubs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the Primary and Secondary ConnectionStrings to the NotificationHub
 *
 * @summary Gets the Primary and Secondary ConnectionStrings to the NotificationHub
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/stable/2017-04-01/examples/NotificationHubs/NotificationHubAuthorizationRuleListKey.json
 */
async function notificationHubAuthorizationRuleListKey() {
  const subscriptionId = "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName = "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const notificationHubName = "nh-sdk-hub";
  const authorizationRuleName = "sdk-AuthRules-5800";
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(credential, subscriptionId);
  const result = await client.notificationHubs.listKeys(
    resourceGroupName,
    namespaceName,
    notificationHubName,
    authorizationRuleName
  );
  console.log(result);
}

notificationHubAuthorizationRuleListKey().catch(console.error);
