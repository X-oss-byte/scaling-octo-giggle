/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  AppServiceCertificateOrder as AppServiceCertificateOrderMapper,
  AppServiceCertificateOrderPatchResource as AppServiceCertificateOrderPatchResourceMapper,
  AppServiceCertificateResource as AppServiceCertificateResourceMapper,
  AppServiceCertificatePatchResource as AppServiceCertificatePatchResourceMapper,
  ReissueCertificateOrderRequest as ReissueCertificateOrderRequestMapper,
  RenewCertificateOrderRequest as RenewCertificateOrderRequestMapper,
  NameIdentifier as NameIdentifierMapper,
  SiteSealRequest as SiteSealRequestMapper,
  DomainRecommendationSearchParameters as DomainRecommendationSearchParametersMapper,
  Domain as DomainMapper,
  DomainPatchResource as DomainPatchResourceMapper,
  DomainOwnershipIdentifier as DomainOwnershipIdentifierMapper,
  TopLevelDomainAgreementOption as TopLevelDomainAgreementOptionMapper,
  AppServiceEnvironmentResource as AppServiceEnvironmentResourceMapper,
  AppServiceEnvironmentPatchResource as AppServiceEnvironmentPatchResourceMapper,
  VirtualNetworkProfile as VirtualNetworkProfileMapper,
  AseV3NetworkingConfiguration as AseV3NetworkingConfigurationMapper,
  WorkerPoolResource as WorkerPoolResourceMapper,
  PrivateLinkConnectionApprovalRequestResource as PrivateLinkConnectionApprovalRequestResourceMapper,
  AppServicePlan as AppServicePlanMapper,
  AppServicePlanPatchResource as AppServicePlanPatchResourceMapper,
  VnetGateway as VnetGatewayMapper,
  VnetRoute as VnetRouteMapper,
  Certificate as CertificateMapper,
  CertificatePatchResource as CertificatePatchResourceMapper,
  ContainerApp as ContainerAppMapper,
  KubeEnvironment as KubeEnvironmentMapper,
  KubeEnvironmentPatchResource as KubeEnvironmentPatchResourceMapper,
  User as UserMapper,
  SourceControl as SourceControlMapper,
  ResourceNameAvailabilityRequest as ResourceNameAvailabilityRequestMapper,
  VnetParameters as VnetParametersMapper,
  CsmMoveResourceEnvelope as CsmMoveResourceEnvelopeMapper,
  ValidateRequest as ValidateRequestMapper,
  StaticSitesWorkflowPreviewRequest as StaticSitesWorkflowPreviewRequestMapper,
  StaticSiteARMResource as StaticSiteARMResourceMapper,
  StaticSitePatchResource as StaticSitePatchResourceMapper,
  StaticSiteUserARMResource as StaticSiteUserARMResourceMapper,
  StringDictionary as StringDictionaryMapper,
  StaticSiteUserProvidedFunctionAppARMResource as StaticSiteUserProvidedFunctionAppARMResourceMapper,
  StaticSiteZipDeploymentARMResource as StaticSiteZipDeploymentARMResourceMapper,
  StaticSiteUserInvitationRequestResource as StaticSiteUserInvitationRequestResourceMapper,
  StaticSiteCustomDomainRequestPropertiesARMResource as StaticSiteCustomDomainRequestPropertiesARMResourceMapper,
  StaticSiteResetPropertiesARMResource as StaticSiteResetPropertiesARMResourceMapper,
  Site as SiteMapper,
  SitePatchResource as SitePatchResourceMapper,
  CsmSlotEntity as CsmSlotEntityMapper,
  BackupRequest as BackupRequestMapper,
  RestoreRequest as RestoreRequestMapper,
  CsmPublishingCredentialsPoliciesEntity as CsmPublishingCredentialsPoliciesEntityMapper,
  SiteAuthSettings as SiteAuthSettingsMapper,
  SiteAuthSettingsV2 as SiteAuthSettingsV2Mapper,
  AzureStoragePropertyDictionaryResource as AzureStoragePropertyDictionaryResourceMapper,
  ConnectionStringDictionary as ConnectionStringDictionaryMapper,
  SiteLogsConfig as SiteLogsConfigMapper,
  PushSettings as PushSettingsMapper,
  SlotConfigNamesResource as SlotConfigNamesResourceMapper,
  SiteConfigResource as SiteConfigResourceMapper,
  Deployment as DeploymentMapper,
  Identifier as IdentifierMapper,
  MSDeploy as MSDeployMapper,
  FunctionEnvelope as FunctionEnvelopeMapper,
  KeyInfo as KeyInfoMapper,
  HostNameBinding as HostNameBindingMapper,
  HybridConnection as HybridConnectionMapper,
  RelayServiceConnectionEntity as RelayServiceConnectionEntityMapper,
  StorageMigrationOptions as StorageMigrationOptionsMapper,
  MigrateMySqlRequest as MigrateMySqlRequestMapper,
  SwiftVirtualNetwork as SwiftVirtualNetworkMapper,
  PremierAddOn as PremierAddOnMapper,
  PremierAddOnPatchResource as PremierAddOnPatchResourceMapper,
  PrivateAccess as PrivateAccessMapper,
  PublicCertificate as PublicCertificateMapper,
  CsmPublishingProfileOptions as CsmPublishingProfileOptionsMapper,
  DeletedAppRestoreRequest as DeletedAppRestoreRequestMapper,
  SnapshotRestoreRequest as SnapshotRestoreRequestMapper,
  SiteSourceControl as SiteSourceControlMapper,
  VnetInfoResource as VnetInfoResourceMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    xmlName: "$host",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    xmlName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const appServiceCertificateOrder: OperationParameter = {
  parameterPath: "appServiceCertificateOrder",
  mapper: AppServiceCertificateOrderMapper
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+[^\\.]$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    xmlName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};

