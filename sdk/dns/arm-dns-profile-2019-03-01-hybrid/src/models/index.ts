/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * An A record.
 */
export interface ARecord {
  /**
   * The IPv4 address of this A record.
   */
  ipv4Address?: string;
}

/**
 * An AAAA record.
 */
export interface AaaaRecord {
  /**
   * The IPv6 address of this AAAA record.
   */
  ipv6Address?: string;
}

/**
 * An MX record.
 */
export interface MxRecord {
  /**
   * The preference value for this MX record.
   */
  preference?: number;
  /**
   * The domain name of the mail host for this MX record.
   */
  exchange?: string;
}

/**
 * An NS record.
 */
export interface NsRecord {
  /**
   * The name server name for this NS record.
   */
  nsdname?: string;
}

/**
 * A PTR record.
 */
export interface PtrRecord {
  /**
   * The PTR target domain name for this PTR record.
   */
  ptrdname?: string;
}

/**
 * An SRV record.
 */
export interface SrvRecord {
  /**
   * The priority value for this SRV record.
   */
  priority?: number;
  /**
   * The weight value for this SRV record.
   */
  weight?: number;
  /**
   * The port value for this SRV record.
   */
  port?: number;
  /**
   * The target domain name for this SRV record.
   */
  target?: string;
}

/**
 * A TXT record.
 */
export interface TxtRecord {
  /**
   * The text value of this TXT record.
   */
  value?: string[];
}

/**
 * A CNAME record.
 */
export interface CnameRecord {
  /**
   * The canonical name for this CNAME record.
   */
  cname?: string;
}

/**
 * An SOA record.
 */
export interface SoaRecord {
  /**
   * The domain name of the authoritative name server for this SOA record.
   */
  host?: string;
  /**
   * The email contact for this SOA record.
   */
  email?: string;
  /**
   * The serial number for this SOA record.
   */
  serialNumber?: number;
  /**
   * The refresh value for this SOA record.
   */
  refreshTime?: number;
  /**
   * The retry time for this SOA record.
   */
  retryTime?: number;
  /**
   * The expire time for this SOA record.
   */
  expireTime?: number;
  /**
   * The minimum value for this SOA record. By convention this is used to determine the negative
   * caching duration.
   */
  minimumTtl?: number;
}

/**
 * Describes a DNS record set (a collection of DNS records with the same name and type).
 */
export interface RecordSet {
  /**
   * The ID of the record set.
   */
  id?: string;
  /**
   * The name of the record set.
   */
  name?: string;
  /**
   * The type of the record set.
   */
  type?: string;
  /**
   * The etag of the record set.
   */
  etag?: string;
  /**
   * The metadata attached to the record set.
   */
  metadata?: { [propertyName: string]: string };
  /**
   * The TTL (time-to-live) of the records in the record set.
   */
  tTL?: number;
  /**
   * The list of A records in the record set.
   */
  aRecords?: ARecord[];
  /**
   * The list of AAAA records in the record set.
   */
  aaaaRecords?: AaaaRecord[];
  /**
   * The list of MX records in the record set.
   */
  mxRecords?: MxRecord[];
  /**
   * The list of NS records in the record set.
   */
  nsRecords?: NsRecord[];
  /**
   * The list of PTR records in the record set.
   */
  ptrRecords?: PtrRecord[];
  /**
   * The list of SRV records in the record set.
   */
  srvRecords?: SrvRecord[];
  /**
   * The list of TXT records in the record set.
   */
  txtRecords?: TxtRecord[];
  /**
   * The CNAME record in the  record set.
   */
  cnameRecord?: CnameRecord;
  /**
   * The SOA record in the record set.
   */
  soaRecord?: SoaRecord;
}

/**
 * Parameters supplied to update a record set.
 */
export interface RecordSetUpdateParameters {
  /**
   * Specifies information about the record set being updated.
   */
  recordSet?: RecordSet;
}

/**
 * An interface representing Resource.
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource. Ex- Microsoft.Compute/virtualMachines or
   * Microsoft.Storage/storageAccounts.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource
 */
export interface TrackedResource extends Resource {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The geo-location where the resource lives
   */
  location: string;
}

/**
 * Describes a DNS zone.
 */
