/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const AvailabilityStatusListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityStatusListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailabilityStatus"
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

export const AvailabilityStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityStatus",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AvailabilityStatusProperties"
        }
      }
    }
  }
};

export const AvailabilityStatusProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityStatusProperties",
    modelProperties: {
      availabilityState: {
        serializedName: "availabilityState",
        type: {
          name: "Enum",
          allowedValues: ["Available", "Unavailable", "Unknown"]
        }
      },
      summary: {
        serializedName: "summary",
        type: {
          name: "String"
        }
      },
      detailedStatus: {
        serializedName: "detailedStatus",
        type: {
          name: "String"
        }
      },
      reasonType: {
        serializedName: "reasonType",
        type: {
          name: "String"
        }
      },
      rootCauseAttributionTime: {
        serializedName: "rootCauseAttributionTime",
        type: {
          name: "DateTime"
        }
      },
      healthEventType: {
        serializedName: "healthEventType",
        type: {
          name: "String"
        }
      },
      healthEventCause: {
        serializedName: "healthEventCause",
        type: {
          name: "String"
        }
      },
      healthEventCategory: {
        serializedName: "healthEventCategory",
        type: {
          name: "String"
        }
      },
      healthEventId: {
        serializedName: "healthEventId",
        type: {
          name: "String"
        }
      },
      resolutionETA: {
        serializedName: "resolutionETA",
        type: {
          name: "DateTime"
        }
      },
      occuredTime: {
        serializedName: "occuredTime",
        type: {
          name: "DateTime"
        }
      },
      reasonChronicity: {
        serializedName: "reasonChronicity",
        type: {
          name: "Enum",
          allowedValues: ["Transient", "Persistent"]
        }
      },
      reportedTime: {
        serializedName: "reportedTime",
        type: {
          name: "DateTime"
        }
      },
      recentlyResolvedState: {
        serializedName: "recentlyResolvedState",
        type: {
          name: "Composite",
          className: "AvailabilityStatusPropertiesRecentlyResolvedState"
        }
      },
      recommendedActions: {
        serializedName: "recommendedActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RecommendedAction"
            }
          }
        }
      },
      serviceImpactingEvents: {
        serializedName: "serviceImpactingEvents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceImpactingEvent"
            }
          }
        }
      }
    }
  }
};

export const AvailabilityStatusPropertiesRecentlyResolvedState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityStatusPropertiesRecentlyResolvedState",
    modelProperties: {
      unavailableOccurredTime: {
        serializedName: "unavailableOccurredTime",
        type: {
          name: "DateTime"
        }
      },
      resolvedTime: {
        serializedName: "resolvedTime",
        type: {
          name: "DateTime"
        }
      },
      unavailabilitySummary: {
        serializedName: "unavailabilitySummary",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RecommendedAction: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecommendedAction",
    modelProperties: {
      action: {
        serializedName: "action",
        type: {
          name: "String"
        }
      },
      actionUrl: {
        serializedName: "actionUrl",
        type: {
          name: "String"
        }
      },
      actionUrlText: {
        serializedName: "actionUrlText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceImpactingEvent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceImpactingEvent",
    modelProperties: {
      eventStartTime: {
        serializedName: "eventStartTime",
        type: {
          name: "DateTime"
        }
      },
      eventStatusLastModifiedTime: {
        serializedName: "eventStatusLastModifiedTime",
        type: {
          name: "DateTime"
        }
      },
      correlationId: {
        serializedName: "correlationId",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "ServiceImpactingEventStatus"
        }
      },
      incidentProperties: {
        serializedName: "incidentProperties",
        type: {
          name: "Composite",
          className: "ServiceImpactingEventIncidentProperties"
        }
      }
    }
  }
};

export const ServiceImpactingEventStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceImpactingEventStatus",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceImpactingEventIncidentProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceImpactingEventIncidentProperties",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      service: {
        serializedName: "service",
        type: {
          name: "String"
        }
      },
      region: {
        serializedName: "region",
        type: {
          name: "String"
        }
      },
      incidentType: {
        serializedName: "incidentType",
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
      details: {
        serializedName: "details",
        readOnly: true,
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
        required: true,
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

export const StatusBanner: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StatusBanner",
    modelProperties: {
      title: {
        serializedName: "title",
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
      cloud: {
        serializedName: "cloud",
        type: {
          name: "String"
        }
      },
      lastModifiedTime: {
        serializedName: "lastModifiedTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const StatusActiveEvent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StatusActiveEvent",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      trackingId: {
        serializedName: "trackingId",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      cloud: {
        serializedName: "cloud",
        type: {
          name: "String"
        }
      },
      severity: {
        serializedName: "severity",
        type: {
          name: "String"
        }
      },
      stage: {
        serializedName: "stage",
        type: {
          name: "String"
        }
      },
      published: {
        serializedName: "published",
        type: {
          name: "Boolean"
        }
      },
      lastModifiedTime: {
        serializedName: "lastModifiedTime",
        type: {
          name: "DateTime"
        }
      },
      impacts: {
        serializedName: "impacts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmergingIssueImpact"
            }
          }
        }
      }
    }
  }
};

export const EmergingIssueImpact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmergingIssueImpact",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      regions: {
        serializedName: "regions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImpactedRegion"
            }
          }
        }
      }
    }
  }
};

export const ImpactedRegion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImpactedRegion",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
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

export const EmergingIssueListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmergingIssueListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmergingIssuesGetResult"
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

export const EmergingIssuesGetResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmergingIssuesGetResult",
    modelProperties: {
      ...Resource.type.modelProperties,
      refreshTimestamp: {
        serializedName: "properties.refreshTimestamp",
        type: {
          name: "DateTime"
        }
      },
      statusBanners: {
        serializedName: "properties.statusBanners",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StatusBanner"
            }
          }
        }
      },
      statusActiveEvents: {
        serializedName: "properties.statusActiveEvents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StatusActiveEvent"
            }
          }
        }
      }
    }
  }
};