export const certificateOrderName: OperationURLParameter = {
  parameterPath: "certificateOrderName",
  mapper: {
    serializedName: "certificateOrderName",
    required: true,
    xmlName: "certificateOrderName",
    type: {
      name: "String"
    }
  }
};

export const certificateDistinguishedName: OperationParameter = {
  parameterPath: "certificateDistinguishedName",
  mapper: AppServiceCertificateOrderMapper
};

export const certificateDistinguishedName1: OperationParameter = {
  parameterPath: "certificateDistinguishedName",
  mapper: AppServiceCertificateOrderPatchResourceMapper
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    xmlName: "name",
    type: {
      name: "String"
    }
  }
};

export const keyVaultCertificate: OperationParameter = {
  parameterPath: "keyVaultCertificate",
  mapper: AppServiceCertificateResourceMapper
};

export const keyVaultCertificate1: OperationParameter = {
  parameterPath: "keyVaultCertificate",
  mapper: AppServiceCertificatePatchResourceMapper
};

export const reissueCertificateOrderRequest: OperationParameter = {
  parameterPath: "reissueCertificateOrderRequest",
  mapper: ReissueCertificateOrderRequestMapper
};

export const renewCertificateOrderRequest: OperationParameter = {
  parameterPath: "renewCertificateOrderRequest",
  mapper: RenewCertificateOrderRequestMapper
};

export const nameIdentifier: OperationParameter = {
  parameterPath: "nameIdentifier",
  mapper: NameIdentifierMapper
};

export const siteSealRequest: OperationParameter = {
  parameterPath: "siteSealRequest",
  mapper: SiteSealRequestMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    xmlName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const detectorName: OperationURLParameter = {
  parameterPath: "detectorName",
  mapper: {
    serializedName: "detectorName",
    required: true,
    xmlName: "detectorName",
    type: {
      name: "String"
    }
  }
};

export const startTime: OperationQueryParameter = {
  parameterPath: ["options", "startTime"],
  mapper: {
    serializedName: "startTime",
    xmlName: "startTime",
    type: {
      name: "DateTime"
    }
  }
};

export const endTime: OperationQueryParameter = {
  parameterPath: ["options", "endTime"],
  mapper: {
    serializedName: "endTime",
    xmlName: "endTime",
    type: {
      name: "DateTime"
    }
  }
};

export const timeGrain: OperationQueryParameter = {
  parameterPath: ["options", "timeGrain"],
  mapper: {
    constraints: {
      Pattern: new RegExp("PT[1-9][0-9]+[SMH]")
    },
    serializedName: "timeGrain",
    xmlName: "timeGrain",
    type: {
      name: "String"
    }
  }
};

export const identifier: OperationParameter = {
  parameterPath: "identifier",
  mapper: NameIdentifierMapper
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: DomainRecommendationSearchParametersMapper
};

export const domainName: OperationURLParameter = {
  parameterPath: "domainName",
  mapper: {
    serializedName: "domainName",
    required: true,
    xmlName: "domainName",
    type: {
      name: "String"
    }
  }
};

export const domain: OperationParameter = {
  parameterPath: "domain",
  mapper: DomainMapper
};

export const domainName1: OperationURLParameter = {
  parameterPath: "domainName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9][a-zA-Z0-9\\.-]+")
    },
    serializedName: "domainName",
    required: true,
    xmlName: "domainName",
    type: {
      name: "String"
    }
  }
};

