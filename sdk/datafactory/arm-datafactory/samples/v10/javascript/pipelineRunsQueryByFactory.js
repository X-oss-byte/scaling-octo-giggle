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
 * This sample demonstrates how to Query pipeline runs in the factory based on input filter conditions.
 *
 * @summary Query pipeline runs in the factory based on input filter conditions.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/PipelineRuns_QueryByFactory.json
 */
const { DataFactoryManagementClient } = require("@azure/arm-datafactory");
const { DefaultAzureCredential } = require("@azure/identity");

async function pipelineRunsQueryByFactory() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const filterParameters = {
    filters: [
      {
        operand: "PipelineName",
        operator: "Equals",
        values: ["examplePipeline"],
      },
    ],
    lastUpdatedAfter: new Date("2018-06-16T00:36:44.3345758Z"),
    lastUpdatedBefore: new Date("2018-06-16T00:49:48.3686473Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.pipelineRuns.queryByFactory(
    resourceGroupName,
    factoryName,
    filterParameters
  );
  console.log(result);
}

pipelineRunsQueryByFactory().catch(console.error);
