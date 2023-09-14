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
  Annotation as AnnotationMapper,
  APIKeyRequest as APIKeyRequestMapper,
  ApplicationInsightsComponentExportRequest as ApplicationInsightsComponentExportRequestMapper,
  ApplicationInsightsComponentBillingFeatures as ApplicationInsightsComponentBillingFeaturesMapper,
  ApplicationInsightsComponentProactiveDetectionConfiguration as ApplicationInsightsComponentProactiveDetectionConfigurationMapper,
  WorkItemCreateConfiguration as WorkItemCreateConfigurationMapper,
  ApplicationInsightsComponentFavorite as ApplicationInsightsComponentFavoriteMapper,
  WebTest as WebTestMapper,
  TagsResource as TagsResourceMapper,
  ApplicationInsightsComponentAnalyticsItem as ApplicationInsightsComponentAnalyticsItemMapper,
  WorkbookTemplate as WorkbookTemplateMapper,
  WorkbookTemplateUpdateParameters as WorkbookTemplateUpdateParametersMapper,
  MyWorkbook as MyWorkbookMapper,
  Workbook as WorkbookMapper,
  WorkbookUpdateParameters as WorkbookUpdateParametersMapper,
  ApplicationInsightsComponent as ApplicationInsightsComponentMapper,
  ComponentPurgeBody as ComponentPurgeBodyMapper,
  ComponentLinkedStorageAccounts as ComponentLinkedStorageAccountsMapper,
  ComponentLinkedStorageAccountsPatch as ComponentLinkedStorageAccountsPatchMapper
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
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2015-05-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const start: OperationQueryParameter = {
  parameterPath: "start",
  mapper: {
    serializedName: "start",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const end: OperationQueryParameter = {
  parameterPath: "end",
  mapper: {
    serializedName: "end",
    required: true,
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

export const annotationProperties: OperationParameter = {
  parameterPath: "annotationProperties",
  mapper: AnnotationMapper
};

export const annotationId: OperationURLParameter = {
  parameterPath: "annotationId",
  mapper: {
    serializedName: "annotationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const aPIKeyProperties: OperationParameter = {
  parameterPath: "aPIKeyProperties",
  mapper: APIKeyRequestMapper
};

export const keyId: OperationURLParameter = {
  parameterPath: "keyId",
  mapper: {
    serializedName: "keyId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const exportProperties: OperationParameter = {
  parameterPath: "exportProperties",
  mapper: ApplicationInsightsComponentExportRequestMapper
};

export const exportId: OperationURLParameter = {
  parameterPath: "exportId",
  mapper: {
    serializedName: "exportId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const billingFeaturesProperties: OperationParameter = {
  parameterPath: "billingFeaturesProperties",
  mapper: ApplicationInsightsComponentBillingFeaturesMapper
};

export const configurationId: OperationURLParameter = {
  parameterPath: "configurationId",
  mapper: {
    serializedName: "ConfigurationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const proactiveDetectionProperties: OperationParameter = {
  parameterPath: "proactiveDetectionProperties",
  mapper: ApplicationInsightsComponentProactiveDetectionConfigurationMapper
};

export const workItemConfigurationProperties: OperationParameter = {
  parameterPath: "workItemConfigurationProperties",
  mapper: WorkItemCreateConfigurationMapper
};

export const workItemConfigId: OperationURLParameter = {
  parameterPath: "workItemConfigId",
  mapper: {
    serializedName: "workItemConfigId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const favoriteType: OperationQueryParameter = {
  parameterPath: ["options", "favoriteType"],
  mapper: {
    serializedName: "favoriteType",
    type: {
      name: "Enum",
      allowedValues: ["shared", "user"]
    }
  }
};

export const sourceType: OperationQueryParameter = {
  parameterPath: ["options", "sourceType"],
  mapper: {
    serializedName: "sourceType",
    type: {
      name: "String"
    }
  }
};

export const canFetchContent: OperationQueryParameter = {
  parameterPath: ["options", "canFetchContent"],
  mapper: {
    serializedName: "canFetchContent",
    type: {
      name: "Boolean"
    }
  }
};

export const tags: OperationQueryParameter = {
  parameterPath: ["options", "tags"],
  mapper: {
    serializedName: "tags",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const favoriteId: OperationURLParameter = {
  parameterPath: "favoriteId",
  mapper: {
    serializedName: "favoriteId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const favoriteProperties: OperationParameter = {
  parameterPath: "favoriteProperties",
  mapper: ApplicationInsightsComponentFavoriteMapper
};

export const webTestName: OperationURLParameter = {
  parameterPath: "webTestName",
  mapper: {
    serializedName: "webTestName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const webTestDefinition: OperationParameter = {
  parameterPath: "webTestDefinition",
  mapper: WebTestMapper
};

export const webTestTags: OperationParameter = {
  parameterPath: "webTestTags",
  mapper: TagsResourceMapper
};

export const componentName: OperationURLParameter = {
  parameterPath: "componentName",
  mapper: {
    serializedName: "componentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const scopePath: OperationURLParameter = {
  parameterPath: "scopePath",
  mapper: {
    serializedName: "scopePath",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scope: OperationQueryParameter = {
  parameterPath: ["options", "scope"],
  mapper: {
    serializedName: "scope",
    type: {
      name: "String"
    }
  }
};

export const typeParam: OperationQueryParameter = {
  parameterPath: ["options", "typeParam"],
  mapper: {
    defaultValue: "none",
    serializedName: "type",
    type: {
      name: "String"
    }
  }
};

export const includeContent: OperationQueryParameter = {
  parameterPath: ["options", "includeContent"],
  mapper: {
    serializedName: "includeContent",
    type: {
      name: "Boolean"
    }
  }
};

export const id: OperationQueryParameter = {
  parameterPath: ["options", "id"],
  mapper: {
    serializedName: "id",
    type: {
      name: "String"
    }
  }
};

export const name: OperationQueryParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};

export const itemProperties: OperationParameter = {
  parameterPath: "itemProperties",
  mapper: ApplicationInsightsComponentAnalyticsItemMapper
};

export const overrideItem: OperationQueryParameter = {
  parameterPath: ["options", "overrideItem"],
  mapper: {
    serializedName: "overrideItem",
    type: {
      name: "Boolean"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-11-20",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const workbookTemplateProperties: OperationParameter = {
  parameterPath: "workbookTemplateProperties",
  mapper: WorkbookTemplateMapper
};

export const workbookTemplateUpdateParameters: OperationParameter = {
  parameterPath: ["options", "workbookTemplateUpdateParameters"],
  mapper: WorkbookTemplateUpdateParametersMapper
};

export const category: OperationQueryParameter = {
  parameterPath: "category",
  mapper: {
    serializedName: "category",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sourceId: OperationQueryParameter = {
  parameterPath: ["options", "sourceId"],
  mapper: {
    serializedName: "sourceId",
    type: {
      name: "String"
    }
  }
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-03-08",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const workbookProperties: OperationParameter = {
  parameterPath: "workbookProperties",
  mapper: MyWorkbookMapper
};

export const apiVersion3: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-08-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const workbookProperties1: OperationParameter = {
  parameterPath: "workbookProperties",
  mapper: WorkbookMapper
};

export const workbookUpdateParameters: OperationParameter = {
  parameterPath: ["options", "workbookUpdateParameters"],
  mapper: WorkbookUpdateParametersMapper
};

export const revisionId: OperationURLParameter = {
  parameterPath: "revisionId",
  mapper: {
    serializedName: "revisionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion4: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-05-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const insightProperties: OperationParameter = {
  parameterPath: "insightProperties",
  mapper: ApplicationInsightsComponentMapper
};

export const componentTags: OperationParameter = {
  parameterPath: "componentTags",
  mapper: TagsResourceMapper
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: ComponentPurgeBodyMapper
};

export const purgeId: OperationURLParameter = {
  parameterPath: "purgeId",
  mapper: {
    serializedName: "purgeId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion5: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-03-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const storageType: OperationURLParameter = {
  parameterPath: "storageType",
  mapper: {
    serializedName: "storageType",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const linkedStorageAccountsProperties: OperationParameter = {
  parameterPath: "linkedStorageAccountsProperties",
  mapper: ComponentLinkedStorageAccountsMapper
};

export const linkedStorageAccountsProperties1: OperationParameter = {
  parameterPath: "linkedStorageAccountsProperties",
  mapper: ComponentLinkedStorageAccountsPatchMapper
};

export const apiVersion6: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-06-02-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const resourceUri: OperationURLParameter = {
  parameterPath: "resourceUri",
  mapper: {
    serializedName: "resourceUri",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