export const forceHardDeleteDomain: OperationQueryParameter = {
  parameterPath: ["options", "forceHardDeleteDomain"],
  mapper: {
    serializedName: "forceHardDeleteDomain",
    xmlName: "forceHardDeleteDomain",
    type: {
      name: "Boolean"
    }
  }
};

export const domain1: OperationParameter = {
  parameterPath: "domain",
  mapper: DomainPatchResourceMapper
};

export const domainOwnershipIdentifier: OperationParameter = {
  parameterPath: "domainOwnershipIdentifier",
  mapper: DomainOwnershipIdentifierMapper
};

export const agreementOption: OperationParameter = {
  parameterPath: "agreementOption",
  mapper: TopLevelDomainAgreementOptionMapper
};

export const hostingEnvironmentEnvelope: OperationParameter = {
  parameterPath: "hostingEnvironmentEnvelope",
  mapper: AppServiceEnvironmentResourceMapper
};

export const forceDelete: OperationQueryParameter = {
  parameterPath: ["options", "forceDelete"],
  mapper: {
    serializedName: "forceDelete",
    xmlName: "forceDelete",
    type: {
      name: "Boolean"
    }
  }
};

export const hostingEnvironmentEnvelope1: OperationParameter = {
  parameterPath: "hostingEnvironmentEnvelope",
  mapper: AppServiceEnvironmentPatchResourceMapper
};

export const vnetInfo: OperationParameter = {
  parameterPath: "vnetInfo",
  mapper: VirtualNetworkProfileMapper
};

export const aseNetworkingConfiguration: OperationParameter = {
  parameterPath: "aseNetworkingConfiguration",
  mapper: AseV3NetworkingConfigurationMapper
};

export const diagnosticsName: OperationURLParameter = {
  parameterPath: "diagnosticsName",
  mapper: {
    serializedName: "diagnosticsName",
    required: true,
    xmlName: "diagnosticsName",
    type: {
      name: "String"
    }
  }
};

export const multiRolePoolEnvelope: OperationParameter = {
  parameterPath: "multiRolePoolEnvelope",
  mapper: WorkerPoolResourceMapper
};

export const instance: OperationURLParameter = {
  parameterPath: "instance",
  mapper: {
    serializedName: "instance",
    required: true,
    xmlName: "instance",
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    xmlName: "privateEndpointConnectionName",
    type: {
      name: "String"
    }
  }
};

export const privateEndpointWrapper: OperationParameter = {
  parameterPath: "privateEndpointWrapper",
  mapper: PrivateLinkConnectionApprovalRequestResourceMapper
};

export const propertiesToInclude: OperationQueryParameter = {
  parameterPath: ["options", "propertiesToInclude"],
  mapper: {
    serializedName: "propertiesToInclude",
    xmlName: "propertiesToInclude",
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    xmlName: "$filter",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const workerPoolName: OperationURLParameter = {
  parameterPath: "workerPoolName",
  mapper: {
    serializedName: "workerPoolName",
    required: true,
    xmlName: "workerPoolName",
    type: {
      name: "String"
    }
  }
};

export const workerPoolEnvelope: OperationParameter = {
  parameterPath: "workerPoolEnvelope",
  mapper: WorkerPoolResourceMapper
};

export const detailed: OperationQueryParameter = {
  parameterPath: ["options", "detailed"],
  mapper: {
    serializedName: "detailed",
    xmlName: "detailed",
    type: {
      name: "Boolean"
    }
  }
};

export const appServicePlan: OperationParameter = {
  parameterPath: "appServicePlan",
  mapper: AppServicePlanMapper
};

export const appServicePlan1: OperationParameter = {
  parameterPath: "appServicePlan",
  mapper: AppServicePlanPatchResourceMapper
};

export const namespaceName: OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    serializedName: "namespaceName",
    required: true,
    xmlName: "namespaceName",
    type: {
      name: "String"
    }
  }
};

export const relayName: OperationURLParameter = {
  parameterPath: "relayName",
  mapper: {
    serializedName: "relayName",
    required: true,
    xmlName: "relayName",
    type: {
      name: "String"
    }
  }
};

export const softRestart: OperationQueryParameter = {
  parameterPath: ["options", "softRestart"],
  mapper: {
    serializedName: "softRestart",
    xmlName: "softRestart",
    type: {
      name: "Boolean"
    }
  }
};

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "$skipToken",
    xmlName: "$skipToken",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    xmlName: "$top",
    type: {
      name: "String"
    }
  }
};

export const vnetName: OperationURLParameter = {
  parameterPath: "vnetName",
  mapper: {
    serializedName: "vnetName",
    required: true,
    xmlName: "vnetName",
    type: {
      name: "String"
    }
  }
};

