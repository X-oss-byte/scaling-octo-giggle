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
  BillingAccountUpdateRequest as BillingAccountUpdateRequestMapper,
  AddressDetails as AddressDetailsMapper,
  Instruction as InstructionMapper,
  BillingProfile as BillingProfileMapper,
  InvoiceSection as InvoiceSectionMapper,
  BillingSubscription as BillingSubscriptionMapper,
  TransferBillingSubscriptionRequestProperties as TransferBillingSubscriptionRequestPropertiesMapper,
  Product as ProductMapper,
  TransferProductRequestProperties as TransferProductRequestPropertiesMapper,
  Policy as PolicyMapper,
  CustomerPolicy as CustomerPolicyMapper,
  BillingProperty as BillingPropertyMapper
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-05-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
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

export const billingAccountName: OperationURLParameter = {
  parameterPath: "billingAccountName",
  mapper: {
    serializedName: "billingAccountName",
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
  mapper: BillingAccountUpdateRequestMapper
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

export const address: OperationParameter = {
  parameterPath: "address",
  mapper: AddressDetailsMapper
};

export const billingProfileName: OperationURLParameter = {
  parameterPath: "billingProfileName",
  mapper: {
    serializedName: "billingProfileName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const instructionName: OperationURLParameter = {
  parameterPath: "instructionName",
  mapper: {
    serializedName: "instructionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: InstructionMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: BillingProfileMapper
};

export const search: OperationQueryParameter = {
  parameterPath: ["options", "search"],
  mapper: {
    serializedName: "$search",
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

export const customerName: OperationURLParameter = {
  parameterPath: "customerName",
  mapper: {
    serializedName: "customerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const invoiceSectionName: OperationURLParameter = {
  parameterPath: "invoiceSectionName",
  mapper: {
    serializedName: "invoiceSectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: InvoiceSectionMapper
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

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: BillingSubscriptionMapper
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: TransferBillingSubscriptionRequestPropertiesMapper
};

export const productName: OperationURLParameter = {
  parameterPath: "productName",
  mapper: {
    serializedName: "productName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProductMapper
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: TransferProductRequestPropertiesMapper
};

export const periodStartDate: OperationQueryParameter = {
  parameterPath: "periodStartDate",
  mapper: {
    serializedName: "periodStartDate",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const periodEndDate: OperationQueryParameter = {
  parameterPath: "periodEndDate",
  mapper: {
    serializedName: "periodEndDate",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const invoiceName: OperationURLParameter = {
  parameterPath: "invoiceName",
  mapper: {
    serializedName: "invoiceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const downloadToken: OperationQueryParameter = {
  parameterPath: "downloadToken",
  mapper: {
    serializedName: "downloadToken",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const downloadUrls: OperationParameter = {
  parameterPath: "downloadUrls",
  mapper: {
    serializedName: "downloadUrls",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: PolicyMapper
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: CustomerPolicyMapper
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: BillingPropertyMapper
};

export const billingRoleDefinitionName: OperationURLParameter = {
  parameterPath: "billingRoleDefinitionName",
  mapper: {
    serializedName: "billingRoleDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const billingRoleAssignmentName: OperationURLParameter = {
  parameterPath: "billingRoleAssignmentName",
  mapper: {
    serializedName: "billingRoleAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const agreementName: OperationURLParameter = {
  parameterPath: "agreementName",
  mapper: {
    serializedName: "agreementName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const orderby: OperationQueryParameter = {
  parameterPath: ["options", "orderby"],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};

export const refreshSummary: OperationQueryParameter = {
  parameterPath: ["options", "refreshSummary"],
  mapper: {
    serializedName: "refreshSummary",
    type: {
      name: "String"
    }
  }
};

export const selectedState: OperationQueryParameter = {
  parameterPath: ["options", "selectedState"],
  mapper: {
    serializedName: "selectedState",
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-03-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
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
      InclusiveMaximum: 100,
      InclusiveMinimum: 1
    },
    serializedName: "$top",
    type: {
      name: "Number"
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
