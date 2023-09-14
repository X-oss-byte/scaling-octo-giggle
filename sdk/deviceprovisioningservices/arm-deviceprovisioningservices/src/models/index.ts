/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ErrorMesssage.
 * Error response containing message and code.
 *
 */
export interface ErrorMesssage {
  /**
   * @member {string} [code] standard error code
   */
  code?: string;
  /**
   * @member {string} [message] standard error description
   */
  message?: string;
  /**
   * @member {string} [details] detailed summary of error
   */
  details?: string;
}

/**
 * @interface
 * An interface representing AsyncOperationResult.
 * Result of a long running operation.
 *
 */
export interface AsyncOperationResult {
  /**
   * @member {string} [status] current status of a long running operation.
   */
  status?: string;
  /**
   * @member {ErrorMesssage} [error] Error message containing code, description
   * and details
   */
  error?: ErrorMesssage;
}

/**
 * @interface
 * An interface representing CertificateProperties.
 * The description of an X509 CA Certificate.
 *
 */
export interface CertificateProperties {
  /**
   * @member {string} [subject] The certificate's subject name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly subject?: string;
  /**
   * @member {Date} [expiry] The certificate's expiration date and time.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly expiry?: Date;
  /**
   * @member {string} [thumbprint] The certificate's thumbprint.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly thumbprint?: string;
  /**
   * @member {boolean} [isVerified] Determines whether certificate has been
   * verified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly isVerified?: boolean;
  /**
   * @member {Date} [created] The certificate's creation date and time.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly created?: Date;
  /**
   * @member {Date} [updated] The certificate's last update date and time.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updated?: Date;
}

/**
 * @interface
 * An interface representing CertificateResponse.
 * The X509 Certificate.
 *
 * @extends BaseResource
 */
export interface CertificateResponse extends BaseResource {
  /**
   * @member {CertificateProperties} [properties] properties of a certificate
   */
  properties?: CertificateProperties;
  /**
   * @member {string} [id] The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The name of the certificate.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] The entity tag.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly etag?: string;
  /**
   * @member {string} [type] The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing CertificateListDescription.
 * The JSON-serialized array of Certificate objects.
 *
 */
export interface CertificateListDescription {
  /**
   * @member {CertificateResponse[]} [value] The array of Certificate objects.
   */
  value?: CertificateResponse[];
}

/**
 * @interface
 * An interface representing CertificateBodyDescription.
 * The JSON-serialized X509 Certificate.
 *
 */
export interface CertificateBodyDescription {
  /**
   * @member {string} [certificate] Base-64 representation of the X509 leaf
   * certificate .cer file or just .pem file content.
   */
  certificate?: string;
}

/**
 * @interface
 * An interface representing IotDpsSkuInfo.
 * List of possible provisoning service SKUs.
 *
 */
export interface IotDpsSkuInfo {
  /**
   * @member {IotDpsSku} [name] Sku name. Possible values include: 'S1'
   */
  name?: IotDpsSku;
  /**
   * @member {string} [tier] Pricing tier name of the provisioning service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tier?: string;
  /**
   * @member {number} [capacity] The number of units to provision
   */
  capacity?: number;
}

/**
 * @interface
 * An interface representing IotHubDefinitionDescription.
 * Description of the IoT hub.
 *
 */
export interface IotHubDefinitionDescription {
  /**
   * @member {boolean} [applyAllocationPolicy] flag for applying
   * allocationPolicy or not for a given iot hub.
   */
  applyAllocationPolicy?: boolean;
  /**
   * @member {number} [allocationWeight] weight to apply for a given iot h.
   */
  allocationWeight?: number;
  /**
   * @member {string} [name] Host name of the IoT hub.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} connectionString Connection string og the IoT hub.
   */
  connectionString: string;
  /**
   * @member {string} location ARM region of the IoT hub.
   */
  location: string;
}

/**
 * @interface
 * An interface representing SharedAccessSignatureAuthorizationRuleAccessRightsDescription.
 * Description of the shared access key.
 *
 */
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
  /**
   * @member {string} keyName Name of the key.
   */
  keyName: string;
  /**
   * @member {string} [primaryKey] Primary SAS key value.
   */
  primaryKey?: string;
  /**
   * @member {string} [secondaryKey] Secondary SAS key value.
   */
  secondaryKey?: string;
  /**
   * @member {AccessRightsDescription} rights Rights that this key has.
   * Possible values include: 'ServiceConfig', 'EnrollmentRead',
   * 'EnrollmentWrite', 'DeviceConnect', 'RegistrationStatusRead',
   * 'RegistrationStatusWrite'
   */
  rights: AccessRightsDescription;
}

/**
 * @interface
 * An interface representing IotDpsPropertiesDescription.
 * the service specific properties of a provisoning service, including keys,
 * linked iot hubs, current state, and system generated properties such as
 * hostname and idScope
 *
 */
export interface IotDpsPropertiesDescription {
  /**
   * @member {State} [state] Current state of the provisioning service.
   * Possible values include: 'Activating', 'Active', 'Deleting', 'Deleted',
   * 'ActivationFailed', 'DeletionFailed', 'Transitioning', 'Suspending',
   * 'Suspended', 'Resuming', 'FailingOver', 'FailoverFailed'
   */
  state?: State;
  /**
   * @member {string} [provisioningState] The ARM provisioning state of the
   * provisioning service.
   */
  provisioningState?: string;
  /**
   * @member {IotHubDefinitionDescription[]} [iotHubs] List of IoT hubs
   * assosciated with this provisioning service.
   */
  iotHubs?: IotHubDefinitionDescription[];
  /**
   * @member {AllocationPolicy} [allocationPolicy] Allocation policy to be used
   * by this provisioning service. Possible values include: 'Hashed',
   * 'GeoLatency', 'Static'
   */
  allocationPolicy?: AllocationPolicy;
  /**
   * @member {string} [serviceOperationsHostName] Service endpoint for
   * provisioning service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly serviceOperationsHostName?: string;
  /**
   * @member {string} [deviceProvisioningHostName] Device endpoint for this
   * provisioning service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly deviceProvisioningHostName?: string;
  /**
   * @member {string} [idScope] Unique identifier of this provisioning service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly idScope?: string;
  /**
   * @member {SharedAccessSignatureAuthorizationRuleAccessRightsDescription[]}
   * [authorizationPolicies] List of authorization keys for a provisioning
   * service.
   */
  authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
}

/**
 * @interface
 * An interface representing Resource.
 * The common properties of an Azure resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} location The resource location.
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] The resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ProvisioningServiceDescription.
 * The description of the provisioning service.
 *
 * @extends Resource
 */
export interface ProvisioningServiceDescription extends Resource {
  /**
   * @member {string} [etag] The Etag field is *not* required. If it is
   * provided in the response body, it must also be provided as a header per
   * the normal ETag convention.
   */
  etag?: string;
  /**
   * @member {IotDpsPropertiesDescription} properties Service specific
   * properties for a provisioning service
   */
  properties: IotDpsPropertiesDescription;
  /**
   * @member {IotDpsSkuInfo} sku Sku info for a provisioning Service.
   */
  sku: IotDpsSkuInfo;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft Devices.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [resource] Resource Type: ProvisioningServices.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [operation] Name of the operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * IoT Hub REST API operation.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{read |
   * write | action | delete}
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing ErrorDetails.
 * Error details.
 *
 */
export interface ErrorDetails {
  /**
   * @member {string} [code] The error code.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly code?: string;
  /**
   * @member {string} [httpStatusCode] The HTTP status code.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly httpStatusCode?: string;
  /**
   * @member {string} [message] The error message.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly message?: string;
  /**
   * @member {string} [details] The error details.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly details?: string;
}

/**
 * @interface
 * An interface representing IotDpsSkuDefinition.
 * Available Sku's of tier and units.
 *
 */
export interface IotDpsSkuDefinition {
  /**
   * @member {IotDpsSku} [name] Sku name. Possible values include: 'S1'
   */
  name?: IotDpsSku;
}

/**
 * @interface
 * An interface representing OperationInputs.
 * Input values for operation results call.
 *
 */
export interface OperationInputs {
  /**
   * @member {string} name The name of the Provisioning Service to check.
   */
  name: string;
}

/**
 * @interface
 * An interface representing NameAvailabilityInfo.
 * Description of name availability.
 *
 */
export interface NameAvailabilityInfo {
  /**
   * @member {boolean} [nameAvailable] specifies if a name is available or not
   */
  nameAvailable?: boolean;
  /**
   * @member {NameUnavailabilityReason} [reason] specifies the reason a name is
   * unavailable. Possible values include: 'Invalid', 'AlreadyExists'
   */
  reason?: NameUnavailabilityReason;
  /**
   * @member {string} [message] message containing a etailed reason name is
   * unavailable
   */
  message?: string;
}

/**
 * @interface
 * An interface representing TagsResource.
 * A container holding only the Tags for a resource, allowing the user to
 * update the tags on a Provisioning Service instance.
 *
 */
export interface TagsResource {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing VerificationCodeResponseProperties.
 */
export interface VerificationCodeResponseProperties {
  /**
   * @member {string} [verificationCode] Verification code.
   */
  verificationCode?: string;
  /**
   * @member {string} [subject] Certificate subject.
   */
  subject?: string;
  /**
   * @member {string} [expiry] Code expiry.
   */
  expiry?: string;
  /**
   * @member {string} [thumbprint] Certificate thumbprint.
   */
  thumbprint?: string;
  /**
   * @member {boolean} [isVerified] Indicate if the certificate is verified by
   * owner of private key.
   */
  isVerified?: boolean;
  /**
   * @member {string} [created] Certificate created time.
   */
  created?: string;
  /**
   * @member {string} [updated] Certificate updated time.
   */
  updated?: string;
}

/**
 * @interface
 * An interface representing VerificationCodeResponse.
 * Description of the response of the verification code.
 *
 * @extends BaseResource
 */
export interface VerificationCodeResponse extends BaseResource {
  /**
   * @member {string} [name] Name of certificate.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Request etag.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly etag?: string;
  /**
   * @member {string} [id] The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {VerificationCodeResponseProperties} [properties]
   */
  properties?: VerificationCodeResponseProperties;
}

/**
 * @interface
 * An interface representing VerificationCodeRequest.
 * The JSON-serialized leaf certificate
 *
 */
export interface VerificationCodeRequest {
  /**
   * @member {string} [certificate] base-64 representation of X509 certificate
   * .cer file or just .pem file content.
   */
  certificate?: string;
}

/**
 * @interface
 * An interface representing DpsCertificateGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DpsCertificateGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [ifMatch] ETag of the certificate.
   */
  ifMatch?: string;
}

/**
 * @interface
 * An interface representing DpsCertificateCreateOrUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DpsCertificateCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [ifMatch] ETag of the certificate. This is required to
   * update an existing certificate, and ignored while creating a brand new
   * certificate.
   */
  ifMatch?: string;
}

/**
 * @interface
 * An interface representing DpsCertificateDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DpsCertificateDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [certificatename] This is optional, and it is the Common
   * Name of the certificate.
   */
  certificatename?: string;
  /**
   * @member {Uint8Array} [certificaterawBytes] Raw data within the
   * certificate.
   */
  certificaterawBytes?: Uint8Array;
  /**
   * @member {boolean} [certificateisVerified] Indicates if certificate has
   * been verified by owner of the private key.
   */
  certificateisVerified?: boolean;
  /**
   * @member {CertificatePurpose} [certificatepurpose] A description that
   * mentions the purpose of the certificate. Possible values include:
   * 'clientAuthentication', 'serverAuthentication'
   */
  certificatepurpose?: CertificatePurpose;
  /**
   * @member {Date} [certificatecreated] Time the certificate is created.
   */
  certificatecreated?: Date;
  /**
   * @member {Date} [certificatelastUpdated] Time the certificate is last
   * updated.
   */
  certificatelastUpdated?: Date;
  /**
   * @member {boolean} [certificatehasPrivateKey] Indicates if the certificate
   * contains a private key.
   */
  certificatehasPrivateKey?: boolean;
  /**
   * @member {string} [certificatenonce] Random number generated to indicate
   * Proof of Possession.
   */
  certificatenonce?: string;
}

/**
 * @interface
 * An interface representing DpsCertificateGenerateVerificationCodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DpsCertificateGenerateVerificationCodeOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [certificatename] Common Name for the certificate.
   */
  certificatename?: string;
  /**
   * @member {Uint8Array} [certificaterawBytes] Raw data of certificate.
   */
  certificaterawBytes?: Uint8Array;
  /**
   * @member {boolean} [certificateisVerified] Indicates if the certificate has
   * been verified by owner of the private key.
   */
  certificateisVerified?: boolean;
  /**
   * @member {CertificatePurpose} [certificatepurpose] Description mentioning
   * the purpose of the certificate. Possible values include:
   * 'clientAuthentication', 'serverAuthentication'
   */
  certificatepurpose?: CertificatePurpose;
  /**
   * @member {Date} [certificatecreated] Certificate creation time.
   */
  certificatecreated?: Date;
  /**
   * @member {Date} [certificatelastUpdated] Certificate last updated time.
   */
  certificatelastUpdated?: Date;
  /**
   * @member {boolean} [certificatehasPrivateKey] Indicates if the certificate
   * contains private key.
   */
  certificatehasPrivateKey?: boolean;
  /**
   * @member {string} [certificatenonce] Random number generated to indicate
   * Proof of Possession.
   */
  certificatenonce?: string;
}

