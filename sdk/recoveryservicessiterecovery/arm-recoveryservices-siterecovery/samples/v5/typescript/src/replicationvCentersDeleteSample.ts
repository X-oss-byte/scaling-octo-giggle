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
 * This sample demonstrates how to The operation to remove(unregister) a registered vCenter server from the vault.
 *
 * @summary The operation to remove(unregister) a registered vCenter server from the vault.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2022-10-01/examples/ReplicationvCenters_Delete.json
 */
async function removeVCenterOperation() {
  const subscriptionId = "7c943c1b-5122-4097-90c8-861411bdd574";
  const resourceName = "MadhaviVault";
  const resourceGroupName = "MadhaviVRG";
  const fabricName = "MadhaviFabric";
  const vcenterName = "esx-78";
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationvCenters.beginDeleteAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    vcenterName
  );
  console.log(result);
}

removeVCenterOperation().catch(console.error);
