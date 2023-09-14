/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a ElasticSan.
 *
 * @summary Get a ElasticSan.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/ElasticSans_Get_MaximumSet_Gen.json
 */
async function elasticSansGetMaximumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.elasticSans.get(resourceGroupName, elasticSanName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a ElasticSan.
 *
 * @summary Get a ElasticSan.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/ElasticSans_Get_MinimumSet_Gen.json
 */
async function elasticSansGetMinimumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.elasticSans.get(resourceGroupName, elasticSanName);
  console.log(result);
}

async function main() {
  elasticSansGetMaximumSetGen();
  elasticSansGetMinimumSetGen();
}

main().catch(console.error);
