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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { NewsSearchClientContext } from "./newsSearchClientContext";

class NewsSearchClient extends NewsSearchClientContext {
  // Operation groups
  news: operations.NewsOperations;

  /**
   * Initializes a new instance of the NewsSearchClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.NewsSearchClientOptions) {
    super(credentials, options);
    this.news = new operations.NewsOperations(this);
  }
}

// Operation Specifications

export {
  NewsSearchClient,
  NewsSearchClientContext,
  Models as NewsSearchModels,
  Mappers as NewsSearchMappers
};
export * from "./operations";
