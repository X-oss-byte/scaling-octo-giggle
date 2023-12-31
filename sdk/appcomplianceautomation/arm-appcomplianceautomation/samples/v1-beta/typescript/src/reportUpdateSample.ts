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
  ReportResourcePatch,
  AppComplianceAutomationToolForMicrosoft365
} from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update an exiting AppComplianceAutomation report.
 *
 * @summary Update an exiting AppComplianceAutomation report.
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/preview/2022-11-16-preview/examples/Report_Update.json
 */
async function reportUpdate() {
  const reportName = "testReportName";
  const parameters: ReportResourcePatch = {
    properties: {
      offerGuid: "0000",
      resources: [
        {
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Network/privateEndpoints/myPrivateEndpoint",
          tags: { key1: "value1" }
        }
      ],
      timeZone: "GMT Standard Time",
      triggerTime: new Date("2022-03-04T05:11:56.197Z")
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const result = await client.report.beginUpdateAndWait(reportName, parameters);
  console.log(result);
}

reportUpdate().catch(console.error);