export const gatewayName: OperationURLParameter = {
  parameterPath: "gatewayName",
  mapper: {
    serializedName: "gatewayName",
    required: true,
    xmlName: "gatewayName",
    type: {
      name: "String"
    }
  }
};

export const connectionEnvelope: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: VnetGatewayMapper
};

export const routeName: OperationURLParameter = {
  parameterPath: "routeName",
  mapper: {
    serializedName: "routeName",
    required: true,
    xmlName: "routeName",
    type: {
      name: "String"
    }
  }
};

export const route: OperationParameter = {
  parameterPath: "route",
  mapper: VnetRouteMapper
};

export const workerName: OperationURLParameter = {
  parameterPath: "workerName",
  mapper: {
    serializedName: "workerName",
    required: true,
    xmlName: "workerName",
    type: {
      name: "String"
    }
  }
};

export const certificateEnvelope: OperationParameter = {
  parameterPath: "certificateEnvelope",
  mapper: CertificateMapper
};

export const certificateEnvelope1: OperationParameter = {
  parameterPath: "certificateEnvelope",
  mapper: CertificatePatchResourceMapper
};

export const containerAppEnvelope: OperationParameter = {
  parameterPath: "containerAppEnvelope",
  mapper: ContainerAppMapper
};

export const containerAppName: OperationURLParameter = {
  parameterPath: "containerAppName",
  mapper: {
    serializedName: "containerAppName",
    required: true,
    xmlName: "containerAppName",
    type: {
      name: "String"
    }
  }
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    xmlName: "location",
    type: {
      name: "String"
    }
  }
};

export const deletedSiteId: OperationURLParameter = {
  parameterPath: "deletedSiteId",
  mapper: {
    serializedName: "deletedSiteId",
    required: true,
    xmlName: "deletedSiteId",
    type: {
      name: "String"
    }
  }
};

export const siteName: OperationURLParameter = {
  parameterPath: "siteName",
  mapper: {
    serializedName: "siteName",
    required: true,
    xmlName: "siteName",
    type: {
      name: "String"
    }
  }
};

export const diagnosticCategory: OperationURLParameter = {
  parameterPath: "diagnosticCategory",
  mapper: {
    serializedName: "diagnosticCategory",
    required: true,
    xmlName: "diagnosticCategory",
    type: {
      name: "String"
    }
  }
};

export const analysisName: OperationURLParameter = {
  parameterPath: "analysisName",
  mapper: {
    serializedName: "analysisName",
    required: true,
    xmlName: "analysisName",
    type: {
      name: "String"
    }
  }
};

export const slot: OperationURLParameter = {
  parameterPath: "slot",
  mapper: {
    serializedName: "slot",
    required: true,
    xmlName: "slot",
    type: {
      name: "String"
    }
  }
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    xmlName: "operationId",
    type: {
      name: "String"
    }
  }
};

export const kubeEnvironmentEnvelope: OperationParameter = {
  parameterPath: "kubeEnvironmentEnvelope",
  mapper: KubeEnvironmentMapper
};

export const kubeEnvironmentEnvelope1: OperationParameter = {
  parameterPath: "kubeEnvironmentEnvelope",
  mapper: KubeEnvironmentPatchResourceMapper
};

export const osTypeSelected: OperationQueryParameter = {
  parameterPath: ["options", "osTypeSelected"],
  mapper: {
    serializedName: "osTypeSelected",
    xmlName: "osTypeSelected",
    type: {
      name: "String"
    }
  }
};

export const stackOsType: OperationQueryParameter = {
  parameterPath: ["options", "stackOsType"],
  mapper: {
    serializedName: "stackOsType",
    xmlName: "stackOsType",
    type: {
      name: "String"
    }
  }
};

export const stackOsType1: OperationQueryParameter = {
  parameterPath: ["options", "stackOsType"],
  mapper: {
    serializedName: "stackOsType",
    xmlName: "stackOsType",
    type: {
      name: "String"
    }
  }
};

export const stackOsType2: OperationQueryParameter = {
  parameterPath: ["options", "stackOsType"],
  mapper: {
    serializedName: "stackOsType",
    xmlName: "stackOsType",
    type: {
      name: "String"
    }
  }
};

export const stackOsType3: OperationQueryParameter = {
  parameterPath: ["options", "stackOsType"],
  mapper: {
    serializedName: "stackOsType",
    xmlName: "stackOsType",
    type: {
      name: "String"
    }
  }
};

export const osTypeSelected1: OperationQueryParameter = {
  parameterPath: ["options", "osTypeSelected"],
  mapper: {
    serializedName: "osTypeSelected",
    xmlName: "osTypeSelected",
    type: {
      name: "String"
    }
  }
};

