/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/alterationsMappers";
import * as Parameters from "../models/parameters";
import { QnAMakerClientContext } from "../qnAMakerClientContext";

/** Class representing a Alterations. */
export class Alterations {
  private readonly client: QnAMakerClientContext;

  /**
   * Create a Alterations.
   * @param {QnAMakerClientContext} client Reference to the service client.
   */
  constructor(client: QnAMakerClientContext) {
    this.client = client;
  }

  /**
   * @summary Download alterations from runtime.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlterationsGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.AlterationsGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.WordAlterationsDTO>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WordAlterationsDTO>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WordAlterationsDTO>, callback?: msRest.ServiceCallback<Models.WordAlterationsDTO>): Promise<Models.AlterationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AlterationsGetResponse>;
  }

  /**
   * @summary Replace alterations data.
   * @param wordAlterations New alterations data.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  replace(wordAlterations: Models.WordAlterationsDTO, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param wordAlterations New alterations data.
   * @param callback The callback
   */
  replace(wordAlterations: Models.WordAlterationsDTO, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param wordAlterations New alterations data.
   * @param options The optional parameters
   * @param callback The callback
   */
  replace(wordAlterations: Models.WordAlterationsDTO, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  replace(wordAlterations: Models.WordAlterationsDTO, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        wordAlterations,
        options
      },
      replaceOperationSpec,
      callback);
  }

  /**
   * @summary Download alterations per Knowledgebase (QnAMaker Managed).
   * @param kbId Knowledgebase id.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlterationsGetAlterationsForKbResponse>
   */
  getAlterationsForKb(kbId: string, options?: msRest.RequestOptionsBase): Promise<Models.AlterationsGetAlterationsForKbResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param callback The callback
   */
  getAlterationsForKb(kbId: string, callback: msRest.ServiceCallback<Models.WordAlterationsDTO>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAlterationsForKb(kbId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WordAlterationsDTO>): void;
  getAlterationsForKb(kbId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WordAlterationsDTO>, callback?: msRest.ServiceCallback<Models.WordAlterationsDTO>): Promise<Models.AlterationsGetAlterationsForKbResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        options
      },
      getAlterationsForKbOperationSpec,
      callback) as Promise<Models.AlterationsGetAlterationsForKbResponse>;
  }

  /**
   * @summary Replace alterations data per Knowledgebase (QnAMaker Managed).
   * @param kbId Knowledgebase id.
   * @param wordAlterations New alterations data.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  replaceAlterationsForKb(kbId: string, wordAlterations: Models.WordAlterationsDTO, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param wordAlterations New alterations data.
   * @param callback The callback
   */
  replaceAlterationsForKb(kbId: string, wordAlterations: Models.WordAlterationsDTO, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param wordAlterations New alterations data.
   * @param options The optional parameters
   * @param callback The callback
   */
  replaceAlterationsForKb(kbId: string, wordAlterations: Models.WordAlterationsDTO, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  replaceAlterationsForKb(kbId: string, wordAlterations: Models.WordAlterationsDTO, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        wordAlterations,
        options
      },
      replaceAlterationsForKbOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "alterations",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WordAlterationsDTO
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const replaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "alterations",
  urlParameters: [
    Parameters.endpoint
  ],
  requestBody: {
    parameterPath: "wordAlterations",
    mapper: {
      ...Mappers.WordAlterationsDTO,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getAlterationsForKbOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "alterations/{kbId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WordAlterationsDTO
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const replaceAlterationsForKbOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "alterations/{kbId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  requestBody: {
    parameterPath: "wordAlterations",
    mapper: {
      ...Mappers.WordAlterationsDTO,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
