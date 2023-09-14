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
  ApplicationDefinition,
  ApplicationClient
} from "@azure/arm-managedapplications";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a new managed application definition.
 *
 * @summary Creates a new managed application definition.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Solutions/stable/2018-06-01/examples/createOrUpdateApplicationDefinition.json
 */
async function createOrUpdateManagedApplicationDefinition() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg";
  const applicationDefinitionName = "myManagedApplicationDef";
  const parameters: ApplicationDefinition = {
    description: "myManagedApplicationDef description",
    authorizations: [
      { principalId: "validprincipalguid", roleDefinitionId: "validroleguid" }
    ],
    displayName: "myManagedApplicationDef",
    location: "East US 2",
    lockLevel: "None",
    packageFileUri: "https://path/to/packagezipfile"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationClient(credential, subscriptionId);
  const result = await client.applicationDefinitions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    applicationDefinitionName,
    parameters
  );
  console.log(result);
}

createOrUpdateManagedApplicationDefinition().catch(console.error);
