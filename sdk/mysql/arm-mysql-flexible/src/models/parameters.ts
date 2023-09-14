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
  Server as ServerMapper,
  ServerForUpdate as ServerForUpdateMapper,
  ServerRestartParameter as ServerRestartParameterMapper,
  FirewallRule as FirewallRuleMapper,
  Database as DatabaseMapper,
  Configuration as ConfigurationMapper,
  ConfigurationListForBatchUpdate as ConfigurationListForBatchUpdateMapper,
  VirtualNetworkSubnetUsageParameter as VirtualNetworkSubnetUsageParameterMapper,
  NameAvailabilityRequest as NameAvailabilityRequestMapper
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerMapper
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
    defaultValue: "2021-05-01",
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

export const serverName: OperationURLParameter = {
  parameterPath: "serverName",
  mapper: {
    serializedName: "serverName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerForUpdateMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerRestartParameterMapper
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

export const backupName: OperationURLParameter = {
  parameterPath: "backupName",
  mapper: {
    serializedName: "backupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: FirewallRuleMapper
};

export const firewallRuleName: OperationURLParameter = {
  parameterPath: "firewallRuleName",
  mapper: {
    serializedName: "firewallRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: DatabaseMapper
};

export const databaseName: OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    serializedName: "databaseName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConfigurationMapper
};

export const configurationName: OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    serializedName: "configurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConfigurationListForBatchUpdateMapper
};

export const locationName: OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    serializedName: "locationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkSubnetUsageParameterMapper
};

export const nameAvailabilityRequest: OperationParameter = {
  parameterPath: "nameAvailabilityRequest",
  mapper: NameAvailabilityRequestMapper
};
