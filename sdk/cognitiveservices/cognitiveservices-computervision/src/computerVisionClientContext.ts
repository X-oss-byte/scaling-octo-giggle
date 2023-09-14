/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

const packageName = "@azure/cognitiveservices-computervision";
const packageVersion = "8.1.0";

export class ComputerVisionClientContext extends msRest.ServiceClient {
  endpoint: string;
  credentials: msRest.ServiceClientCredentials;

  /**
   * Initializes a new instance of the ComputerVisionClientContext class.
   * @param endpoint Supported Cognitive Services endpoints.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, endpoint: string, options?: msRest.ServiceClientOptions) {
    if (endpoint == undefined) {
      throw new Error("'endpoint' cannot be null.");
    }
    if (credentials == undefined) {
      throw new Error("'credentials' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.baseUri = "{Endpoint}/vision/v3.2";
    this.requestContentType = "application/json; charset=utf-8";
    this.endpoint = endpoint;
    this.credentials = credentials;
  }
}
