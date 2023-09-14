/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PolicyCertificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClientContext } from "../generatedClientContext";
import {
  PolicyCertificatesGetOptionalParams,
  PolicyCertificatesGetResponse,
  PolicyCertificatesAddOptionalParams,
  PolicyCertificatesAddResponse,
  PolicyCertificatesRemoveOptionalParams,
  PolicyCertificatesRemoveResponse
} from "../models";

/** Class representing a PolicyCertificates. */
export class PolicyCertificatesImpl implements PolicyCertificates {
  private readonly client: GeneratedClientContext;

  /**
   * Initialize a new instance of the class PolicyCertificates class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the set of certificates used to express policy for the current tenant.
   * @param options The options parameters.
   */
  get(
    options?: PolicyCertificatesGetOptionalParams
  ): Promise<PolicyCertificatesGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }

  /**
   * Adds a new attestation policy certificate to the set of policy management certificates.
   * @param policyCertificateToAdd An RFC7519 JSON Web Token whose body is an RFC7517 JSON Web Key
   *                               object. The RFC7519 JWT must be signed with one of the existing signing certificates
   * @param options The options parameters.
   */
  add(
    policyCertificateToAdd: string,
    options?: PolicyCertificatesAddOptionalParams
  ): Promise<PolicyCertificatesAddResponse> {
    return this.client.sendOperationRequest(
      { policyCertificateToAdd, options },
      addOperationSpec
    );
  }

  /**
   * Removes the specified policy management certificate. Note that the final policy management
   * certificate cannot be removed.
   * @param policyCertificateToRemove An RFC7519 JSON Web Token whose body is an
   *                                  AttestationCertificateManagementBody object. The RFC7519 JWT must be signed with one of the existing
   *                                  signing certificates
   * @param options The options parameters.
   */
  remove(
    policyCertificateToRemove: string,
    options?: PolicyCertificatesRemoveOptionalParams
  ): Promise<PolicyCertificatesRemoveResponse> {
    return this.client.sendOperationRequest(
      { policyCertificateToRemove, options },
      removeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyCertificatesResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.instanceUrl],
  headerParameters: [Parameters.accept],
  serializer
};
const addOperationSpec: coreClient.OperationSpec = {
  path: "/certificates:add",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyCertificatesModifyResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.policyCertificateToAdd,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.instanceUrl],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const removeOperationSpec: coreClient.OperationSpec = {
  path: "/certificates:remove",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyCertificatesModifyResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.policyCertificateToRemove,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.instanceUrl],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
