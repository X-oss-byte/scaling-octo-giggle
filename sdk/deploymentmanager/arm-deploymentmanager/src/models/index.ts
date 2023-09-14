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
 * Identity for the resource.
 */
export interface Identity {
  /**
   * The identity type.
   */
  type: string;
  /**
   * The list of identities.
   */
  identityIds: string[];
}

/**
 * The properties that define a step.
 */
export interface PrePostStep {
  /**
   * The resource Id of the step to be run.
   */
  stepId: string;
}

/**
 * The properties that define a Step group in a rollout.
 */
export interface StepGroup {
  /**
   * The name of the step group.
   */
  name: string;
  /**
   * The list of step group names on which this step group depends on.
   */
  dependsOnStepGroups?: string[];
  /**
   * The list of steps to be run before deploying the target.
   */
  preDeploymentSteps?: PrePostStep[];
  /**
   * The resource Id of service unit to be deployed. The service unit should be from the service
   * topology referenced in targetServiceTopologyId
   */
  deploymentTargetId: string;
  /**
   * The list of steps to be run after deploying the target.
   */
  postDeploymentSteps?: PrePostStep[];
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
 * Defines the PUT rollout request body.
 */
export interface RolloutRequest extends TrackedResource {
  /**
   * Identity for the resource.
   */
  identity: Identity;
  /**
   * The version of the build being deployed.
   */
  buildVersion: string;
  /**
   * The reference to the artifact source resource Id where the payload is located.
   */
  artifactSourceId?: string;
  /**
   * The resource Id of the service topology from which service units are being referenced in step
   * groups to be deployed.
   */
  targetServiceTopologyId: string;
  /**
   * The list of step groups that define the orchestration.
   */
  stepGroups: StepGroup[];
}

/**
 * The resource that defines the source location where the artifacts are located.
 */
export interface ArtifactSource extends TrackedResource {
  /**
   * The type of artifact source used.
   */
  sourceType: string;
  /**
   * The path from the location that the 'authentication' property [say, a SAS URI to the blob
   * container] refers to, to the location of the artifacts. This can be used to differentiate
   * different versions of the artifacts. Or, different types of artifacts like binaries or
   * templates. The location referenced by the authentication property concatenated with this
   * optional artifactRoot path forms the artifact source location where the artifacts are expected
   * to be found.
   */
  artifactRoot?: string;
  /**
   * The authentication method to use to access the artifact source.
   */
  authentication: AuthenticationUnion;
}

/**
 * Contains the possible cases for Authentication.
 */
export type AuthenticationUnion = Authentication | SasAuthentication;

/**
 * Defines the authentication method and properties to access the artifacts.
 */
export interface Authentication {
  /**
   * Polymorphic Discriminator
   */
  type: "Authentication";
}

/**
 * The properties that define the source location where the artifacts are located.
 */
export interface ArtifactSourcePropertiesModel {
  /**
   * The type of artifact source used.
   */
  sourceType: string;
  /**
   * The path from the location that the 'authentication' property [say, a SAS URI to the blob
   * container] refers to, to the location of the artifacts. This can be used to differentiate
   * different versions of the artifacts. Or, different types of artifacts like binaries or
   * templates. The location referenced by the authentication property concatenated with this
   * optional artifactRoot path forms the artifact source location where the artifacts are expected
   * to be found.
   */
  artifactRoot?: string;
  /**
   * The authentication method to use to access the artifact source.
   */
  authentication: AuthenticationUnion;
}

/**
 * Defines the properties to access the artifacts using an Azure Storage SAS URI.
 */
export interface SasAuthentication {
  /**
   * Polymorphic Discriminator
   */
  type: "Sas";
  /**
   * The SAS URI to the Azure Storage blob container. Any offset from the root of the container to
   * where the artifacts are located can be defined in the artifactRoot.
   */
  sasUri: string;
}

/**
 * Detailed error information of any failure.
 */
export interface CloudErrorBody {
  /**
   * Error code string.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * Descriptive error information.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * Error target
   */
  target?: string;
  /**
   * More detailed error information.
   */
  details?: CloudErrorBody[];
}

/**
 * Detailed runtime information of the rollout.
 */
export interface RolloutOperationInfo {
  /**
   * The ordinal count of the number of retry attempts on a rollout. 0 if no retries of the rollout
   * have been performed. If the rollout is updated with a PUT, this count is reset to 0.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly retryAttempt?: number;
  /**
   * True, if all steps that succeeded on the previous run/attempt were chosen to be skipped in
   * this retry attempt. False, otherwise.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly skipSucceededOnRetry?: boolean;
  /**
   * The start time of the rollout in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly startTime?: Date;
  /**
   * The start time of the rollout in UTC. This property will not be set if the rollout has not
   * completed yet.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly endTime?: Date;
  /**
   * The detailed error information for any failure.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly error?: CloudErrorBody;
}

/**
 * Detailed information of a specific step run.
 */
export interface StepOperationInfo {
  /**
   * The name of the ARM deployment initiated as part of the step.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deploymentName?: string;
  /**
   * Unique identifier to track the request for ARM-based resources.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly correlationId?: string;
  /**
   * Start time of the action in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly startTime?: Date;
  /**
   * End time of the action in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly endTime?: Date;
  /**
   * Last time in UTC this operation was updated.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastUpdatedTime?: Date;
  /**
   * The errors, if any, for the action.
   */
  error?: CloudErrorBody;
}

/**
 * Individual resource operation information.
 */
export interface ResourceOperation {
  /**
   * Name of the resource as specified in the artifacts. For ARM resources, this is the name of the
   * resource specified in the template.
   */
  resourceName?: string;
  /**
   * Unique identifier of the operation. For ARM resources, this is the operationId obtained from
   * ARM service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operationId?: string;
  /**
   * Type of the resource as specified in the artifacts. For ARM resources, this is the type of the
   * resource specified in the template.
   */
  resourceType?: string;
  /**
   * State of the resource deployment. For ARM resources, this is the current provisioning state of
   * the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
  /**
   * Descriptive information of the resource operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly statusMessage?: string;
  /**
   * Http status code of the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly statusCode?: string;
}

/**
 * Supplementary contextual messages during a rollout.
 */
export interface Message {
  /**
   * Time in UTC this message was provided.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly timeStamp?: Date;
  /**
   * The actual message text.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
}

/**
 * Defines a specific step on a target service unit.
 */
export interface RolloutStep {
  /**
   * Name of the step.
   */
  name: string;
  /**
   * Current state of the step.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: string;
  /**
   * The step group the current step is part of.
   */
  stepGroup?: string;
  /**
   * Detailed information of specific action execution.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operationInfo?: StepOperationInfo;
  /**
   * Set of resource operations that were performed, if any, on an Azure resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resourceOperations?: ResourceOperation[];
  /**
   * Supplementary informative messages during rollout.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly messages?: Message[];
}

/**
 * Defines the properties of a service unit.
 */
export interface ServiceUnitProperties {
  /**
   * The Azure Resource Group to which the resources in the service unit belong to or should be
   * deployed to.
   */
  targetResourceGroup: string;
  /**
   * Describes the type of ARM deployment to be performed on the resource. Possible values include:
   * 'Incremental', 'Complete'
   */
  deploymentMode: DeploymentMode;
  /**
   * The artifacts for the service unit.
   */
  artifacts?: ServiceUnitArtifacts;
}

/**
 * Defines a service unit.
 */
export interface ServiceUnit extends ServiceUnitProperties {
  /**
   * Name of the service unit.
   */
  name?: string;
  /**
   * Detailed step information, if present.
   */
  steps?: RolloutStep[];
}

/**
 * The properties of a service.
 */
export interface ServiceProperties {
  /**
   * The Azure location to which the resources in the service belong to or should be deployed to.
   */
  targetLocation: string;
  /**
   * The subscription to which the resources in the service belong to or should be deployed to.
   */
  targetSubscriptionId: string;
}

/**
 * Defines a service.
 */
export interface Service extends ServiceProperties {
  /**
   * Name of the service.
   */
  name?: string;
  /**
   * The detailed information about the units that make up the service.
   */
  serviceUnits?: ServiceUnit[];
}

/**
 * Defines the rollout.
 */
export interface Rollout extends TrackedResource {
  /**
   * Identity for the resource.
   */
  identity?: Identity;
  /**
   * The version of the build being deployed.
   */
  buildVersion: string;
  /**
   * The reference to the artifact source resource Id where the payload is located.
   */
  artifactSourceId?: string;
  /**
   * The resource Id of the service topology from which service units are being referenced in step
   * groups to be deployed.
   */
  targetServiceTopologyId: string;
  /**
   * The list of step groups that define the orchestration.
   */
  stepGroups: StepGroup[];
  /**
   * The current status of the rollout.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: string;
  /**
   * The cardinal count of total number of retries performed on the rollout at a given time.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly totalRetryAttempts?: number;
  /**
   * Operational information of the rollout.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operationInfo?: RolloutOperationInfo;
  /**
   * The detailed information on the services being deployed.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly services?: Service[];
}

/**
 * Defines the properties of a rollout.
 */
export interface RolloutPropertiesModel {
  /**
   * The current status of the rollout.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: string;
  /**
   * The cardinal count of total number of retries performed on the rollout at a given time.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly totalRetryAttempts?: number;
  /**
   * Operational information of the rollout.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operationInfo?: RolloutOperationInfo;
  /**
   * The detailed information on the services being deployed.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly services?: Service[];
}

/**
 * The resource representation of a service topology.
 */
export interface ServiceTopologyResource extends TrackedResource {
  /**
   * The resource Id of the artifact source that contains the artifacts that can be referenced in
   * the service units.
   */
  artifactSourceId?: string;
}

/**
 * The properties of a service topology.
 */
export interface ServiceTopologyProperties {
  /**
   * The resource Id of the artifact source that contains the artifacts that can be referenced in
   * the service units.
   */
  artifactSourceId?: string;
}

/**
 * The resource representation of a service in a service topology.
 */
export interface ServiceResource extends TrackedResource {
  /**
   * The Azure location to which the resources in the service belong to or should be deployed to.
   */
  targetLocation: string;
  /**
   * The subscription to which the resources in the service belong to or should be deployed to.
   */
  targetSubscriptionId: string;
}

/**
 * Represents the response of a service unit resource.
 */
export interface ServiceUnitResource extends TrackedResource {
  /**
   * The Azure Resource Group to which the resources in the service unit belong to or should be
   * deployed to.
   */
  targetResourceGroup: string;
  /**
   * Describes the type of ARM deployment to be performed on the resource. Possible values include:
   * 'Incremental', 'Complete'
   */
  deploymentMode: DeploymentMode;
  /**
   * The artifacts for the service unit.
   */
  artifacts?: ServiceUnitArtifacts;
}

/**
 * Defines the artifacts of a service unit.
 */
export interface ServiceUnitArtifacts {
  /**
   * The full URI of the ARM template file with the SAS token.
   */
  templateUri?: string;
  /**
   * The full URI of the ARM parameters file with the SAS token.
   */
  parametersUri?: string;
  /**
   * The path to the ARM template file relative to the artifact source.
   */
  templateArtifactSourceRelativePath?: string;
  /**
   * The path to the ARM parameters file relative to the artifact source.
   */
  parametersArtifactSourceRelativePath?: string;
}

/**
 * The detail about an operation.
 */
export interface OperationDetail {
  /**
   * The name of the provider that supports the operation.
   */
  provider?: string;
  /**
   * The resource type on which this operation can be performed.
   */
  resource?: string;
  /**
   * The name of the operation.
   */
  operation?: string;
  /**
   * The description of the operation.
   */
  description?: string;
}

/**
 * Represents an operation that can be performed on the service.
 */
export interface Operation {
  /**
   * The name of the operation.
   */
  name?: string;
  /**
   * The display name of the operation.
   */
  display?: OperationDetail;
  /**
   * The origin of the operation.
   */
  origin?: string;
  /**
   * The properties of the operation.
   */
  properties?: any;
}

/**
 * The operations response.
 */
export interface OperationsList {
  /**
   * The list of supported operations
   */
  value?: Operation;
}

/**
 * Contains the possible cases for StepProperties.
 */
export type StepPropertiesUnion = StepProperties | HealthCheckStepProperties | WaitStepProperties;

/**
 * The properties of a step resource.
 */
export interface StepProperties {
  /**
   * Polymorphic Discriminator
   */
  stepType: "StepProperties";
}

/**
 * The resource representation of a rollout step.
 */
export interface StepResource extends TrackedResource {
  /**
   * The properties that define the step.
   */
  properties: StepPropertiesUnion;
}

/**
 * Contains the possible cases for HealthCheckStepAttributes.
 */
export type HealthCheckStepAttributesUnion = HealthCheckStepAttributes | RestHealthCheckStepAttributes;

/**
 * The attributes for the health check step.
 */
export interface HealthCheckStepAttributes {
  /**
   * Polymorphic Discriminator
   */
  type: "HealthCheckStepAttributes";
  /**
   * The duration in ISO 8601 format for which health check waits idly without any checks.
   */
  waitDuration?: string;
  /**
   * The duration in ISO 8601 format for which the health check waits for the resource to become
   * healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration
   * once resource becomes healthy.
   */
  maxElasticDuration?: string;
  /**
   * The duration in ISO 8601 format for which the resource is expected to be continuously healthy.
   * If maxElasticDuration is specified, healthy state duration is enforced after the detection of
   * first healthy signal.
   */
  healthyStateDuration: string;
}

/**
 * Defines the properties of a health check step.
 */
export interface HealthCheckStepProperties {
  /**
   * Polymorphic Discriminator
   */
  stepType: "HealthCheck";
  /**
   * The health check step attributes
   */
  attributes: HealthCheckStepAttributesUnion;
}

/**
 * Contains the possible cases for RestRequestAuthentication.
 */
export type RestRequestAuthenticationUnion = RestRequestAuthentication | RolloutIdentityAuthentication | ApiKeyAuthentication;

/**
 * The authentication information required in the REST health check request to the health provider.
 */
export interface RestRequestAuthentication {
  /**
   * Polymorphic Discriminator
   */
  type: "RestRequestAuthentication";
}

/**
 * The properties that make up a REST request
 */
export interface RestRequest {
  /**
   * The HTTP method to use for the request. Possible values include: 'GET', 'POST'
   */
  method: RestRequestMethod;
  /**
   * The HTTP URI to use for the request.
   */
  uri: string;
  /**
   * The authentication information required in the request to the health provider.
   */
  authentication: RestRequestAuthenticationUnion;
}

/**
 * The regular expressions to match the response content with.
 */
export interface RestResponseRegex {
  /**
   * The list of regular expressions.
   */
  matches?: string[];
  /**
   * Indicates whether any or all of the expressions should match with the response content.
   * Possible values include: 'All', 'Any'
   */
  matchQuantifier?: RestMatchQuantifier;
}

/**
 * The properties that make up the expected REST response
 */
export interface RestResponse {
  /**
   * The HTTP status codes expected in a successful health check response. The response is expected
   * to match one of the given status codes. If no expected status codes are provided, default
   * expected status code is 200 OK.
   */
  successStatusCodes?: string[];
  /**
   * The regular expressions to match the response content with.
   */
  regex?: RestResponseRegex;
}

/**
 * A REST based health check
 */
export interface RestHealthCheck {
  /**
   * A unique name for this check.
   */
  name: string;
  /**
   * The request to the health provider.
   */
  request: RestRequest;
  /**
   * The expected response from the health provider. If no expected response is provided, the
   * default is to expect the received response to have an HTTP status code of 200 OK.
   */
  response?: RestResponse;
}

/**
 * Defines the REST health check step properties.
 */
export interface RestHealthCheckStepAttributes {
  /**
   * Polymorphic Discriminator
   */
  type: "REST";
  /**
   * The duration in ISO 8601 format for which health check waits idly without any checks.
   */
  waitDuration?: string;
  /**
   * The duration in ISO 8601 format for which the health check waits for the resource to become
   * healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration
   * once resource becomes healthy.
   */
  maxElasticDuration?: string;
  /**
   * The duration in ISO 8601 format for which the resource is expected to be continuously healthy.
   * If maxElasticDuration is specified, healthy state duration is enforced after the detection of
   * first healthy signal.
   */
  healthyStateDuration: string;
  /**
   * The list of checks that form the health check step.
   */
  healthChecks: RestHealthCheck[];
}

/**
 * RolloutIdentity uses the user-assigned managed identity authentication context specified in the
 * Identity property during rollout creation.
 */
export interface RolloutIdentityAuthentication {
  /**
   * Polymorphic Discriminator
   */
  type: "RolloutIdentity";
}

/**
 * ApiKey authentication gives a name and a value that can be included in either the request header
 * or query parameters.
 */
export interface ApiKeyAuthentication {
  /**
   * Polymorphic Discriminator
   */
  type: "ApiKey";
  /**
   * The key name of the authentication key/value pair.
   */
  name: string;
  /**
   * The location of the authentication key/value pair in the request. Possible values include:
   * 'Query', 'Header'
   */
  inProperty: RestAuthLocation;
  /**
   * The value of the authentication key/value pair.
   */
  value: string;
}

/**
 * The parameters for the wait step.
 */
export interface WaitStepAttributes {
  /**
   * The duration in ISO 8601 format of how long the wait should be.
   */
  duration: string;
}

/**
 * Defines the properties of a Wait step.
 */
export interface WaitStepProperties {
  /**
   * Polymorphic Discriminator
   */
  stepType: "Wait";
  /**
   * The Wait attributes
   */
  attributes: WaitStepAttributes;
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
export interface StepsCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The step object.
   */
  stepInfo?: StepResource;
}

/**
 * Optional Parameters.
 */
export interface RolloutsCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Source rollout request object that defines the rollout.
   */
  rolloutRequest?: RolloutRequest;
}

/**
 * Optional Parameters.
 */
export interface RolloutsGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Rollout retry attempt ordinal to get the result of. If not specified, result of the latest
   * attempt will be returned.
   */
  retryAttempt?: number;
}

/**
 * Optional Parameters.
 */
export interface RolloutsRestartOptionalParams extends msRest.RequestOptionsBase {
  /**
   * If true, will skip all succeeded steps so far in the rollout. If false, will execute the
   * entire rollout again regardless of the current state of individual resources. Defaults to
   * false if not specified.
   */
  skipSucceeded?: boolean;
}

/**
 * Optional Parameters.
 */
export interface RolloutsBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Source rollout request object that defines the rollout.
   */
  rolloutRequest?: RolloutRequest;
}

/**
 * Optional Parameters.
 */
export interface ArtifactSourcesCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Source object that defines the resource.
   */
  artifactSourceInfo?: ArtifactSource;
}

/**
 * An interface representing AzureDeploymentManagerOptions.
 */
export interface AzureDeploymentManagerOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Defines headers for CreateOrUpdate operation.
 */
export interface ServiceUnitsCreateOrUpdateHeaders {
  /**
   * Contains the status URL on which clients are expected to poll the status of the operation.
   */
  azureAsyncOperation: string;
}

/**
 * Defines headers for CreateOrUpdate operation.
 */
export interface RolloutsCreateOrUpdateHeaders {
  /**
   * Contains the status URL on which clients are expected to poll the status of the operation.
   */
  azureAsyncOperation: string;
}

/**
 * Defines values for DeploymentMode.
 * Possible values include: 'Incremental', 'Complete'
 * @readonly
 * @enum {string}
 */
export type DeploymentMode = 'Incremental' | 'Complete';

/**
 * Defines values for RestRequestMethod.
 * Possible values include: 'GET', 'POST'
 * @readonly
 * @enum {string}
 */
export type RestRequestMethod = 'GET' | 'POST';

/**
 * Defines values for RestMatchQuantifier.
 * Possible values include: 'All', 'Any'
 * @readonly
 * @enum {string}
 */
export type RestMatchQuantifier = 'All' | 'Any';

/**
 * Defines values for RestAuthLocation.
 * Possible values include: 'Query', 'Header'
 * @readonly
 * @enum {string}
 */
export type RestAuthLocation = 'Query' | 'Header';

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ServiceTopologiesCreateOrUpdateResponse = ServiceTopologyResource & {
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
      parsedBody: ServiceTopologyResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ServiceTopologiesGetResponse = ServiceTopologyResource & {
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
      parsedBody: ServiceTopologyResource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ServiceTopologiesListResponse = Array<ServiceTopologyResource> & {
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
      parsedBody: ServiceTopologyResource[];
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ServicesCreateOrUpdateResponse = ServiceResource & {
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
      parsedBody: ServiceResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ServicesGetResponse = ServiceResource & {
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
      parsedBody: ServiceResource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ServicesListResponse = Array<ServiceResource> & {
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
      parsedBody: ServiceResource[];
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ServiceUnitsCreateOrUpdateResponse = ServiceUnitResource & ServiceUnitsCreateOrUpdateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: ServiceUnitsCreateOrUpdateHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ServiceUnitResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ServiceUnitsGetResponse = ServiceUnitResource & {
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
      parsedBody: ServiceUnitResource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ServiceUnitsListResponse = Array<ServiceUnitResource> & {
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
      parsedBody: ServiceUnitResource[];
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type StepsCreateOrUpdateResponse = StepResource & {
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
      parsedBody: StepResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type StepsGetResponse = StepResource & {
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
      parsedBody: StepResource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type StepsListResponse = Array<StepResource> & {
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
      parsedBody: StepResource[];
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type RolloutsCreateOrUpdateResponse = RolloutRequest & RolloutsCreateOrUpdateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: RolloutsCreateOrUpdateHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RolloutRequest;
    };
};

/**
 * Contains response data for the get operation.
 */
export type RolloutsGetResponse = Rollout & {
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
      parsedBody: Rollout;
    };
};

/**
 * Contains response data for the cancel operation.
 */
export type RolloutsCancelResponse = Rollout & {
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
      parsedBody: Rollout;
    };
};

/**
 * Contains response data for the restart operation.
 */
export type RolloutsRestartResponse = Rollout & {
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
      parsedBody: Rollout;
    };
};

/**
 * Contains response data for the list operation.
 */
export type RolloutsListResponse = Array<Rollout> & {
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
      parsedBody: Rollout[];
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ArtifactSourcesCreateOrUpdateResponse = ArtifactSource & {
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
      parsedBody: ArtifactSource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ArtifactSourcesGetResponse = ArtifactSource & {
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
      parsedBody: ArtifactSource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ArtifactSourcesListResponse = Array<ArtifactSource> & {
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
      parsedBody: ArtifactSource[];
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationsList & {
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
      parsedBody: OperationsList;
    };
};
