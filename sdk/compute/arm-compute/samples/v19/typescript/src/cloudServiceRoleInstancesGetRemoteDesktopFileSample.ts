/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a remote desktop file for a role instance in a cloud service.
 *
 * @summary Gets a remote desktop file for a role instance in a cloud service.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/CloudserviceRP/stable/2022-04-04/examples/CloudServiceRoleInstance_Get_RemoteDesktopFile.json
 */
async function getCloudServiceRole() {
  const subscriptionId = "{subscription-id}";
  const roleInstanceName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const resourceGroupName = "rgcloudService";
  const cloudServiceName = "aaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServiceRoleInstances.getRemoteDesktopFile(
    roleInstanceName,
    resourceGroupName,
    cloudServiceName
  );
  console.log(result);
}

getCloudServiceRole().catch(console.error);