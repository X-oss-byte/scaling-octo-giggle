/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the details of the authorization server specified by its identifier.
 *
 * @summary Updates the details of the authorization server specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateAuthorizationServer.json
 */
async function apiManagementUpdateAuthorizationServer() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const authsid = "newauthServer";
  const ifMatch = "*";
  const parameters = {
    clientId: "update",
    clientSecret: "updated",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.authorizationServer.update(
    resourceGroupName,
    serviceName,
    authsid,
    ifMatch,
    parameters
  );
  console.log(result);
}

apiManagementUpdateAuthorizationServer().catch(console.error);