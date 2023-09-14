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
 * This sample demonstrates how to Recommendation action session operation status.
 *
 * @summary Recommendation action session operation status.
 * x-ms-original-file: specification/mariadb/resource-manager/Microsoft.DBforMariaDB/stable/2018-06-01/examples/RecommendedActionSessionOperationStatus.json
 */
import { MariaDBManagementClient } from "@azure/arm-mariadb";
import { DefaultAzureCredential } from "@azure/identity";

async function recommendedActionSessionOperationStatus() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const locationName = "WestUS";
  const operationId = "aaaabbbb-cccc-dddd-0000-111122223333";
  const credential = new DefaultAzureCredential();
  const client = new MariaDBManagementClient(credential, subscriptionId);
  const result = await client.locationBasedRecommendedActionSessionsOperationStatus.get(
    locationName,
    operationId
  );
  console.log(result);
}

recommendedActionSessionOperationStatus().catch(console.error);
