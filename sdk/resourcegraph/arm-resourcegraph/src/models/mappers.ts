/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const QueryRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryRequest",
    modelProperties: {
      subscriptions: {
        serializedName: "subscriptions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      managementGroups: {
        serializedName: "managementGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      query: {
        serializedName: "query",
        required: true,
        type: {
          name: "String"
        }
      },
      options: {
        serializedName: "options",
        type: {
          name: "Composite",
          className: "QueryRequestOptions"
        }
      },
      facets: {
        serializedName: "facets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FacetRequest"
            }
          }
        }
      }
    }
  }
};

export const QueryRequestOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryRequestOptions",
    modelProperties: {
      skipToken: {
        serializedName: "$skipToken",
        type: {
          name: "String"
        }
      },
      top: {
        constraints: {
          InclusiveMaximum: 1000,
          InclusiveMinimum: 1
        },
        serializedName: "$top",
        type: {
          name: "Number"
        }
      },
      skip: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "$skip",
        type: {
          name: "Number"
        }
      },
      resultFormat: {
        serializedName: "resultFormat",
        type: {
          name: "Enum",
          allowedValues: ["table", "objectArray"]
        }
      },
      allowPartialScopes: {
        defaultValue: false,
        serializedName: "allowPartialScopes",
        type: {
          name: "Boolean"
        }
      },
      authorizationScopeFilter: {
        defaultValue: "AtScopeAndBelow",
        serializedName: "authorizationScopeFilter",
        type: {
          name: "Enum",
          allowedValues: [
            "AtScopeAndBelow",
            "AtScopeAndAbove",
            "AtScopeExact",
            "AtScopeAboveAndBelow"
          ]
        }
      }
    }
  }
};

export const FacetRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FacetRequest",
    modelProperties: {
      expression: {
        serializedName: "expression",
        required: true,
        type: {
          name: "String"
        }
      },
      options: {
        serializedName: "options",
        type: {
          name: "Composite",
          className: "FacetRequestOptions"
        }
      }
    }
  }
};

export const FacetRequestOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FacetRequestOptions",
    modelProperties: {
      sortBy: {
        serializedName: "sortBy",
        type: {
          name: "String"
        }
      },
      sortOrder: {
        defaultValue: "desc",
        serializedName: "sortOrder",
        type: {
          name: "Enum",
          allowedValues: ["asc", "desc"]
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      top: {
        constraints: {
          InclusiveMaximum: 1000,
          InclusiveMinimum: 1
        },
        serializedName: "$top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QueryResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryResponse",
    modelProperties: {
      totalRecords: {
        serializedName: "totalRecords",
        required: true,
        type: {
          name: "Number"
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      },
      resultTruncated: {
        serializedName: "resultTruncated",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["true", "false"]
        }
      },
      skipToken: {
        serializedName: "$skipToken",
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      facets: {
        serializedName: "facets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Facet"
            }
          }
        }
      }
    }
  }
};

export const Facet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Facet",
    uberParent: "Facet",
    polymorphicDiscriminator: {
      serializedName: "resultType",
      clientName: "resultType"
    },
    modelProperties: {
      expression: {
        serializedName: "expression",
        required: true,
        type: {
          name: "String"
        }
      },
      resultType: {
        serializedName: "resultType",
        required: true,
        type: {
          name: "String"
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
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
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
              className: "ErrorDetails"
            }
          }
        }
      }
    }
  }
};

export const ErrorDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetails",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
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

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
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

export const ResourcesHistoryRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourcesHistoryRequest",
    modelProperties: {
      subscriptions: {
        serializedName: "subscriptions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      query: {
        serializedName: "query",
        type: {
          name: "String"
        }
      },
      options: {
        serializedName: "options",
        type: {
          name: "Composite",
          className: "ResourcesHistoryRequestOptions"
        }
      },
      managementGroups: {
        serializedName: "managementGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResourcesHistoryRequestOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourcesHistoryRequestOptions",
    modelProperties: {
      interval: {
        serializedName: "interval",
        type: {
          name: "Composite",
          className: "DateTimeInterval"
        }
      },
      top: {
        constraints: {
          InclusiveMaximum: 1000,
          InclusiveMinimum: 1
        },
        serializedName: "$top",
        type: {
          name: "Number"
        }
      },
      skip: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "$skip",
        type: {
          name: "Number"
        }
      },
      skipToken: {
        serializedName: "$skipToken",
        type: {
          name: "String"
        }
      },
      resultFormat: {
        serializedName: "resultFormat",
        type: {
          name: "Enum",
          allowedValues: ["table", "objectArray"]
        }
      }
    }
  }
};

export const DateTimeInterval: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DateTimeInterval",
    modelProperties: {
      start: {
        serializedName: "start",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      end: {
        serializedName: "end",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Table: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Table",
    modelProperties: {
      columns: {
        serializedName: "columns",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Column"
            }
          }
        }
      },
      rows: {
        serializedName: "rows",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Dictionary",
                  value: { type: { name: "any" } }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const Column: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Column",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "string",
            "integer",
            "number",
            "boolean",
            "object",
            "datetime"
          ]
        }
      }
    }
  }
};

export const FacetResult: coreClient.CompositeMapper = {
  serializedName: "FacetResult",
  type: {
    name: "Composite",
    className: "FacetResult",
    uberParent: "Facet",
    polymorphicDiscriminator: Facet.type.polymorphicDiscriminator,
    modelProperties: {
      ...Facet.type.modelProperties,
      totalRecords: {
        serializedName: "totalRecords",
        required: true,
        type: {
          name: "Number"
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      },
      data: {
        serializedName: "data",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FacetError: coreClient.CompositeMapper = {
  serializedName: "FacetError",
  type: {
    name: "Composite",
    className: "FacetError",
    uberParent: "Facet",
    polymorphicDiscriminator: Facet.type.polymorphicDiscriminator,
    modelProperties: {
      ...Facet.type.modelProperties,
      errors: {
        serializedName: "errors",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetails"
            }
          }
        }
      }
    }
  }
};

export let discriminators = {
  Facet: Facet,
  "Facet.FacetResult": FacetResult,
  "Facet.FacetError": FacetError
};
