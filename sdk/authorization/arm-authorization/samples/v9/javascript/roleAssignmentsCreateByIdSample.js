/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AuthorizationManagementClient } = require("@azure/arm-authorization");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a role assignment by ID.
 *
 * @summary Create or update a role assignment by ID.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/stable/2022-04-01/examples/RoleAssignments_CreateById.json
 */
async function createOrUpdateRoleAssignmentById() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const roleAssignmentId =
    "subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleAssignments/b0f43c54-e787-4862-89b1-a653fa9cf747";
  const parameters = {
    principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",
    principalType: "User",
    roleDefinitionId:
      "/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d",
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const result = await client.roleAssignments.createById(roleAssignmentId, parameters);
  console.log(result);
}

async function main() {
  createOrUpdateRoleAssignmentById();
}

main().catch(console.error);
