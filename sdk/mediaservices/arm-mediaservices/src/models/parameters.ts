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
  MediaService as MediaServiceMapper,
  MediaServiceUpdate as MediaServiceUpdateMapper,
  SyncStorageKeysInput as SyncStorageKeysInputMapper,
  ListEdgePoliciesInput as ListEdgePoliciesInputMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  CheckNameAvailabilityInput as CheckNameAvailabilityInputMapper,
  AccountFilter as AccountFilterMapper,
  Asset as AssetMapper,
  ListContainerSasInput as ListContainerSasInputMapper,
  AssetFilter as AssetFilterMapper,
  ContentKeyPolicy as ContentKeyPolicyMapper,
  Transform as TransformMapper,
  Job as JobMapper,
  StreamingPolicy as StreamingPolicyMapper,
  StreamingLocator as StreamingLocatorMapper,
  LiveEvent as LiveEventMapper,
  LiveEventActionInput as LiveEventActionInputMapper,
  LiveOutput as LiveOutputMapper,
  StreamingEndpoint as StreamingEndpointMapper,
  StreamingEntityScaleUnit as StreamingEntityScaleUnitMapper
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
    defaultValue: "2021-06-01",
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
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accountName: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    serializedName: "accountName",
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
  mapper: MediaServiceMapper
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: MediaServiceUpdateMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: SyncStorageKeysInputMapper
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ListEdgePoliciesInputMapper
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

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: CheckNameAvailabilityInputMapper
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

export const filterName: OperationURLParameter = {
  parameterPath: "filterName",
  mapper: {
    serializedName: "filterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: AccountFilterMapper
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

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
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

export const assetName: OperationURLParameter = {
  parameterPath: "assetName",
  mapper: {
    serializedName: "assetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: AssetMapper
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: ListContainerSasInputMapper
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: AssetFilterMapper
};

export const contentKeyPolicyName: OperationURLParameter = {
  parameterPath: "contentKeyPolicyName",
  mapper: {
    serializedName: "contentKeyPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: ContentKeyPolicyMapper
};

export const transformName: OperationURLParameter = {
  parameterPath: "transformName",
  mapper: {
    serializedName: "transformName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: TransformMapper
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    serializedName: "jobName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters12: OperationParameter = {
  parameterPath: "parameters",
  mapper: JobMapper
};

export const streamingPolicyName: OperationURLParameter = {
  parameterPath: "streamingPolicyName",
  mapper: {
    serializedName: "streamingPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters13: OperationParameter = {
  parameterPath: "parameters",
  mapper: StreamingPolicyMapper
};

export const streamingLocatorName: OperationURLParameter = {
  parameterPath: "streamingLocatorName",
  mapper: {
    serializedName: "streamingLocatorName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters14: OperationParameter = {
  parameterPath: "parameters",
  mapper: StreamingLocatorMapper
};

export const liveEventName: OperationURLParameter = {
  parameterPath: "liveEventName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$"),
      MaxLength: 32,
      MinLength: 1
    },
    serializedName: "liveEventName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters15: OperationParameter = {
  parameterPath: "parameters",
  mapper: LiveEventMapper
};

export const autoStart: OperationQueryParameter = {
  parameterPath: ["options", "autoStart"],
  mapper: {
    serializedName: "autoStart",
    type: {
      name: "Boolean"
    }
  }
};

export const parameters16: OperationParameter = {
  parameterPath: "parameters",
  mapper: LiveEventActionInputMapper
};

export const liveOutputName: OperationURLParameter = {
  parameterPath: "liveOutputName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9])+(-*[a-zA-Z0-9])*$"),
      MaxLength: 256,
      MinLength: 1
    },
    serializedName: "liveOutputName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters17: OperationParameter = {
  parameterPath: "parameters",
  mapper: LiveOutputMapper
};

export const streamingEndpointName: OperationURLParameter = {
  parameterPath: "streamingEndpointName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$"),
      MaxLength: 24,
      MinLength: 1
    },
    serializedName: "streamingEndpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters18: OperationParameter = {
  parameterPath: "parameters",
  mapper: StreamingEndpointMapper
};

export const parameters19: OperationParameter = {
  parameterPath: "parameters",
  mapper: StreamingEntityScaleUnitMapper
};
