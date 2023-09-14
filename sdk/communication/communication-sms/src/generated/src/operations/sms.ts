/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SmsApiClient } from "../smsApiClient";
import { SendMessageRequest, SmsSendOperationResponse } from "../models";

/**
 * Class representing a Sms.
 */
export class Sms {
  private readonly client: SmsApiClient;

  /**
   * Initialize a new instance of the class Sms class.
   * @param client Reference to the service client
   */
  constructor(client: SmsApiClient) {
    this.client = client;
  }

  /**
   * Sends a SMS message from a phone number that belongs to the authenticated account.
   * @param sendMessageRequest Represents the body of the send message request.
   * @param options The options parameters.
   */
  send(
    sendMessageRequest: SendMessageRequest,
    options?: coreHttp.OperationOptions
  ): Promise<SmsSendOperationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { sendMessageRequest, options: operationOptions },
      sendOperationSpec
    ) as Promise<SmsSendOperationResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const sendOperationSpec: coreHttp.OperationSpec = {
  path: "/sms",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.SmsSendResponse
    }
  },
  requestBody: Parameters.sendMessageRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
