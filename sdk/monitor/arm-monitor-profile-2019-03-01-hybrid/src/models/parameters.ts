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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const aggregation: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "aggregation"
  ],
  mapper: {
    serializedName: "aggregation",
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-01-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-05-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2015-04-01',
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const interval: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "interval"
  ],
  mapper: {
    serializedName: "interval",
    type: {
      name: "TimeSpan"
    }
  }
};
export const metricnames: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "metricnames"
  ],
  mapper: {
    serializedName: "metricnames",
    type: {
      name: "String"
    }
  }
};
export const metricnamespace: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "metricnamespace"
  ],
  mapper: {
    serializedName: "metricnamespace",
    type: {
      name: "String"
    }
  }
};
export const name: msRest.OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    required: true,
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};
export const orderby: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderby"
  ],
  mapper: {
    serializedName: "orderby",
    type: {
      name: "String"
    }
  }
};
export const resourceUri: msRest.OperationURLParameter = {
  parameterPath: "resourceUri",
  mapper: {
    required: true,
    serializedName: "resourceUri",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const resultType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "resultType"
  ],
  mapper: {
    serializedName: "resultType",
    type: {
      name: "Enum",
      allowedValues: [
        "Data",
        "Metadata"
      ]
    }
  }
};
export const timespan: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "timespan"
  ],
  mapper: {
    serializedName: "timespan",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "top",
    type: {
      name: "Number"
    }
  }
};
