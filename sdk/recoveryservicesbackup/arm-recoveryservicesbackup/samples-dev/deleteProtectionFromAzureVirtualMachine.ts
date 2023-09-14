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
 * This sample demonstrates how to Used to disable backup of an item within a container. This is an asynchronous operation. To know the status of the
request, call the GetItemOperationResult API.
 *
 * @summary Used to disable backup of an item within a container. This is an asynchronous operation. To know the status of the
request, call the GetItemOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/Common/ProtectedItem_Delete.json
 */
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

async function deleteProtectionFromAzureVirtualMachine() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "PySDKBackupTestRsVault";
  const resourceGroupName = "PythonSDKBackupTestRg";
  const fabricName = "Azure";
  const containerName =
    "iaasvmcontainer;iaasvmcontainerv2;pysdktestrg;pysdktestv2vm1";
  const protectedItemName = "vm;iaasvmcontainerv2;pysdktestrg;pysdktestv2vm1";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectedItems.delete(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    protectedItemName
  );
  console.log(result);
}

deleteProtectionFromAzureVirtualMachine().catch(console.error);
