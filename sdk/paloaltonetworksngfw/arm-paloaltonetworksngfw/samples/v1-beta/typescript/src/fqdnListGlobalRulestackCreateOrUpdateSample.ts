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
  FqdnListGlobalRulestackResource,
  PaloAltoNetworksCloudngfw
} from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a FqdnListGlobalRulestackResource
 *
 * @summary Create a FqdnListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/FqdnListGlobalRulestack_CreateOrUpdate_MaximumSet_Gen.json
 */
async function fqdnListGlobalRulestackCreateOrUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const name = "armid1";
  const resource: FqdnListGlobalRulestackResource = {
    description: "string",
    auditComment: "string",
    etag: "aaaaaaaaaaaaaaaaaa",
    fqdnList: ["string1", "string2"],
    provisioningState: "Accepted"
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.fqdnListGlobalRulestack.beginCreateOrUpdateAndWait(
    globalRulestackName,
    name,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a FqdnListGlobalRulestackResource
 *
 * @summary Create a FqdnListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/FqdnListGlobalRulestack_CreateOrUpdate_MinimumSet_Gen.json
 */
async function fqdnListGlobalRulestackCreateOrUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const name = "armid1";
  const resource: FqdnListGlobalRulestackResource = {
    fqdnList: ["string1", "string2"]
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.fqdnListGlobalRulestack.beginCreateOrUpdateAndWait(
    globalRulestackName,
    name,
    resource
  );
  console.log(result);
}

async function main() {
  fqdnListGlobalRulestackCreateOrUpdateMaximumSetGen();
  fqdnListGlobalRulestackCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