export const featured: OperationQueryParameter = {
  parameterPath: ["options", "featured"],
  mapper: {
    serializedName: "featured",
    xmlName: "featured",
    type: {
      name: "Boolean"
    }
  }
};

export const hostingEnvironmentName: OperationURLParameter = {
  parameterPath: "hostingEnvironmentName",
  mapper: {
    serializedName: "hostingEnvironmentName",
    required: true,
    xmlName: "hostingEnvironmentName",
    type: {
      name: "String"
    }
  }
};

export const expiredOnly: OperationQueryParameter = {
  parameterPath: ["options", "expiredOnly"],
  mapper: {
    serializedName: "expiredOnly",
    xmlName: "expiredOnly",
    type: {
      name: "Boolean"
    }
  }
};

export const environmentName: OperationQueryParameter = {
  parameterPath: "environmentName",
  mapper: {
    serializedName: "environmentName",
    required: true,
    xmlName: "environmentName",
    type: {
      name: "String"
    }
  }
};

export const updateSeen: OperationQueryParameter = {
  parameterPath: ["options", "updateSeen"],
  mapper: {
    serializedName: "updateSeen",
    xmlName: "updateSeen",
    type: {
      name: "Boolean"
    }
  }
};

export const recommendationId: OperationQueryParameter = {
  parameterPath: ["options", "recommendationId"],
  mapper: {
    serializedName: "recommendationId",
    xmlName: "recommendationId",
    type: {
      name: "String"
    }
  }
};

export const userDetails: OperationParameter = {
  parameterPath: "userDetails",
  mapper: UserMapper
};

export const sourceControlType: OperationURLParameter = {
  parameterPath: "sourceControlType",
  mapper: {
    serializedName: "sourceControlType",
    required: true,
    xmlName: "sourceControlType",
    type: {
      name: "String"
    }
  }
};

export const requestMessage: OperationParameter = {
  parameterPath: "requestMessage",
  mapper: SourceControlMapper
};

export const billingLocation: OperationQueryParameter = {
  parameterPath: ["options", "billingLocation"],
  mapper: {
    serializedName: "billingLocation",
    xmlName: "billingLocation",
    type: {
      name: "String"
    }
  }
};

export const osType: OperationQueryParameter = {
  parameterPath: ["options", "osType"],
  mapper: {
    serializedName: "osType",
    xmlName: "osType",
    type: {
      name: "String"
    }
  }
};

export const name1: OperationParameter = {
  parameterPath: "name",
  mapper: ResourceNameAvailabilityRequestMapper
};

export const typeParam: OperationParameter = {
  parameterPath: "typeParam",
  mapper: ResourceNameAvailabilityRequestMapper
};

export const isFqdn: OperationParameter = {
  parameterPath: ["options", "isFqdn"],
  mapper: ResourceNameAvailabilityRequestMapper
};

export const sku: OperationQueryParameter = {
  parameterPath: ["options", "sku"],
  mapper: {
    serializedName: "sku",
    xmlName: "sku",
    type: {
      name: "String"
    }
  }
};

