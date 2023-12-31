/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SerialConsoleOperations: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SerialConsoleOperations",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SerialConsoleOperationsValueItem"
            }
          }
        }
      }
    }
  }
};

export const SerialConsoleOperationsValueItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SerialConsoleOperationsValueItem",
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
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "SerialConsoleOperationsValueItemDisplay"
        }
      }
    }
  }
};

export const SerialConsoleOperationsValueItemDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SerialConsoleOperationsValueItemDisplay",
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

export const SerialConsoleStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SerialConsoleStatus",
    modelProperties: {
      disabled: {
        serializedName: "disabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const GetSerialConsoleSubscriptionNotFound: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetSerialConsoleSubscriptionNotFound",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DisableSerialConsoleResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DisableSerialConsoleResult",
    modelProperties: {
      disabled: {
        serializedName: "disabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const EnableSerialConsoleResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EnableSerialConsoleResult",
    modelProperties: {
      disabled: {
        serializedName: "disabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SerialPortListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SerialPortListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SerialPort"
            }
          }
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
      type: {
        serializedName: "type",
        readOnly: true,
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
          className: "CloudErrorBody"
        }
      }
    }
  }
};

export const CloudErrorBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
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

export const SerialPortConnectResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SerialPortConnectResult",
    modelProperties: {
      connectionString: {
        serializedName: "connectionString",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const SerialPort: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SerialPort",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      state: {
        serializedName: "properties.state",
        type: {
          name: "Enum",
          allowedValues: ["enabled", "disabled"]
        }
      }
    }
  }
};
