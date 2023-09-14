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
 * This sample demonstrates how to Enables you to query for the resource/meter metadata and related prices used in a given subscription by Offer ID, Currency, Locale and Region. The metadata associated with the billing meters, including but not limited to service names, types, resources, units of measure, and regions, is subject to change at any time and without notice. If you intend to use this billing data in an automated fashion, please use the billing meter GUID to uniquely identify each billable item. If the billing meter GUID is scheduled to change due to a new billing model, you will be notified in advance of the change.
 *
 * @summary Enables you to query for the resource/meter metadata and related prices used in a given subscription by Offer ID, Currency, Locale and Region. The metadata associated with the billing meters, including but not limited to service names, types, resources, units of measure, and regions, is subject to change at any time and without notice. If you intend to use this billing data in an automated fashion, please use the billing meter GUID to uniquely identify each billable item. If the billing meter GUID is scheduled to change due to a new billing model, you will be notified in advance of the change.
 * x-ms-original-file: specification/commerce/resource-manager/Microsoft.Commerce/preview/2015-06-01-preview/examples/GetRateCard.json
 */
import { UsageManagementClient } from "@azure/arm-commerce";
import { DefaultAzureCredential } from "@azure/identity";

async function getRateCard() {
  const subscriptionId = "6d61cc05-8f8f-4916-b1b9-f1d9c25aae27";
  const filter =
    "OfferDurableId eq 'MS-AZR-0003P' and Currency eq 'USD' and Locale eq 'en-US' and RegionInfo eq 'US'";
  const credential = new DefaultAzureCredential();
  const client = new UsageManagementClient(credential, subscriptionId);
  const result = await client.rateCard.get(filter);
  console.log(result);
}

getRateCard().catch(console.error);