export const linuxWorkersEnabled: OperationQueryParameter = {
  parameterPath: ["options", "linuxWorkersEnabled"],
  mapper: {
    serializedName: "linuxWorkersEnabled",
    xmlName: "linuxWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};

export const xenonWorkersEnabled: OperationQueryParameter = {
  parameterPath: ["options", "xenonWorkersEnabled"],
  mapper: {
    serializedName: "xenonWorkersEnabled",
    xmlName: "xenonWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};

export const linuxDynamicWorkersEnabled: OperationQueryParameter = {
  parameterPath: ["options", "linuxDynamicWorkersEnabled"],
  mapper: {
    serializedName: "linuxDynamicWorkersEnabled",
    xmlName: "linuxDynamicWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: VnetParametersMapper
};

export const moveResourceEnvelope: OperationParameter = {
  parameterPath: "moveResourceEnvelope",
  mapper: CsmMoveResourceEnvelopeMapper
};

export const validateRequest: OperationParameter = {
  parameterPath: "validateRequest",
  mapper: ValidateRequestMapper
};

export const staticSitesWorkflowPreviewRequest: OperationParameter = {
  parameterPath: "staticSitesWorkflowPreviewRequest",
  mapper: StaticSitesWorkflowPreviewRequestMapper
};

export const staticSiteEnvelope: OperationParameter = {
  parameterPath: "staticSiteEnvelope",
  mapper: StaticSiteARMResourceMapper
};

export const staticSiteEnvelope1: OperationParameter = {
  parameterPath: "staticSiteEnvelope",
  mapper: StaticSitePatchResourceMapper
};

export const authprovider: OperationURLParameter = {
  parameterPath: "authprovider",
  mapper: {
    serializedName: "authprovider",
    required: true,
    xmlName: "authprovider",
    type: {
      name: "String"
    }
  }
};

export const userid: OperationURLParameter = {
  parameterPath: "userid",
  mapper: {
    serializedName: "userid",
    required: true,
    xmlName: "userid",
    type: {
      name: "String"
    }
  }
};

export const staticSiteUserEnvelope: OperationParameter = {
  parameterPath: "staticSiteUserEnvelope",
  mapper: StaticSiteUserARMResourceMapper
};

export const environmentName1: OperationURLParameter = {
  parameterPath: "environmentName",
  mapper: {
    serializedName: "environmentName",
    required: true,
    xmlName: "environmentName",
    type: {
      name: "String"
    }
  }
};

export const appSettings: OperationParameter = {
  parameterPath: "appSettings",
  mapper: StringDictionaryMapper
};

export const functionAppName: OperationURLParameter = {
  parameterPath: "functionAppName",
  mapper: {
    serializedName: "functionAppName",
    required: true,
    xmlName: "functionAppName",
    type: {
      name: "String"
    }
  }
};

export const staticSiteUserProvidedFunctionEnvelope: OperationParameter = {
  parameterPath: "staticSiteUserProvidedFunctionEnvelope",
  mapper: StaticSiteUserProvidedFunctionAppARMResourceMapper
};

export const isForced: OperationQueryParameter = {
  parameterPath: ["options", "isForced"],
  mapper: {
    serializedName: "isForced",
    xmlName: "isForced",
    type: {
      name: "Boolean"
    }
  }
};

export const staticSiteZipDeploymentEnvelope: OperationParameter = {
  parameterPath: "staticSiteZipDeploymentEnvelope",
  mapper: StaticSiteZipDeploymentARMResourceMapper
};

export const staticSiteUserRolesInvitationEnvelope: OperationParameter = {
  parameterPath: "staticSiteUserRolesInvitationEnvelope",
  mapper: StaticSiteUserInvitationRequestResourceMapper
};

export const staticSiteCustomDomainRequestPropertiesEnvelope: OperationParameter = {
  parameterPath: "staticSiteCustomDomainRequestPropertiesEnvelope",
  mapper: StaticSiteCustomDomainRequestPropertiesARMResourceMapper
};

export const resetPropertiesEnvelope: OperationParameter = {
  parameterPath: "resetPropertiesEnvelope",
  mapper: StaticSiteResetPropertiesARMResourceMapper
};

export const includeSlots: OperationQueryParameter = {
  parameterPath: ["options", "includeSlots"],
  mapper: {
    serializedName: "includeSlots",
    xmlName: "includeSlots",
    type: {
      name: "Boolean"
    }
  }
};

export const siteEnvelope: OperationParameter = {
  parameterPath: "siteEnvelope",
  mapper: SiteMapper
};

export const deleteMetrics: OperationQueryParameter = {
  parameterPath: ["options", "deleteMetrics"],
  mapper: {
    serializedName: "deleteMetrics",
    xmlName: "deleteMetrics",
    type: {
      name: "Boolean"
    }
  }
};

export const deleteEmptyServerFarm: OperationQueryParameter = {
  parameterPath: ["options", "deleteEmptyServerFarm"],
  mapper: {
    serializedName: "deleteEmptyServerFarm",
    xmlName: "deleteEmptyServerFarm",
    type: {
      name: "Boolean"
    }
  }
};

export const siteEnvelope1: OperationParameter = {
  parameterPath: "siteEnvelope",
  mapper: SitePatchResourceMapper
};

export const hostName: OperationQueryParameter = {
  parameterPath: ["options", "hostName"],
  mapper: {
    serializedName: "hostName",
    xmlName: "hostName",
    type: {
      name: "String"
    }
  }
};

export const slotSwapEntity: OperationParameter = {
  parameterPath: "slotSwapEntity",
  mapper: CsmSlotEntityMapper
};

export const request1: OperationParameter = {
  parameterPath: "request",
  mapper: BackupRequestMapper
};

export const backupId: OperationURLParameter = {
  parameterPath: "backupId",
  mapper: {
    serializedName: "backupId",
    required: true,
    xmlName: "backupId",
    type: {
      name: "String"
    }
  }
};

export const request2: OperationParameter = {
  parameterPath: "request",
  mapper: RestoreRequestMapper
};

export const csmPublishingAccessPoliciesEntity: OperationParameter = {
  parameterPath: "csmPublishingAccessPoliciesEntity",
  mapper: CsmPublishingCredentialsPoliciesEntityMapper
};

export const siteAuthSettings: OperationParameter = {
  parameterPath: "siteAuthSettings",
  mapper: SiteAuthSettingsMapper
};

export const siteAuthSettingsV2: OperationParameter = {
  parameterPath: "siteAuthSettingsV2",
  mapper: SiteAuthSettingsV2Mapper
};

export const azureStorageAccounts: OperationParameter = {
  parameterPath: "azureStorageAccounts",
  mapper: AzureStoragePropertyDictionaryResourceMapper
};

export const appSettingKey: OperationURLParameter = {
  parameterPath: "appSettingKey",
  mapper: {
    serializedName: "appSettingKey",
    required: true,
    xmlName: "appSettingKey",
    type: {
      name: "String"
    }
  }
};

export const connectionStringKey: OperationURLParameter = {
  parameterPath: "connectionStringKey",
  mapper: {
    serializedName: "connectionStringKey",
    required: true,
    xmlName: "connectionStringKey",
    type: {
      name: "String"
    }
  }
};

export const connectionStrings: OperationParameter = {
  parameterPath: "connectionStrings",
  mapper: ConnectionStringDictionaryMapper
};

export const siteLogsConfig: OperationParameter = {
  parameterPath: "siteLogsConfig",
  mapper: SiteLogsConfigMapper
};

export const metadata: OperationParameter = {
  parameterPath: "metadata",
  mapper: StringDictionaryMapper
};

export const pushSettings: OperationParameter = {
  parameterPath: "pushSettings",
  mapper: PushSettingsMapper
};

export const slotConfigNames: OperationParameter = {
  parameterPath: "slotConfigNames",
  mapper: SlotConfigNamesResourceMapper
};

export const siteConfig: OperationParameter = {
  parameterPath: "siteConfig",
  mapper: SiteConfigResourceMapper
};

export const snapshotId: OperationURLParameter = {
  parameterPath: "snapshotId",
  mapper: {
    serializedName: "snapshotId",
    required: true,
    xmlName: "snapshotId",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/zip",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const webJobName: OperationURLParameter = {
  parameterPath: "webJobName",
  mapper: {
    serializedName: "webJobName",
    required: true,
    xmlName: "webJobName",
    type: {
      name: "String"
    }
  }
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    xmlName: "id",
    type: {
      name: "String"
    }
  }
};

export const deployment: OperationParameter = {
  parameterPath: "deployment",
  mapper: DeploymentMapper
};

export const domainOwnershipIdentifierName: OperationURLParameter = {
  parameterPath: "domainOwnershipIdentifierName",
  mapper: {
    serializedName: "domainOwnershipIdentifierName",
    required: true,
    xmlName: "domainOwnershipIdentifierName",
    type: {
      name: "String"
    }
  }
};

export const domainOwnershipIdentifier1: OperationParameter = {
  parameterPath: "domainOwnershipIdentifier",
  mapper: IdentifierMapper
};

export const mSDeploy: OperationParameter = {
  parameterPath: "mSDeploy",
  mapper: MSDeployMapper
};

export const functionName: OperationURLParameter = {
  parameterPath: "functionName",
  mapper: {
    serializedName: "functionName",
    required: true,
    xmlName: "functionName",
    type: {
      name: "String"
    }
  }
};

export const functionEnvelope: OperationParameter = {
  parameterPath: "functionEnvelope",
  mapper: FunctionEnvelopeMapper
};

export const key: OperationParameter = {
  parameterPath: "key",
  mapper: KeyInfoMapper
};

export const keyName: OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    serializedName: "keyName",
    required: true,
    xmlName: "keyName",
    type: {
      name: "String"
    }
  }
};

export const keyType: OperationURLParameter = {
  parameterPath: "keyType",
  mapper: {
    serializedName: "keyType",
    required: true,
    xmlName: "keyType",
    type: {
      name: "String"
    }
  }
};

export const hostName1: OperationURLParameter = {
  parameterPath: "hostName",
  mapper: {
    serializedName: "hostName",
    required: true,
    xmlName: "hostName",
    type: {
      name: "String"
    }
  }
};

export const hostNameBinding: OperationParameter = {
  parameterPath: "hostNameBinding",
  mapper: HostNameBindingMapper
};

export const connectionEnvelope1: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: HybridConnectionMapper
};

export const entityName: OperationURLParameter = {
  parameterPath: "entityName",
  mapper: {
    serializedName: "entityName",
    required: true,
    xmlName: "entityName",
    type: {
      name: "String"
    }
  }
};

export const connectionEnvelope2: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: RelayServiceConnectionEntityMapper
};

export const instanceId: OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    serializedName: "instanceId",
    required: true,
    xmlName: "instanceId",
    type: {
      name: "String"
    }
  }
};

