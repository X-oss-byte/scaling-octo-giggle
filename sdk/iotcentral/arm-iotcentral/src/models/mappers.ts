/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const AppSkuInfo: msRest.CompositeMapper = {
  serializedName: "AppSkuInfo",
  type: {
    name: "Composite",
    className: "AppSkuInfo",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        constraints: {
          Pattern: /^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,99}[a-zA-Z0-9]$/
        },
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const App: msRest.CompositeMapper = {
  serializedName: "App",
  type: {
    name: "Composite",
    className: "App",
    modelProperties: {
      ...Resource.type.modelProperties,
      applicationId: {
        readOnly: true,
        serializedName: "properties.applicationId",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      subdomain: {
        serializedName: "properties.subdomain",
        type: {
          name: "String"
        }
      },
      template: {
        serializedName: "properties.template",
        type: {
          name: "String"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AppSkuInfo"
        }
      }
    }
  }
};

export const AppPatch: msRest.CompositeMapper = {
  serializedName: "AppPatch",
  type: {
    name: "Composite",
    className: "AppPatch",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AppSkuInfo"
        }
      },
      applicationId: {
        readOnly: true,
        serializedName: "properties.applicationId",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      subdomain: {
        serializedName: "properties.subdomain",
        type: {
          name: "String"
        }
      },
      template: {
        serializedName: "properties.template",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudErrorBody: msRest.CompositeMapper = {
  serializedName: "CloudErrorBody",
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorBody"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
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
        readOnly: true,
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        readOnly: true,
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const OperationInputs: msRest.CompositeMapper = {
  serializedName: "OperationInputs",
  type: {
    name: "Composite",
    className: "OperationInputs",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        defaultValue: 'IoTApps',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppAvailabilityInfo: msRest.CompositeMapper = {
  serializedName: "AppAvailabilityInfo",
  type: {
    name: "Composite",
    className: "AppAvailabilityInfo",
    modelProperties: {
      nameAvailable: {
        readOnly: true,
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        readOnly: true,
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppTemplateLocations: msRest.CompositeMapper = {
  serializedName: "AppTemplateLocations",
  type: {
    name: "Composite",
    className: "AppTemplateLocations",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppTemplate: msRest.CompositeMapper = {
  serializedName: "AppTemplate",
  type: {
    name: "Composite",
    className: "AppTemplate",
    modelProperties: {
      manifestId: {
        readOnly: true,
        serializedName: "manifestId",
        type: {
          name: "String"
        }
      },
      manifestVersion: {
        readOnly: true,
        serializedName: "manifestVersion",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      title: {
        readOnly: true,
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      order: {
        readOnly: true,
        serializedName: "order",
        type: {
          name: "Number"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      industry: {
        readOnly: true,
        serializedName: "industry",
        type: {
          name: "String"
        }
      },
      locations: {
        readOnly: true,
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AppTemplateLocations"
            }
          }
        }
      }
    }
  }
};

export const AppListResult: msRest.CompositeMapper = {
  serializedName: "AppListResult",
  type: {
    name: "Composite",
    className: "AppListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "App"
            }
          }
        }
      }
    }
  }
};

export const AppTemplatesResult: msRest.CompositeMapper = {
  serializedName: "AppTemplatesResult",
  type: {
    name: "Composite",
    className: "AppTemplatesResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AppTemplate"
            }
          }
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};