/**
 * @interface
 * An interface representing DpsCertificateVerifyCertificateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DpsCertificateVerifyCertificateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [certificatename] Common Name for the certificate.
   */
  certificatename?: string;
  /**
   * @member {Uint8Array} [certificaterawBytes] Raw data of certificate.
   */
  certificaterawBytes?: Uint8Array;
  /**
   * @member {boolean} [certificateisVerified] Indicates if the certificate has
   * been verified by owner of the private key.
   */
  certificateisVerified?: boolean;
  /**
   * @member {CertificatePurpose} [certificatepurpose] Describe the purpose of
   * the certificate. Possible values include: 'clientAuthentication',
   * 'serverAuthentication'
   */
  certificatepurpose?: CertificatePurpose;
  /**
   * @member {Date} [certificatecreated] Certificate creation time.
   */
  certificatecreated?: Date;
  /**
   * @member {Date} [certificatelastUpdated] Certificate last updated time.
   */
  certificatelastUpdated?: Date;
  /**
   * @member {boolean} [certificatehasPrivateKey] Indicates if the certificate
   * contains private key.
   */
  certificatehasPrivateKey?: boolean;
  /**
   * @member {string} [certificatenonce] Random number generated to indicate
   * Proof of Possession.
   */
  certificatenonce?: string;
}

