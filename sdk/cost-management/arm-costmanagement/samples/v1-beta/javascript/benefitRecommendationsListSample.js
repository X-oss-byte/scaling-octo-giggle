/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CostManagementClient } = require("@azure/arm-costmanagement");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List of recommendations for purchasing savings plan.
 *
 * @summary List of recommendations for purchasing savings plan.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/BenefitRecommendationsByBillingAccount.json
 */
async function benefitRecommendationsBillingAccountList() {
  const filter = "properties/lookBackPeriod eq 'Last7Days' AND properties/term eq 'P1Y'";
  const expand = "properties/usage,properties/allRecommendationDetails";
  const billingScope = "providers/Microsoft.Billing/billingAccounts/123456";
  const options = { filter, expand };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.benefitRecommendations.list(billingScope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  benefitRecommendationsBillingAccountList();
}

main().catch(console.error);