export interface Zone extends TrackedResource {
  /**
   * The etag of the zone.
   */
  etag?: string;
  /**
   * The maximum number of record sets that can be created in this DNS zone.  This is a read-only
   * property and any attempt to set this value will be ignored.
   */
  maxNumberOfRecordSets?: number;
  /**
   * The current number of record sets in this DNS zone.  This is a read-only property and any
   * attempt to set this value will be ignored.
   */
  numberOfRecordSets?: number;
  /**
   * The name servers for this DNS zone. This is a read-only property and any attempt to set this
   * value will be ignored.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nameServers?: string[];
}

/**
 * The response to a Zone Delete operation.
 */
export interface ZoneDeleteResult {
  /**
   * Users can perform a Get on Azure-AsyncOperation to get the status of their delete Zone
   * operations.
   */
  azureAsyncOperation?: string;
  /**
   * Possible values include: 'InProgress', 'Succeeded', 'Failed'
   */
  status?: OperationStatus;
  /**
   * Possible values include: 'Continue', 'SwitchingProtocols', 'OK', 'Created', 'Accepted',
   * 'NonAuthoritativeInformation', 'NoContent', 'ResetContent', 'PartialContent',
   * 'MultipleChoices', 'Ambiguous', 'MovedPermanently', 'Moved', 'Found', 'Redirect', 'SeeOther',
   * 'RedirectMethod', 'NotModified', 'UseProxy', 'Unused', 'TemporaryRedirect',
   * 'RedirectKeepVerb', 'BadRequest', 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound',
   * 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired', 'RequestTimeout',
   * 'Conflict', 'Gone', 'LengthRequired', 'PreconditionFailed', 'RequestEntityTooLarge',
   * 'RequestUriTooLong', 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable',
   * 'ExpectationFailed', 'UpgradeRequired', 'InternalServerError', 'NotImplemented', 'BadGateway',
   * 'ServiceUnavailable', 'GatewayTimeout', 'HttpVersionNotSupported'
   */
  statusCode?: HttpStatusCode;
  requestId?: string;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
 */
export interface ProxyResource extends Resource {
}

/**
 * The resource model definition for a Azure Resource Manager resource with an etag.
 */
export interface AzureEntityResource extends Resource {
  /**
   * Resource Etag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The etag of the record set. Omit this value to always overwrite the current record set.
   * Specify the last-seen etag value to prevent accidentally overwriting concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The etag of the record set. Omit this value to always overwrite the current record set.
   * Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
  /**
   * Set to '*' to allow a new record set to be created, but to prevent updating an existing record
   * set. Other values will be ignored.
   */
  ifNoneMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The etag of the record set. Omit this value to always delete the current record set. Specify
   * the last-seen etag value to prevent accidentally deleting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsListByTypeOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
  /**
   * The suffix label of the record set name that has to be used to filter the record set
   * enumerations. If this parameter is specified, Enumeration will return only records that end
   * with .<recordSetNameSuffix>
   */
  recordsetnamesuffix?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsListByDnsZoneOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
  /**
   * The suffix label of the record set name that has to be used to filter the record set
   * enumerations. If this parameter is specified, Enumeration will return only records that end
   * with .<recordSetNameSuffix>
   */
  recordsetnamesuffix?: string;
}

/**
 * Optional Parameters.
 */
export interface ZonesCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the
   * last-seen etag value to prevent accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
  /**
   * Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone.
   * Other values will be ignored.
   */
  ifNoneMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface ZonesDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The etag of the DNS zone. Omit this value to always delete the current zone. Specify the
   * last-seen etag value to prevent accidentally deleting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface ZonesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface ZonesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of DNS zones to return. If not specified, returns up to 100 zones.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface ZonesBeginDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The etag of the DNS zone. Omit this value to always delete the current zone. Specify the
   * last-seen etag value to prevent accidentally deleting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * An interface representing DnsManagementClientOptions.
 */
export interface DnsManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The response to a record set List operation.
 * @extends Array<RecordSet>
 */
export interface RecordSetListResult extends Array<RecordSet> {
  /**
   * The continuation token for the next page of results.
   */
  nextLink?: string;
}

/**
 * @interface
 * The response to a Zone List or ListAll operation.
 * @extends Array<Zone>
 */
export interface ZoneListResult extends Array<Zone> {
  /**
   * The continuation token for the next page of results.
   */
  nextLink?: string;
}

/**
 * Defines values for OperationStatus.
 * Possible values include: 'InProgress', 'Succeeded', 'Failed'
 * @readonly
 * @enum {string}
 */
export type OperationStatus = 'InProgress' | 'Succeeded' | 'Failed';

/**
 * Defines values for HttpStatusCode.
 * Possible values include: 'Continue', 'SwitchingProtocols', 'OK', 'Created', 'Accepted',
 * 'NonAuthoritativeInformation', 'NoContent', 'ResetContent', 'PartialContent', 'MultipleChoices',
 * 'Ambiguous', 'MovedPermanently', 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod',
 * 'NotModified', 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb', 'BadRequest',
 * 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound', 'MethodNotAllowed', 'NotAcceptable',
 * 'ProxyAuthenticationRequired', 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired',
 * 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong', 'UnsupportedMediaType',
 * 'RequestedRangeNotSatisfiable', 'ExpectationFailed', 'UpgradeRequired', 'InternalServerError',
 * 'NotImplemented', 'BadGateway', 'ServiceUnavailable', 'GatewayTimeout',
 * 'HttpVersionNotSupported'
 * @readonly
 * @enum {string}
 */
export type HttpStatusCode = 'Continue' | 'SwitchingProtocols' | 'OK' | 'Created' | 'Accepted' | 'NonAuthoritativeInformation' | 'NoContent' | 'ResetContent' | 'PartialContent' | 'MultipleChoices' | 'Ambiguous' | 'MovedPermanently' | 'Moved' | 'Found' | 'Redirect' | 'SeeOther' | 'RedirectMethod' | 'NotModified' | 'UseProxy' | 'Unused' | 'TemporaryRedirect' | 'RedirectKeepVerb' | 'BadRequest' | 'Unauthorized' | 'PaymentRequired' | 'Forbidden' | 'NotFound' | 'MethodNotAllowed' | 'NotAcceptable' | 'ProxyAuthenticationRequired' | 'RequestTimeout' | 'Conflict' | 'Gone' | 'LengthRequired' | 'PreconditionFailed' | 'RequestEntityTooLarge' | 'RequestUriTooLong' | 'UnsupportedMediaType' | 'RequestedRangeNotSatisfiable' | 'ExpectationFailed' | 'UpgradeRequired' | 'InternalServerError' | 'NotImplemented' | 'BadGateway' | 'ServiceUnavailable' | 'GatewayTimeout' | 'HttpVersionNotSupported';

/**
 * Defines values for RecordType.
 * Possible values include: 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
 * @readonly
 * @enum {string}
 */
export type RecordType = 'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'PTR' | 'SOA' | 'SRV' | 'TXT';

/**
 * Contains response data for the update operation.
 */
export type RecordSetsUpdateResponse = RecordSet & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RecordSet;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type RecordSetsCreateOrUpdateResponse = RecordSet & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RecordSet;
    };
};

