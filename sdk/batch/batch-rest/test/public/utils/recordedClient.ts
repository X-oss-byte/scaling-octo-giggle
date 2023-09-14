// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Context } from "mocha";
import { Recorder, RecorderStartOptions, env } from "@azure-tools/test-recorder";
import { ClientOptions } from "@azure-rest/core-client";
import { createTestCredential } from "@azure-tools/test-credential";
import BatchServiceClient from "../../../src";
import { fakeTestPasswordPlaceholder1, fakeAzureBatchAccount, fakeAzureBatchEndpoint } from "./fakeTestSecrets";

const recorderEnvSetup: RecorderStartOptions = {
  envSetupForPlayback: {
    AZURE_BATCH_ENDPOINT: fakeAzureBatchEndpoint,
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    AZURE_BATCH_ACCOUNT: fakeAzureBatchAccount,
    AZURE_BATCH_ACCESS_KEY: "api_key"
  },
  sanitizerOptions: {
    bodyKeySanitizers: [
      {
        jsonPath: "$.userAccounts[0].password",
        value: fakeTestPasswordPlaceholder1,
      },
      {
        jsonPath: "$.password",
        value: fakeTestPasswordPlaceholder1
      },

    ],
    generalSanitizers: [{
      regex: true, target: `https://${fakeAzureBatchAccount}(.*)batch.azure.com`, value: fakeAzureBatchEndpoint
    }]
  },
};

/**
 * creates the recorder and reads the environment variables from the `.env` file.
 * Should be called first in the test suite to make sure environment variables are
 * read before they are being used.
 */
export async function createRecorder(context: Context): Promise<Recorder> {
  const recorder = new Recorder(context.currentTest);
  await recorder.start(recorderEnvSetup);
  return recorder;
}

export type AuthMethod = "AAD" | "DummyAPIKey";

export function createBatchClient(
  authMethod: AuthMethod,
  recorder?: Recorder,
  options: ClientOptions = {},
) {

  let credential;
  switch (authMethod) {
    case "AAD": {
      credential = createTestCredential();
      break;
    }
    // case "DummyAPIKey": {
    //   credential = new BatchSharedKeyCredentials("whatever", "whatever");
    //   break;
    // }
    default: {
      throw Error(`Unsupported authentication method: ${authMethod}`);
    }
  }

  return BatchServiceClient(env.AZURE_BATCH_ENDPOINT! || "https://dummy.eastus.batch.azure.com", credential, recorder ? recorder.configureClientOptions({ ...options }) : options)
    ;
} 
