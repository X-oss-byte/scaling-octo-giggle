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
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesSummarizeQuery.json
 */
import { QueryRequest, ResourceGraphClient } from "@azure/arm-resourcegraph";
import { DefaultAzureCredential } from "@azure/identity";

async function summarizeResourcesByLocation() {
  const query: QueryRequest = {
    query:
      "Resources | project id, name, type, location | summarize by location",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

summarizeResourcesByLocation().catch(console.error);