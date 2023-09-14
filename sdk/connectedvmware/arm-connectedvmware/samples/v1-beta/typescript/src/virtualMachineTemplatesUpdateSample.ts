/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ResourcePatch,
  VirtualMachineTemplatesUpdateOptionalParams,
  AzureArcVMwareManagementServiceAPI
} from "@azure/arm-connectedvmware";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to API to update certain properties of the virtual machine template resource.
 *
 * @summary API to update certain properties of the virtual machine template resource.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/UpdateVirtualMachineTemplate.json
 */
async function updateVirtualMachineTemplate() {
  const subscriptionId =
    process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "testrg";
  const virtualMachineTemplateName = "WebFrontEndTemplate";
  const body: ResourcePatch = { tags: { tag1: "value1", tag2: "value2" } };
  const options: VirtualMachineTemplatesUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.virtualMachineTemplates.update(
    resourceGroupName,
    virtualMachineTemplateName,
    options
  );
  console.log(result);
}

async function main() {
  updateVirtualMachineTemplate();
}

main().catch(console.error);
