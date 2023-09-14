/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get the Certificates in a given connected environment.
 *
 * @summary Get the Certificates in a given connected environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironmentsCertificates_ListByConnectedEnvironment.json
 */
async function listCertificatesByConnectedEnvironment() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "testcontainerenv";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.connectedEnvironmentsCertificates.list(
    resourceGroupName,
    connectedEnvironmentName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listCertificatesByConnectedEnvironment().catch(console.error);