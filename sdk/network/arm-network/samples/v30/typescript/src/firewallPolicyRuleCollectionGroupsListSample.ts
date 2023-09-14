/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
 *
 * @summary Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/FirewallPolicyRuleCollectionGroupWithWebCategoriesList.json
 */
async function listAllFirewallPolicyRuleCollectionGroupWithWebCategories() {
  const subscriptionId = "e747cc13-97d4-4a79-b463-42d7f4e558f2";
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firewallPolicyRuleCollectionGroups.list(
    resourceGroupName,
    firewallPolicyName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllFirewallPolicyRuleCollectionGroupWithWebCategories().catch(
  console.error
);

/**
 * This sample demonstrates how to Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
 *
 * @summary Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/FirewallPolicyRuleCollectionGroupList.json
 */
async function listAllFirewallPolicyRuleCollectionGroupsForAGivenFirewallPolicy() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firewallPolicyRuleCollectionGroups.list(
    resourceGroupName,
    firewallPolicyName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllFirewallPolicyRuleCollectionGroupsForAGivenFirewallPolicy().catch(
  console.error
);

/**
 * This sample demonstrates how to Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
 *
 * @summary Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/FirewallPolicyRuleCollectionGroupWithIpGroupsList.json
 */
async function listAllFirewallPolicyRuleCollectionGroupsWithIPGroupsForAGivenFirewallPolicy() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firewallPolicyRuleCollectionGroups.list(
    resourceGroupName,
    firewallPolicyName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllFirewallPolicyRuleCollectionGroupsWithIPGroupsForAGivenFirewallPolicy().catch(
  console.error
);
