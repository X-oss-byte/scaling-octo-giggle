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
 * This sample demonstrates how to Triggers Data Move Operation on target vault
 *
 * @summary Triggers Data Move Operation on target vault
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/BackupDataMove/TriggerDataMove_Post.json
 */
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");

async function triggerDataMove() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "target-rsv";
  const resourceGroupName = "targetRG";
  const parameters = {
    correlationId: "MTg2OTcyMzM4NzYyMjc1NDY3Nzs1YmUzYmVmNi04YjJiLTRhOTItOTllYi01NTM0MDllYjk2NjE=",
    dataMoveLevel: "Vault",
    sourceRegion: "USGov Iowa",
    sourceResourceId:
      "/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/sourceRG/providers/Microsoft.RecoveryServices/vaults/source-rsv",
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.beginBMSTriggerDataMoveAndWait(
    vaultName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

triggerDataMove().catch(console.error);
