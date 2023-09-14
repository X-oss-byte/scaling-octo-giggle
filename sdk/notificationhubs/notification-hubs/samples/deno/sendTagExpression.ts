// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * This sample demonstrates how the sendNotification() method can be used to send a tag expression
 * notification using APNs.  This sends a JSON message to an APNs given device token and returns
 * a Tracking ID which can be used for troubleshooting with the Azure Notification Hubs team.
 *
 * See https://docs.microsoft.com/azure/notification-hubs/notification-hubs-tags-segment-push-message
 * to learn about Routing and Tag Expressions.
 *
 * @summary Demonstrates how to send tag expression notifications using Azure Notification Hubs
 * @azsdk-weight 100
 */

import * as process from "process";
import {
  createAppleNotification,
  NotificationDetails,
  NotificationOutcomeState,
} from "@azure/notification-hubs/models";
import {
  createClientContext,
  getNotificationOutcomeDetails,
  NotificationHubsClientContext,
  sendNotification,
} from "@azure/notification-hubs/api";
import { isRestError } from "@azure/core-rest-pipeline";

// Load the .env file if it exists
import { config } from "dotenv/mod.ts";

// Define connection string and hub name
const enviromentVariables = config({ safe: true, allowEmptyValues: true });
const connectionString = enviromentVariables.NOTIFICATIONHUBS_CONNECTION_STRING;
const hubName = enviromentVariables.NOTIFICATION_HUB_NAME;

async function main() {
  const context = createClientContext(connectionString, hubName);

  const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
  const tagExpression = "likes_hockey && likes_football";

  const notification = createAppleNotification({
    body: messageBody,
    headers: {
      "apns-priority": "10",
      "apns-push-type": "alert",
    },
  });

  // Can set enableTestSend to true for debugging purposes
  const result = await sendNotification(context, notification, {
    enableTestSend: false,
    tagExpression,
  });

  console.log(`Tag Expression send Tracking ID: ${result.trackingId}`);
  console.log(`Tag Expression Correlation ID: ${result.correlationId}`);

  // Only available in Standard SKU and above
  if (result.notificationId) {
    console.log(
      `Tag Expression send Notification ID: ${result.notificationId}`,
    );

    const results = await getNotificationDetails(
      context,
      result.notificationId,
    );
    if (results) {
      console.log(JSON.stringify(results, null, 2));
    }
  }
}

async function getNotificationDetails(
  context: NotificationHubsClientContext,
  notificationId: string,
): Promise<NotificationDetails | undefined> {
  let state: NotificationOutcomeState = "Enqueued";
  let count = 0;
  let result: NotificationDetails | undefined;
  while ((state === "Enqueued" || state === "Processing") && count++ < 10) {
    try {
      result = await getNotificationOutcomeDetails(context, notificationId);
      state = result.state!;
    } catch (e) {
      // Possible to get 404 for when it doesn't exist yet.
      if (isRestError(e) && e.statusCode === 404) {
        continue;
      } else {
        throw e;
      }
    }

    await delay(1000);
  }

  return result;
}

main().catch((err) => {
  console.log("sendTagExpression Sample: Error occurred: ", err);
  process.exit(1);
});

function delay(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}