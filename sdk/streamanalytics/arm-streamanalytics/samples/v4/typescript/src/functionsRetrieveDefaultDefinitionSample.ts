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
  AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters,
  FunctionsRetrieveDefaultDefinitionOptionalParams,
  StreamAnalyticsManagementClient
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves the default definition of a function based on the parameters specified.
 *
 * @summary Retrieves the default definition of a function based on the parameters specified.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Function_RetrieveDefaultDefinition_AzureML.json
 */
async function retrieveTheDefaultDefinitionForAnAzureMlFunction() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg7";
  const jobName = "sj9093";
  const functionName = "function588";
  const functionRetrieveDefaultDefinitionParameters: AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters = {
    bindingType: "Microsoft.MachineLearning/WebService",
    executeEndpoint: "someAzureMLExecuteEndpointUrl",
    udfType: "Scalar"
  };
  const options: FunctionsRetrieveDefaultDefinitionOptionalParams = {
    functionRetrieveDefaultDefinitionParameters
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.functions.retrieveDefaultDefinition(
    resourceGroupName,
    jobName,
    functionName,
    options
  );
  console.log(result);
}

retrieveTheDefaultDefinitionForAnAzureMlFunction().catch(console.error);