/**
 * Contains response data for the get operation.
 */
export type RecordSetsGetResponse = RecordSet & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RecordSet;
    };
};

/**
 * Contains response data for the listByType operation.
 */
export type RecordSetsListByTypeResponse = RecordSetListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RecordSetListResult;
    };
};

/**
 * Contains response data for the listByDnsZone operation.
 */
export type RecordSetsListByDnsZoneResponse = RecordSetListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RecordSetListResult;
    };
};

/**
 * Contains response data for the listByTypeNext operation.
 */
export type RecordSetsListByTypeNextResponse = RecordSetListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RecordSetListResult;
    };
};

/**
 * Contains response data for the listByDnsZoneNext operation.
 */
export type RecordSetsListByDnsZoneNextResponse = RecordSetListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RecordSetListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ZonesCreateOrUpdateResponse = Zone & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Zone;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type ZonesDeleteMethodResponse = ZoneDeleteResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ZoneDeleteResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ZonesGetResponse = Zone & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Zone;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ZonesListByResourceGroupResponse = ZoneListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ZoneListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ZonesListResponse = ZoneListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ZoneListResult;
    };
};

/**
 * Contains response data for the beginDeleteMethod operation.
 */
export type ZonesBeginDeleteMethodResponse = ZoneDeleteResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ZoneDeleteResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ZonesListByResourceGroupNextResponse = ZoneListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ZoneListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ZonesListNextResponse = ZoneListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ZoneListResult;
    };
};
