/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureBotService } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get per subscription settings needed to host bot in compute resource such as Azure App Service
 *
 * @summary Get per subscription settings needed to host bot in compute resource such as Azure App Service
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/stable/2022-09-15/examples/GetHostSettings.json
 */
async function getBotHostSettings() {
  const subscriptionId =
    process.env["BOTSERVICE_SUBSCRIPTION_ID"] || "subscription-id";
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.hostSettings.get();
  console.log(result);
}

async function main() {
  getBotHostSettings();
}

main().catch(console.error);
