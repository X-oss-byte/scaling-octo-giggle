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
 * This sample demonstrates how to The operation to update the VMSS VM run command.
 *
 * @summary The operation to update the VMSS VM run command.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/runCommands/UpdateVirtualMachineScaleSetVMRunCommands.json
 */
import {
  VirtualMachineRunCommandUpdate,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function updateVirtualMachineScaleSetVMRunCommand() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const runCommandName = "myRunCommand";
  const runCommand: VirtualMachineRunCommandUpdate = {
    source: { script: "Write-Host Script Source Updated!" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMRunCommands.beginUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    runCommandName,
    runCommand
  );
  console.log(result);
}

updateVirtualMachineScaleSetVMRunCommand().catch(console.error);