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
 * This sample demonstrates how to Validate operation for specified backed up item in the form of an asynchronous operation. Returns tracking headers which can be tracked using GetValidateOperationResult API.
 *
 * @summary Validate operation for specified backed up item in the form of an asynchronous operation. Returns tracking headers which can be tracked using GetValidateOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/AzureIaasVm/TriggerValidateOperation_RestoreDisk.json
 */
import {
  ValidateIaasVMRestoreOperationRequest,
  RecoveryServicesBackupClient
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

async function triggerValidateOperation() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "testVault";
  const resourceGroupName = "testRG";
  const parameters: ValidateIaasVMRestoreOperationRequest = {
    objectType: "ValidateIaasVMRestoreOperationRequest",
    restoreRequest: {
      createNewCloudService: true,
      encryptionDetails: { encryptionEnabled: false },
      identityInfo: {
        isSystemAssignedIdentity: false,
        managedIdentityResourceId:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/asmaskarRG1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/asmaskartestmsi"
      },
      objectType: "IaasVMRestoreRequest",
      originalStorageAccountOption: false,
      recoveryPointId: "348916168024334",
      recoveryType: "RestoreDisks",
      region: "southeastasia",
      sourceResourceId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/netsdktestrg/providers/Microsoft.Compute/virtualMachines/netvmtestv2vm1",
      storageAccountId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testingRg/providers/Microsoft.Storage/storageAccounts/testAccount"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.validateOperation.beginTriggerAndWait(
    vaultName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

triggerValidateOperation().catch(console.error);
