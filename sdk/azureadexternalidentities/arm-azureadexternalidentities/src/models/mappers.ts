/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const CheckNameAvailabilityRequestBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityRequestBody",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameAvailabilityResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NameAvailabilityResponse",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const B2CTenantResourceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "B2CTenantResourceList",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "B2CTenantResource"
            }
          }
        }
      }
    }
  }
};

export const B2CTenantResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "B2CTenantResource",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "B2CResourceSKU"
        }
      },
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
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      billingConfig: {
        serializedName: "properties.billingConfig",
        type: {
          name: "Composite",
          className: "B2CTenantResourcePropertiesBillingConfig"
        }
      },
      tenantId: {
        serializedName: "properties.tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const B2CResourceSKU: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "B2CResourceSKU",
    modelProperties: {
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

export const B2CTenantResourcePropertiesBillingConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "B2CTenantResourcePropertiesBillingConfig",
    modelProperties: {
      billingType: {
        serializedName: "billingType",
        type: {
          name: "String"
        }
      },
      effectiveStartDateUtc: {
        serializedName: "effectiveStartDateUtc",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CreateTenantRequestBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateTenantRequestBody",
    modelProperties: {
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "B2CResourceSKU"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      displayName: {
        serializedName: "properties.createTenantProperties.displayName",
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "properties.createTenantProperties.countryCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const B2CTenantUpdateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "B2CTenantUpdateRequest",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "B2CResourceSKU"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      billingConfig: {
        serializedName: "properties.billingConfig",
        type: {
          name: "Composite",
          className: "B2CTenantResourcePropertiesBillingConfig"
        }
      },
      tenantId: {
        serializedName: "properties.tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailableOperations: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableOperations",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationDetail"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDetail",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GuestUsagesResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GuestUsagesResource",
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
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
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
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      tenantId: {
        serializedName: "properties.tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GuestUsagesResourcePatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GuestUsagesResourcePatch",
    modelProperties: {
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

export const GuestUsagesResourceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GuestUsagesResourceList",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GuestUsagesResource"
            }
          }
        }
      }
    }
  }
};

export const B2CTenantsCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "B2CTenantsCreateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const B2CTenantsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "B2CTenantsDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "String"
        }
      }
    }
  }
};
