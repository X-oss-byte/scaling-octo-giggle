/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface ListOfOperators {
  value: Operator[];
  /** Represents the URL link to the next page of operators. */
  nextLink?: string;
}

export interface Operator {
  /** Unique GUID that represents the operator record */
  operatorId?: string;
  /** Public facing brand name of the operator */
  friendlyName?: string;
  /** URL of the Operator's Operator Connect offerings */
  landingPage?: string;
  /** URL of the Operator's logo */
  logoUri?: string;
  /** URL of the Operator's thumbnail logo */
  logoThumbnailUri?: string;
  /** Count of phone numbers acquired from the operator */
  acquiredNumbersCount?: number;
  offerings?: OperatorOffering[];
}

export interface OperatorOffering {
  /** The type of offer that operator is advertising */
  offerType?: string;
  /** List of 2 character codes of available countries in ISO 3166-1 format */
  availableCountries?: string[];
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

export interface ListOfConsents {
  value: Consent[];
  /** Represents the URL link to the next page of consents. */
  nextLink?: string;
}

export interface Consent {
  /** Unique GUID that represents the operator record */
  operatorId?: string;
  /** Status of the consent */
  status?: ConsentStatus;
  /** Contact information of user that granted the consent to operator */
  consentedBy?: Contact;
  /** Date/Time when the consent was provided */
  consentedOn?: Date;
  /** Contact information of user that last modified the consent */
  lastModifiedBy?: Contact;
  /** Date/Time when the consent was last updated */
  lastModifiedOn?: Date;
  /** List of 2 character codes of available countries in ISO 3166-1 format */
  consentedCountries?: string[];
  /** List of contact information */
  contacts?: Contact[];
  /** User company name */
  companyName?: string;
}

export interface Contact {
  /** Full name of the contact */
  fullName?: string;
  /** Email address of the contact */
  email?: string;
  /** Phone number of the contact with a leading + and country code */
  phoneNumber?: string;
}

export interface CreateOrUpdateConsentRequest {
  /** Status of the consent */
  status?: ConsentStatus;
  consentedBy?: Contact;
  lastModifiedBy?: Contact;
  /** List of 2 character codes of available countries in ISO 3166-1 format */
  consentedCountries?: string[];
  contacts?: Contact[];
  companyName?: string;
}

/** Defines headers for OperatorConnectClient_getOperators operation. */
export interface OperatorConnectClientGetOperatorsHeaders {
  /** Microsoft request id used for tracing requests. */
  xMsRequestId?: string;
}

/** Defines headers for OperatorConnectClient_getOperators operation. */
export interface OperatorConnectClientGetOperatorsExceptionHeaders {
  /** Error code */
  xMsErrorCode?: string;
}

/** Defines headers for OperatorConnectClient_getConsents operation. */
export interface OperatorConnectClientGetConsentsHeaders {
  /** Microsoft request id used for tracing requests. */
  xMsRequestId?: string;
}

/** Defines headers for OperatorConnectClient_getConsents operation. */
export interface OperatorConnectClientGetConsentsExceptionHeaders {
  /** Error code */
  xMsErrorCode?: string;
}

/** Defines headers for OperatorConnectClient_getConsent operation. */
export interface OperatorConnectClientGetConsentHeaders {
  /** Microsoft request id used for tracing requests. */
  xMsRequestId?: string;
}

/** Defines headers for OperatorConnectClient_getConsent operation. */
export interface OperatorConnectClientGetConsentExceptionHeaders {
  /** Error code */
  xMsErrorCode?: string;
}

/** Defines headers for OperatorConnectClient_createOrUpdateConsent operation. */
export interface OperatorConnectClientCreateOrUpdateConsentHeaders {
  /** Microsoft request id used for tracing requests. */
  xMsRequestId?: string;
}

/** Defines headers for OperatorConnectClient_createOrUpdateConsent operation. */
export interface OperatorConnectClientCreateOrUpdateConsentExceptionHeaders {
  /** Error code */
  xMsErrorCode?: string;
}

/** Defines headers for OperatorConnectClient_getOperatorsNext operation. */
export interface OperatorConnectClientGetOperatorsNextHeaders {
  /** Microsoft request id used for tracing requests. */
  xMsRequestId?: string;
}

/** Defines headers for OperatorConnectClient_getOperatorsNext operation. */
export interface OperatorConnectClientGetOperatorsNextExceptionHeaders {
  /** Error code */
  xMsErrorCode?: string;
}

/** Defines headers for OperatorConnectClient_getConsentsNext operation. */
export interface OperatorConnectClientGetConsentsNextHeaders {
  /** Microsoft request id used for tracing requests. */
  xMsRequestId?: string;
}

/** Defines headers for OperatorConnectClient_getConsentsNext operation. */
export interface OperatorConnectClientGetConsentsNextExceptionHeaders {
  /** Error code */
  xMsErrorCode?: string;
}

/** Known values of {@link ConsentStatus} that the service accepts. */
export enum KnownConsentStatus {
  Active = "Active",
  Suspended = "Suspended",
  Removed = "Removed"
}

/**
 * Defines values for ConsentStatus. \
 * {@link KnownConsentStatus} can be used interchangeably with ConsentStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Suspended** \
 * **Removed**
 */
export type ConsentStatus = string;

/** Optional parameters. */
export interface GetOperatorsOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default will return the entire list. */
  top?: number;
}

/** Contains response data for the getOperators operation. */
export type GetOperatorsResponse = OperatorConnectClientGetOperatorsHeaders &
  ListOfOperators;

/** Optional parameters. */
export interface GetConsentsOptionalParams extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default will return the entire list. */
  top?: number;
}

/** Contains response data for the getConsents operation. */
export type GetConsentsResponse = OperatorConnectClientGetConsentsHeaders &
  ListOfConsents;

/** Optional parameters. */
export interface GetConsentOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getConsent operation. */
export type GetConsentResponse = OperatorConnectClientGetConsentHeaders &
  Consent;

/** Optional parameters. */
export interface CreateOrUpdateConsentOptionalParams
  extends coreClient.OperationOptions {
  /** Status of the consent */
  status?: ConsentStatus;
  consentedBy?: Contact;
  lastModifiedBy?: Contact;
  /** List of 2 character codes of available countries in ISO 3166-1 format */
  consentedCountries?: string[];
  /** Array of Contact */
  contacts?: Contact[];
  companyName?: string;
}

/** Contains response data for the createOrUpdateConsent operation. */
export type CreateOrUpdateConsentResponse = OperatorConnectClientCreateOrUpdateConsentHeaders &
  Consent;

/** Optional parameters. */
export interface GetOperatorsNextOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default will return the entire list. */
  top?: number;
}

/** Contains response data for the getOperatorsNext operation. */
export type GetOperatorsNextResponse = OperatorConnectClientGetOperatorsNextHeaders &
  ListOfOperators;

/** Optional parameters. */
export interface GetConsentsNextOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default will return the entire list. */
  top?: number;
}

/** Contains response data for the getConsentsNext operation. */
export type GetConsentsNextResponse = OperatorConnectClientGetConsentsNextHeaders &
  ListOfConsents;

/** Optional parameters. */
export interface OperatorConnectClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}