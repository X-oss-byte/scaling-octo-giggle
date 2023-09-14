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
  AnalyzeBatchInput as AnalyzeBatchInputMapper,
  MultiLanguageBatchInput as MultiLanguageBatchInputMapper,
  LanguageBatchInput as LanguageBatchInputMapper
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

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: AnalyzeBatchInputMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
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
    serializedName: "Endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationURLParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "v3.2-preview.1",
    isConstant: true,
    serializedName: "ApiVersion",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const jobId: OperationURLParameter = {
  parameterPath: "jobId",
  mapper: {
    serializedName: "jobId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const includeStatistics: OperationQueryParameter = {
  parameterPath: ["options", "includeStatistics"],
  mapper: {
    serializedName: "showStats",
    type: {
      name: "Boolean"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    defaultValue: 20,
    constraints: {
      InclusiveMaximum: 50,
      InclusiveMinimum: 1
    },
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "$skip",
    type: {
      name: "Number"
    }
  }
};

export const jobId1: OperationURLParameter = {
  parameterPath: "jobId",
  mapper: {
    serializedName: "jobId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const input: OperationParameter = {
  parameterPath: "input",
  mapper: MultiLanguageBatchInputMapper
};

export const modelVersion: OperationQueryParameter = {
  parameterPath: ["options", "modelVersion"],
  mapper: {
    serializedName: "model-version",
    type: {
      name: "String"
    }
  }
};

export const stringIndexType: OperationQueryParameter = {
  parameterPath: ["options", "stringIndexType"],
  mapper: {
    serializedName: "stringIndexType",
    type: {
      name: "String"
    }
  }
};

export const loggingOptOut: OperationQueryParameter = {
  parameterPath: ["options", "loggingOptOut"],
  mapper: {
    serializedName: "loggingOptOut",
    type: {
      name: "Boolean"
    }
  }
};

export const domain: OperationQueryParameter = {
  parameterPath: ["options", "domain"],
  mapper: {
    serializedName: "domain",
    type: {
      name: "String"
    }
  }
};

export const piiCategories: OperationQueryParameter = {
  parameterPath: ["options", "piiCategories"],
  mapper: {
    constraints: {
      UniqueItems: true
    },
    serializedName: "piiCategories",
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

export const input1: OperationParameter = {
  parameterPath: "input",
  mapper: LanguageBatchInputMapper
};

export const opinionMining: OperationQueryParameter = {
  parameterPath: ["options", "opinionMining"],
  mapper: {
    serializedName: "opinionMining",
    type: {
      name: "Boolean"
    }
  }
};
