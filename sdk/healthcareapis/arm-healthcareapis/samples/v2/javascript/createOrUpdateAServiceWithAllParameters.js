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
 * This sample demonstrates how to Create or update the metadata of a service instance.
 *
 * @summary Create or update the metadata of a service instance.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceCreate.json
 */
const { HealthcareApisManagementClient } = require("@azure/arm-healthcareapis");
const { DefaultAzureCredential } = require("@azure/identity");

async function createOrUpdateAServiceWithAllParameters() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const resourceName = "service1";
  const serviceDescription = {
    identity: { type: "SystemAssigned" },
    kind: "fhir-R4",
    location: "westus2",
    properties: {
      accessPolicies: [
        { objectId: "c487e7d1-3210-41a3-8ccc-e9372b78da47" },
        { objectId: "5b307da8-43d4-492b-8b66-b0294ade872f" },
      ],
      authenticationConfiguration: {
        audience: "https://azurehealthcareapis.com",
        authority: "https://login.microsoftonline.com/abfde7b2-df0f-47e6-aabf-2462b07508dc",
        smartProxyEnabled: true,
      },
      corsConfiguration: {
        allowCredentials: false,
        headers: ["*"],
        maxAge: 1440,
        methods: ["DELETE", "GET", "OPTIONS", "PATCH", "POST", "PUT"],
        origins: ["*"],
      },
      cosmosDbConfiguration: {
        keyVaultKeyUri: "https://my-vault.vault.azure.net/keys/my-key",
        offerThroughput: 1000,
      },
      exportConfiguration: { storageAccountName: "existingStorageAccount" },
      privateEndpointConnections: [],
      publicNetworkAccess: "Disabled",
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    serviceDescription
  );
  console.log(result);
}

createOrUpdateAServiceWithAllParameters().catch(console.error);
