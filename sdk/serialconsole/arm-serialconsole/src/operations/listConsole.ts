/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/listConsoleMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSerialConsoleClientContext } from "../microsoftSerialConsoleClientContext";

/** Class representing a ListConsole. */
export class ListConsole {
  private readonly client: MicrosoftSerialConsoleClientContext;

  /**
   * Create a ListConsole.
   * @param {MicrosoftSerialConsoleClientContext} client Reference to the service client.
   */
  constructor(client: MicrosoftSerialConsoleClientContext) {
    this.client = client;
  }

  /**
   * Gets if Serial Console is disabled for a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListConsoleDisabledResponse>
   */
  disabled(options?: msRest.RequestOptionsBase): Promise<Models.ListConsoleDisabledResponse>;
  /**
   * @param callback The callback
   */
  disabled(callback: msRest.ServiceCallback<Models.GetDisabledResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  disabled(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GetDisabledResult>): void;
  disabled(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GetDisabledResult>, callback?: msRest.ServiceCallback<Models.GetDisabledResult>): Promise<Models.ListConsoleDisabledResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      disabledOperationSpec,
      callback) as Promise<Models.ListConsoleDisabledResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const disabledOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.defaultParameter
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GetDisabledResult
    },
    default: {
      bodyMapper: Mappers.DeploymentValidateResult
    }
  },
  serializer
};