export const processId: OperationURLParameter = {
  parameterPath: "processId",
  mapper: {
    serializedName: "processId",
    required: true,
    xmlName: "processId",
    type: {
      name: "String"
    }
  }
};

export const baseAddress: OperationURLParameter = {
  parameterPath: "baseAddress",
  mapper: {
    serializedName: "baseAddress",
    required: true,
    xmlName: "baseAddress",
    type: {
      name: "String"
    }
  }
};

export const migrationOptions: OperationParameter = {
  parameterPath: "migrationOptions",
  mapper: StorageMigrationOptionsMapper
};

export const subscriptionName: OperationQueryParameter = {
  parameterPath: "subscriptionName",
  mapper: {
    serializedName: "subscriptionName",
    required: true,
    xmlName: "subscriptionName",
    type: {
      name: "String"
    }
  }
};

export const migrationRequestEnvelope: OperationParameter = {
  parameterPath: "migrationRequestEnvelope",
  mapper: MigrateMySqlRequestMapper
};

export const connectionEnvelope3: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: SwiftVirtualNetworkMapper
};

export const view: OperationURLParameter = {
  parameterPath: "view",
  mapper: {
    serializedName: "view",
    required: true,
    xmlName: "view",
    type: {
      name: "String"
    }
  }
};

export const durationInSeconds: OperationQueryParameter = {
  parameterPath: ["options", "durationInSeconds"],
  mapper: {
    serializedName: "durationInSeconds",
    xmlName: "durationInSeconds",
    type: {
      name: "Number"
    }
  }
};

