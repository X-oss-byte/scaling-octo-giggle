/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NameIdentifier, WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Resend domain verification ownership email containing steps on how to verify a domain for a given certificate order
 *
 * @summary Resend domain verification ownership email containing steps on how to verify a domain for a given certificate order
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/ResendDomainOwnershipVerificationEmail.json
 */
async function resendDomainOwnershipVerificationEmail() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const certificateOrderName = "SampleCertificateOrderName";
  const nameIdentifier: NameIdentifier = { name: "Domain name" };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceCertificateOrders.resendRequestEmails(
    resourceGroupName,
    certificateOrderName,
    nameIdentifier
  );
  console.log(result);
}

resendDomainOwnershipVerificationEmail().catch(console.error);