/**
 * @interface
 * An interface representing IotDpsClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface IotDpsClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list IoT Hub operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the ProvisioningServiceDescriptionListResult.
 * List of provisioning service descriptions.
 *
 * @extends Array<ProvisioningServiceDescription>
 */
export interface ProvisioningServiceDescriptionListResult extends Array<ProvisioningServiceDescription> {
  /**
   * @member {string} [nextLink] the next link
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the IotDpsSkuDefinitionListResult.
 * List of available SKUs.
 *
 * @extends Array<IotDpsSkuDefinition>
 */
export interface IotDpsSkuDefinitionListResult extends Array<IotDpsSkuDefinition> {
  /**
   * @member {string} [nextLink] The next link.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the SharedAccessSignatureAuthorizationRuleListResult.
 * List of shared access keys.
 *
 * @extends Array<SharedAccessSignatureAuthorizationRuleAccessRightsDescription>
 */
export interface SharedAccessSignatureAuthorizationRuleListResult extends Array<SharedAccessSignatureAuthorizationRuleAccessRightsDescription> {
  /**
   * @member {string} [nextLink] The next link.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for IotDpsSku.
 * Possible values include: 'S1'
 * @readonly
 * @enum {string}
 */
export type IotDpsSku = 'S1';

/**
 * Defines values for State.
 * Possible values include: 'Activating', 'Active', 'Deleting', 'Deleted', 'ActivationFailed',
 * 'DeletionFailed', 'Transitioning', 'Suspending', 'Suspended', 'Resuming', 'FailingOver',
 * 'FailoverFailed'
 * @readonly
 * @enum {string}
 */
export type State = 'Activating' | 'Active' | 'Deleting' | 'Deleted' | 'ActivationFailed' | 'DeletionFailed' | 'Transitioning' | 'Suspending' | 'Suspended' | 'Resuming' | 'FailingOver' | 'FailoverFailed';

/**
 * Defines values for AllocationPolicy.
 * Possible values include: 'Hashed', 'GeoLatency', 'Static'
 * @readonly
 * @enum {string}
 */
export type AllocationPolicy = 'Hashed' | 'GeoLatency' | 'Static';

/**
 * Defines values for AccessRightsDescription.
 * Possible values include: 'ServiceConfig', 'EnrollmentRead', 'EnrollmentWrite', 'DeviceConnect',
 * 'RegistrationStatusRead', 'RegistrationStatusWrite'
 * @readonly
 * @enum {string}
 */
export type AccessRightsDescription = 'ServiceConfig' | 'EnrollmentRead' | 'EnrollmentWrite' | 'DeviceConnect' | 'RegistrationStatusRead' | 'RegistrationStatusWrite';

/**
 * Defines values for NameUnavailabilityReason.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export type NameUnavailabilityReason = 'Invalid' | 'AlreadyExists';

/**
 * Defines values for CertificatePurpose.
 * Possible values include: 'clientAuthentication', 'serverAuthentication'
 * @readonly
 * @enum {string}
 */
export type CertificatePurpose = 'clientAuthentication' | 'serverAuthentication';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
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
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
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
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DpsCertificateGetResponse = CertificateResponse & {
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
      parsedBody: CertificateResponse;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type DpsCertificateCreateOrUpdateResponse = CertificateResponse & {
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
      parsedBody: CertificateResponse;
    };
};

/**
 * Contains response data for the list operation.
 */
export type DpsCertificateListResponse = CertificateListDescription & {
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
      parsedBody: CertificateListDescription;
    };
};

/**
 * Contains response data for the generateVerificationCode operation.
 */
export type DpsCertificateGenerateVerificationCodeResponse = VerificationCodeResponse & {
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
      parsedBody: VerificationCodeResponse;
    };
};

/**
 * Contains response data for the verifyCertificate operation.
 */
export type DpsCertificateVerifyCertificateResponse = CertificateResponse & {
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
      parsedBody: CertificateResponse;
    };
};

