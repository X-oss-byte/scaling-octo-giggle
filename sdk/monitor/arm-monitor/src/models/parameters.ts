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
export const actionGroupName: msRest.OperationURLParameter = {
  parameterPath: "actionGroupName",
  mapper: {
    required: true,
    serializedName: "actionGroupName",
    type: {
      name: "String"
    }
  }
};
export const activityLogAlertName: msRest.OperationURLParameter = {
  parameterPath: "activityLogAlertName",
  mapper: {
    required: true,
    serializedName: "activityLogAlertName",
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
    defaultValue: '2015-04-01',
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
    defaultValue: '2016-03-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion10: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-12-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion11: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-11-27-preview',
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
    defaultValue: '2017-05-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion3: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-06-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion4: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-04-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion5: msRest.OperationQueryParameter = {
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
export const apiVersion6: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-11-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion7: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-03-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion8: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-03-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion9: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-04-16',
    type: {
      name: "String"
    }
  }
};
export const autoscaleSettingName: msRest.OperationURLParameter = {
  parameterPath: "autoscaleSettingName",
  mapper: {
    required: true,
    serializedName: "autoscaleSettingName",
    type: {
      name: "String"
    }
  }
};
export const filter0: msRest.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    required: true,
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const filter1: msRest.OperationQueryParameter = {
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
export const incidentName: msRest.OperationURLParameter = {
  parameterPath: "incidentName",
  mapper: {
    required: true,
    serializedName: "incidentName",
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
export const logProfileName: msRest.OperationURLParameter = {
  parameterPath: "logProfileName",
  mapper: {
    required: true,
    serializedName: "logProfileName",
    type: {
      name: "String"
    }
  }
};
export const metricName: msRest.OperationURLParameter = {
  parameterPath: "metricName",
  mapper: {
    required: true,
    serializedName: "metricName",
    type: {
      name: "String"
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
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
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
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
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
export const ruleName: msRest.OperationURLParameter = {
  parameterPath: "ruleName",
  mapper: {
    required: true,
    serializedName: "ruleName",
    type: {
      name: "String"
    }
  }
};
export const select: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "select"
  ],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};
export const sensitivities: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "sensitivities"
  ],
  mapper: {
    serializedName: "sensitivities",
    type: {
      name: "String"
    }
  }
};
export const startTime: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "startTime"
  ],
  mapper: {
    serializedName: "startTime",
    type: {
      name: "String"
    }
  }
};
export const statusName: msRest.OperationURLParameter = {
  parameterPath: "statusName",
  mapper: {
    required: true,
    serializedName: "statusName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
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
