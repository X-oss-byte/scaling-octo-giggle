/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationEntityListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationEntityListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationEntity"
            }
          }
        }
      }
    }
  }
};

export const OperationEntity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationEntity",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayInfo"
        }
      }
    }
  }
};

export const OperationDisplayInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplayInfo",
    modelProperties: {
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkuListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CatalogSku"
            }
          }
        }
      }
    }
  }
};

export const CatalogSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CatalogSku",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      locations: {
        serializedName: "locations",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Composite",
          className: "SkuCapacity"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuCapability"
            }
          }
        }
      },
      costs: {
        serializedName: "costs",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuCost"
            }
          }
        }
      },
      restrictions: {
        serializedName: "restrictions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuRestrictions"
            }
          }
        }
      }
    }
  }
};

export const SkuCapacity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuCapacity",
    modelProperties: {
      minimum: {
        serializedName: "minimum",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maximum: {
        serializedName: "maximum",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      default: {
        serializedName: "default",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      scaleType: {
        serializedName: "scaleType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkuCapability: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuCapability",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkuCost: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuCost",
    modelProperties: {
      meterID: {
        serializedName: "meterID",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      extendedUnit: {
        serializedName: "extendedUnit",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkuRestrictions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuRestrictions",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      values: {
        serializedName: "values",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      reasonCode: {
        serializedName: "reasonCode",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommitmentAssociationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommitmentAssociationProperties",
    modelProperties: {
      associatedResourceId: {
        serializedName: "associatedResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      commitmentPlanId: {
        serializedName: "commitmentPlanId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      creationDate: {
        serializedName: "creationDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const CommitmentAssociationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommitmentAssociationListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommitmentAssociation"
            }
          }
        }
      }
    }
  }
};

export const MoveCommitmentAssociationRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MoveCommitmentAssociationRequest",
    modelProperties: {
      destinationPlanId: {
        serializedName: "destinationPlanId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommitmentPlanProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommitmentPlanProperties",
    modelProperties: {
      chargeForOverage: {
        serializedName: "chargeForOverage",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      chargeForPlan: {
        serializedName: "chargeForPlan",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      creationDate: {
        serializedName: "creationDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      includedQuantities: {
        serializedName: "includedQuantities",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "PlanQuantity" } }
        }
      },
      maxAssociationLimit: {
        serializedName: "maxAssociationLimit",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxCapacityLimit: {
        serializedName: "maxCapacityLimit",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      minCapacityLimit: {
        serializedName: "minCapacityLimit",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      planMeter: {
        serializedName: "planMeter",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      refillFrequencyInDays: {
        serializedName: "refillFrequencyInDays",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      suspendPlanOnOverage: {
        serializedName: "suspendPlanOnOverage",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const PlanQuantity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PlanQuantity",
    modelProperties: {
      allowance: {
        serializedName: "allowance",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      amount: {
        serializedName: "amount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      includedQuantityMeter: {
        serializedName: "includedQuantityMeter",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      overageMeter: {
        serializedName: "overageMeter",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommitmentPlanPatchPayload: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommitmentPlanPatchPayload",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      }
    }
  }
};

export const CommitmentPlanListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommitmentPlanListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommitmentPlan"
            }
          }
        }
      }
    }
  }
};

export const PlanUsageHistoryListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PlanUsageHistoryListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PlanUsageHistory"
            }
          }
        }
      }
    }
  }
};

export const PlanUsageHistory: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PlanUsageHistory",
    modelProperties: {
      planDeletionOverage: {
        serializedName: "planDeletionOverage",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      },
      planMigrationOverage: {
        serializedName: "planMigrationOverage",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      },
      planQuantitiesAfterUsage: {
        serializedName: "planQuantitiesAfterUsage",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      },
      planQuantitiesBeforeUsage: {
        serializedName: "planQuantitiesBeforeUsage",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      },
      planUsageOverage: {
        serializedName: "planUsageOverage",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      },
      usage: {
        serializedName: "usage",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      },
      usageDate: {
        serializedName: "usageDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CommitmentAssociation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommitmentAssociation",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CommitmentAssociationProperties"
        }
      }
    }
  }
};

export const CommitmentPlan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommitmentPlan",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CommitmentPlanProperties"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      }
    }
  }
};