/**
 * Contains response data for the get operation.
 */
export type IotDpsResourceGetResponse = ProvisioningServiceDescription & {
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
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type IotDpsResourceCreateOrUpdateResponse = ProvisioningServiceDescription & {
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
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the update operation.
 */
export type IotDpsResourceUpdateResponse = ProvisioningServiceDescription & {
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
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type IotDpsResourceListBySubscriptionResponse = ProvisioningServiceDescriptionListResult & {
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
      parsedBody: ProvisioningServiceDescriptionListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type IotDpsResourceListByResourceGroupResponse = ProvisioningServiceDescriptionListResult & {
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
      parsedBody: ProvisioningServiceDescriptionListResult;
    };
};

/**
 * Contains response data for the getOperationResult operation.
 */
export type IotDpsResourceGetOperationResultResponse = AsyncOperationResult & {
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
      parsedBody: AsyncOperationResult;
    };
};

/**
 * Contains response data for the listValidSkus operation.
 */
export type IotDpsResourceListValidSkusResponse = IotDpsSkuDefinitionListResult & {
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
      parsedBody: IotDpsSkuDefinitionListResult;
    };
};

/**
 * Contains response data for the checkProvisioningServiceNameAvailability operation.
 */
export type IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse = NameAvailabilityInfo & {
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
      parsedBody: NameAvailabilityInfo;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type IotDpsResourceListKeysResponse = SharedAccessSignatureAuthorizationRuleListResult & {
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
      parsedBody: SharedAccessSignatureAuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the listKeysForKeyName operation.
 */
export type IotDpsResourceListKeysForKeyNameResponse = SharedAccessSignatureAuthorizationRuleAccessRightsDescription & {
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
      parsedBody: SharedAccessSignatureAuthorizationRuleAccessRightsDescription;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type IotDpsResourceBeginCreateOrUpdateResponse = ProvisioningServiceDescription & {
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
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type IotDpsResourceBeginUpdateResponse = ProvisioningServiceDescription & {
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
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type IotDpsResourceListBySubscriptionNextResponse = ProvisioningServiceDescriptionListResult & {
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
      parsedBody: ProvisioningServiceDescriptionListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type IotDpsResourceListByResourceGroupNextResponse = ProvisioningServiceDescriptionListResult & {
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
      parsedBody: ProvisioningServiceDescriptionListResult;
    };
};

/**
 * Contains response data for the listValidSkusNext operation.
 */
export type IotDpsResourceListValidSkusNextResponse = IotDpsSkuDefinitionListResult & {
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
      parsedBody: IotDpsSkuDefinitionListResult;
    };
};

/**
 * Contains response data for the listKeysNext operation.
 */
export type IotDpsResourceListKeysNextResponse = SharedAccessSignatureAuthorizationRuleListResult & {
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
      parsedBody: SharedAccessSignatureAuthorizationRuleListResult;
    };
};
