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
  Cluster as ClusterMapper,
  ClusterQuotaConfigurationProperties as ClusterQuotaConfigurationPropertiesMapper,
  EHNamespace as EHNamespaceMapper,
  NetworkRuleSet as NetworkRuleSetMapper,
  AuthorizationRule as AuthorizationRuleMapper,
  RegenerateAccessKeyParameters as RegenerateAccessKeyParametersMapper,
  CheckNameAvailabilityParameter as CheckNameAvailabilityParameterMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Eventhub as EventhubMapper,
  ArmDisasterRecovery as ArmDisasterRecoveryMapper,
  ConsumerGroup as ConsumerGroupMapper,
  SchemaGroup as SchemaGroupMapper
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-11-01",
    isConstant: true,
    serializedName: "api-version",
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

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 6
    },
    serializedName: "clusterName",
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
  mapper: ClusterMapper
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

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterQuotaConfigurationPropertiesMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: EHNamespaceMapper
};

export const namespaceName: OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 6
    },
    serializedName: "namespaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkRuleSetMapper
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: AuthorizationRuleMapper
};

export const authorizationRuleName: OperationURLParameter = {
  parameterPath: "authorizationRuleName",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "authorizationRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: RegenerateAccessKeyParametersMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: CheckNameAvailabilityParameterMapper
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 0
    },
    serializedName: "$skip",
    type: {
      name: "Number"
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

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: EventhubMapper
};

export const eventHubName: OperationURLParameter = {
  parameterPath: "eventHubName",
  mapper: {
    constraints: {
      MaxLength: 256,
      MinLength: 1
    },
    serializedName: "eventHubName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: ArmDisasterRecoveryMapper
};

export const alias: OperationURLParameter = {
  parameterPath: "alias",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    serializedName: "alias",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConsumerGroupMapper
};

export const consumerGroupName: OperationURLParameter = {
  parameterPath: "consumerGroupName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    serializedName: "consumerGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: SchemaGroupMapper
};

export const schemaGroupName: OperationURLParameter = {
  parameterPath: "schemaGroupName",
  mapper: {
    constraints: {
      MaxLength: 256,
      MinLength: 1
    },
    serializedName: "schemaGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};