export const maxFrameLength: OperationQueryParameter = {
  parameterPath: ["options", "maxFrameLength"],
  mapper: {
    serializedName: "maxFrameLength",
    xmlName: "maxFrameLength",
    type: {
      name: "Number"
    }
  }
};

export const sasUrl: OperationQueryParameter = {
  parameterPath: ["options", "sasUrl"],
  mapper: {
    serializedName: "sasUrl",
    xmlName: "sasUrl",
    type: {
      name: "String"
    }
  }
};

export const premierAddOnName: OperationURLParameter = {
  parameterPath: "premierAddOnName",
  mapper: {
    serializedName: "premierAddOnName",
    required: true,
    xmlName: "premierAddOnName",
    type: {
      name: "String"
    }
  }
};

export const premierAddOn: OperationParameter = {
  parameterPath: "premierAddOn",
  mapper: PremierAddOnMapper
};

export const premierAddOn1: OperationParameter = {
  parameterPath: "premierAddOn",
  mapper: PremierAddOnPatchResourceMapper
};

export const access: OperationParameter = {
  parameterPath: "access",
  mapper: PrivateAccessMapper
};

export const publicCertificateName: OperationURLParameter = {
  parameterPath: "publicCertificateName",
  mapper: {
    serializedName: "publicCertificateName",
    required: true,
    xmlName: "publicCertificateName",
    type: {
      name: "String"
    }
  }
};

export const publicCertificate: OperationParameter = {
  parameterPath: "publicCertificate",
  mapper: PublicCertificateMapper
};

export const publishingProfileOptions: OperationParameter = {
  parameterPath: "publishingProfileOptions",
  mapper: CsmPublishingProfileOptionsMapper
};

export const accept3: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const synchronous: OperationQueryParameter = {
  parameterPath: ["options", "synchronous"],
  mapper: {
    serializedName: "synchronous",
    xmlName: "synchronous",
    type: {
      name: "Boolean"
    }
  }
};

export const restoreRequest: OperationParameter = {
  parameterPath: "restoreRequest",
  mapper: DeletedAppRestoreRequestMapper
};

export const restoreRequest1: OperationParameter = {
  parameterPath: "restoreRequest",
  mapper: SnapshotRestoreRequestMapper
};

export const siteExtensionId: OperationURLParameter = {
  parameterPath: "siteExtensionId",
  mapper: {
    serializedName: "siteExtensionId",
    required: true,
    xmlName: "siteExtensionId",
    type: {
      name: "String"
    }
  }
};

export const siteSourceControl: OperationParameter = {
  parameterPath: "siteSourceControl",
  mapper: SiteSourceControlMapper
};

export const additionalFlags: OperationQueryParameter = {
  parameterPath: ["options", "additionalFlags"],
  mapper: {
    serializedName: "additionalFlags",
    xmlName: "additionalFlags",
    type: {
      name: "String"
    }
  }
};

export const connectionEnvelope4: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: VnetInfoResourceMapper
};
