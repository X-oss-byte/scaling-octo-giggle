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
 * This sample demonstrates how to Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.
 *
 * @summary Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachineScaleSets_Redeploy_MaximumSet_Gen.json
 */
import {
  VirtualMachineScaleSetVMInstanceIDs,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function virtualMachineScaleSetsRedeployMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const vmInstanceIDs: VirtualMachineScaleSetVMInstanceIDs = {
    instanceIds: ["aaaaaaaaaaaaaaaaa"]
  };
  const options = { vmInstanceIDs: vmInstanceIDs };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginRedeployAndWait(
    resourceGroupName,
    vmScaleSetName,
    options
  );
  console.log(result);
}

virtualMachineScaleSetsRedeployMaximumSetGen().catch(console.error);
