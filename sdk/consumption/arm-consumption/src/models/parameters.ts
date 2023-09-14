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
import { Budget as BudgetMapper } from "../models/mappers";

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

export const scope: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const skiptoken: OperationQueryParameter = {
  parameterPath: ["options", "skiptoken"],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-10-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const metric: OperationQueryParameter = {
  parameterPath: ["options", "metric"],
  mapper: {
    serializedName: "metric",
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

export const budgetName: OperationURLParameter = {
  parameterPath: "budgetName",
  mapper: {
    serializedName: "budgetName",
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: BudgetMapper
};

export const startDate: OperationQueryParameter = {
  parameterPath: ["options", "startDate"],
  mapper: {
    serializedName: "startDate",
    type: {
      name: "String"
    }
  }
};

export const endDate: OperationQueryParameter = {
  parameterPath: ["options", "endDate"],
  mapper: {
    serializedName: "endDate",
    type: {
      name: "String"
    }
  }
};

export const apply: OperationQueryParameter = {
  parameterPath: ["options", "apply"],
  mapper: {
    serializedName: "$apply",
    type: {
      name: "String"
    }
  }
};

export const billingAccountId: OperationURLParameter = {
  parameterPath: "billingAccountId",
  mapper: {
    serializedName: "billingAccountId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const billingPeriodName: OperationURLParameter = {
  parameterPath: "billingPeriodName",
  mapper: {
    serializedName: "billingPeriodName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const reservationOrderId: OperationURLParameter = {
  parameterPath: "reservationOrderId",
  mapper: {
    serializedName: "reservationOrderId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const grain: OperationQueryParameter = {
  parameterPath: "grain",
  mapper: {
    serializedName: "grain",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const reservationId: OperationURLParameter = {
  parameterPath: "reservationId",
  mapper: {
    serializedName: "reservationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const reservationId1: OperationQueryParameter = {
  parameterPath: ["options", "reservationId"],
  mapper: {
    serializedName: "reservationId",
    type: {
      name: "String"
    }
  }
};

export const reservationOrderId1: OperationQueryParameter = {
  parameterPath: ["options", "reservationOrderId"],
  mapper: {
    serializedName: "reservationOrderId",
    type: {
      name: "String"
    }
  }
};

export const filter1: OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const region: OperationQueryParameter = {
  parameterPath: "region",
  mapper: {
    serializedName: "region",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const term: OperationQueryParameter = {
  parameterPath: "term",
  mapper: {
    serializedName: "term",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const lookBackPeriod: OperationQueryParameter = {
  parameterPath: "lookBackPeriod",
  mapper: {
    serializedName: "lookBackPeriod",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const product: OperationQueryParameter = {
  parameterPath: "product",
  mapper: {
    serializedName: "product",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const billingProfileId: OperationURLParameter = {
  parameterPath: "billingProfileId",
  mapper: {
    serializedName: "billingProfileId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const managementGroupId: OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    serializedName: "managementGroupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const startDate1: OperationQueryParameter = {
  parameterPath: "startDate",
  mapper: {
    serializedName: "startDate",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const endDate1: OperationQueryParameter = {
  parameterPath: "endDate",
  mapper: {
    serializedName: "endDate",
    required: true,
    type: {
      name: "String"
    }
  }
};
