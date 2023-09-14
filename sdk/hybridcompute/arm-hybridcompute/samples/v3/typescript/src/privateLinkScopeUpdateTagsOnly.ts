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
 * This sample demonstrates how to Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
 *
 * @summary Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/stable/2021-05-20/examples/PrivateLinkScopesUpdateTagsOnly.json
 */
import {
  TagsResource,
  HybridComputeManagementClient
} from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";

async function privateLinkScopeUpdateTagsOnly() {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const scopeName = "my-privatelinkscope";
  const privateLinkScopeTags: TagsResource = {
    tags: { tag1: "Value1", tag2: "Value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.privateLinkScopes.updateTags(
    resourceGroupName,
    scopeName,
    privateLinkScopeTags
  );
  console.log(result);
}

privateLinkScopeUpdateTagsOnly().catch(console.error);
