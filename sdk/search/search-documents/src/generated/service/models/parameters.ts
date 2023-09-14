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
  SearchIndexerDataSource as SearchIndexerDataSourceMapper,
  DocumentKeysOrIds as DocumentKeysOrIdsMapper,
  SearchIndexer as SearchIndexerMapper,
  SearchIndexerSkillset as SearchIndexerSkillsetMapper,
  SkillNames as SkillNamesMapper,
  SynonymMap as SynonymMapMapper,
  SearchIndex as SearchIndexMapper,
  AnalyzeRequest as AnalyzeRequestMapper
} from "../models/mappers";

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

export const dataSource: OperationParameter = {
  parameterPath: "dataSource",
  mapper: SearchIndexerDataSourceMapper
};

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

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const dataSourceName: OperationURLParameter = {
  parameterPath: "dataSourceName",
  mapper: {
    serializedName: "dataSourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const xMsClientRequestId: OperationParameter = {
  parameterPath: ["options", "requestOptionsParam", "xMsClientRequestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    type: {
      name: "Uuid"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const prefer: OperationParameter = {
  parameterPath: "prefer",
  mapper: {
    defaultValue: "return=representation",
    isConstant: true,
    serializedName: "Prefer",
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    serializedName: "api-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skipIndexerResetRequirementForCache: OperationQueryParameter = {
  parameterPath: ["options", "skipIndexerResetRequirementForCache"],
  mapper: {
    serializedName: "ignoreResetRequirements",
    type: {
      name: "Boolean"
    }
  }
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};

export const indexerName: OperationURLParameter = {
  parameterPath: "indexerName",
  mapper: {
    serializedName: "indexerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const keysOrIds: OperationParameter = {
  parameterPath: ["options", "keysOrIds"],
  mapper: DocumentKeysOrIdsMapper
};

export const overwrite: OperationQueryParameter = {
  parameterPath: ["options", "overwrite"],
  mapper: {
    defaultValue: false,
    serializedName: "overwrite",
    type: {
      name: "Boolean"
    }
  }
};

export const indexer: OperationParameter = {
  parameterPath: "indexer",
  mapper: SearchIndexerMapper
};

export const disableCacheReprocessingChangeDetection: OperationQueryParameter = {
  parameterPath: ["options", "disableCacheReprocessingChangeDetection"],
  mapper: {
    serializedName: "disableCacheReprocessingChangeDetection",
    type: {
      name: "Boolean"
    }
  }
};

export const skillset: OperationParameter = {
  parameterPath: "skillset",
  mapper: SearchIndexerSkillsetMapper
};

export const skillsetName: OperationURLParameter = {
  parameterPath: "skillsetName",
  mapper: {
    serializedName: "skillsetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skillNames: OperationParameter = {
  parameterPath: "skillNames",
  mapper: SkillNamesMapper
};

export const synonymMap: OperationParameter = {
  parameterPath: "synonymMap",
  mapper: SynonymMapMapper
};

export const synonymMapName: OperationURLParameter = {
  parameterPath: "synonymMapName",
  mapper: {
    serializedName: "synonymMapName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const index: OperationParameter = {
  parameterPath: "index",
  mapper: SearchIndexMapper
};

export const indexName: OperationURLParameter = {
  parameterPath: "indexName",
  mapper: {
    serializedName: "indexName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const allowIndexDowntime: OperationQueryParameter = {
  parameterPath: ["options", "allowIndexDowntime"],
  mapper: {
    serializedName: "allowIndexDowntime",
    type: {
      name: "Boolean"
    }
  }
};

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: AnalyzeRequestMapper
};
