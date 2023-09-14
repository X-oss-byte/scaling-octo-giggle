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
import * as Mappers from "../models/recordSetsMappers";
import * as Parameters from "../models/parameters";
import { PrivateDnsManagementClientContext } from "../privateDnsManagementClientContext";

/** Class representing a RecordSets. */
export class RecordSets {
  private readonly client: PrivateDnsManagementClientContext;

  /**
   * Create a RecordSets.
   * @param {PrivateDnsManagementClientContext} client Reference to the service client.
   */
  constructor(client: PrivateDnsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a record set within a Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Record sets of type SOA can be
   * updated but not created (they are created when the Private DNS zone is created). Possible values
   * include: 'A', 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, parameters: Models.RecordSet, options?: Models.RecordSetsCreateOrUpdateOptionalParams): Promise<Models.RecordSetsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Record sets of type SOA can be
   * updated but not created (they are created when the Private DNS zone is created). Possible values
   * include: 'A', 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, parameters: Models.RecordSet, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Record sets of type SOA can be
   * updated but not created (they are created when the Private DNS zone is created). Possible values
   * include: 'A', 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, parameters: Models.RecordSet, options: Models.RecordSetsCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  createOrUpdate(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, parameters: Models.RecordSet, options?: Models.RecordSetsCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.RecordSet>, callback?: msRest.ServiceCallback<Models.RecordSet>): Promise<Models.RecordSetsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateZoneName,
        recordType,
        relativeRecordSetName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.RecordSetsCreateOrUpdateResponse>;
  }

  /**
   * Updates a record set within a Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param parameters Parameters supplied to the Update operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsUpdateResponse>
   */
  update(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, parameters: Models.RecordSet, options?: Models.RecordSetsUpdateOptionalParams): Promise<Models.RecordSetsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param parameters Parameters supplied to the Update operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, parameters: Models.RecordSet, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, parameters: Models.RecordSet, options: Models.RecordSetsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  update(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, parameters: Models.RecordSet, options?: Models.RecordSetsUpdateOptionalParams | msRest.ServiceCallback<Models.RecordSet>, callback?: msRest.ServiceCallback<Models.RecordSet>): Promise<Models.RecordSetsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateZoneName,
        recordType,
        relativeRecordSetName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.RecordSetsUpdateResponse>;
  }

  /**
   * Deletes a record set from a Private DNS zone. This operation cannot be undone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Record sets of type SOA cannot be
   * deleted (they are deleted when the Private DNS zone is deleted). Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, options?: Models.RecordSetsDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Record sets of type SOA cannot be
   * deleted (they are deleted when the Private DNS zone is deleted). Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Record sets of type SOA cannot be
   * deleted (they are deleted when the Private DNS zone is deleted). Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, options: Models.RecordSetsDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, options?: Models.RecordSetsDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateZoneName,
        recordType,
        relativeRecordSetName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a record set.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsGetResponse>
   */
  get(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecordSetsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param callback The callback
   */
  get(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  get(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, relativeRecordSetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecordSet>, callback?: msRest.ServiceCallback<Models.RecordSet>): Promise<Models.RecordSetsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateZoneName,
        recordType,
        relativeRecordSetName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RecordSetsGetResponse>;
  }

  /**
   * Lists the record sets of a specified type in a Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate. Possible values include: 'A', 'AAAA',
   * 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListByTypeResponse>
   */
  listByType(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, options?: Models.RecordSetsListByTypeOptionalParams): Promise<Models.RecordSetsListByTypeResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate. Possible values include: 'A', 'AAAA',
   * 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param callback The callback
   */
  listByType(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate. Possible values include: 'A', 'AAAA',
   * 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param options The optional parameters
   * @param callback The callback
   */
  listByType(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, options: Models.RecordSetsListByTypeOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listByType(resourceGroupName: string, privateZoneName: string, recordType: Models.RecordType, options?: Models.RecordSetsListByTypeOptionalParams | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListByTypeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateZoneName,
        recordType,
        options
      },
      listByTypeOperationSpec,
      callback) as Promise<Models.RecordSetsListByTypeResponse>;
  }

  /**
   * Lists all record sets in a Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListResponse>
   */
  list(resourceGroupName: string, privateZoneName: string, options?: Models.RecordSetsListOptionalParams): Promise<Models.RecordSetsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param callback The callback
   */
  list(resourceGroupName: string, privateZoneName: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, privateZoneName: string, options: Models.RecordSetsListOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  list(resourceGroupName: string, privateZoneName: string, options?: Models.RecordSetsListOptionalParams | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateZoneName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RecordSetsListResponse>;
  }

  /**
   * Lists the record sets of a specified type in a Private DNS zone.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListByTypeNextResponse>
   */
  listByTypeNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RecordSetsListByTypeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByTypeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByTypeNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listByTypeNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListByTypeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByTypeNextOperationSpec,
      callback) as Promise<Models.RecordSetsListByTypeNextResponse>;
  }

  /**
   * Lists all record sets in a Private DNS zone.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RecordSetsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RecordSetsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.recordType,
    Parameters.relativeRecordSetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RecordSet,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    201: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.recordType,
    Parameters.relativeRecordSetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RecordSet,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.recordType,
    Parameters.relativeRecordSetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.recordType,
    Parameters.relativeRecordSetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByTypeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.recordsetnamesuffix,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/ALL",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.recordsetnamesuffix,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByTypeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
