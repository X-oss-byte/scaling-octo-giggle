/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SiteRecoveryManagementClient } from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all ASR network mappings in the vault.
 *
 * @summary Lists all ASR network mappings in the vault.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2022-10-01/examples/ReplicationNetworkMappings_List.json
 */
async function getsAllTheNetworkMappingsUnderAVault() {
  const subscriptionId = "9112a37f-0f3e-46ec-9c00-060c6edca071";
  const resourceName = "srce2avaultbvtaC27";
  const resourceGroupName = "srcBvte2a14C27";
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.replicationNetworkMappings.list(
    resourceName,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getsAllTheNetworkMappingsUnderAVault().catch(console.error);
