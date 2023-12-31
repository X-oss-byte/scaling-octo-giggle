/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationsListResult",
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
        readOnly: true,
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

export const ExceptionResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExceptionResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ServiceError"
        }
      }
    }
  }
};

export const ServiceError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceError",
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
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceErrorDetail"
            }
          }
        }
      }
    }
  }
};

export const ServiceErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceErrorDetail",
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
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServicesListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServicesListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Service"
            }
          }
        }
      }
    }
  }
};

export const Service: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Service",
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
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      resourceTypes: {
        serializedName: "properties.resourceTypes",
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

export const ProblemClassificationsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProblemClassificationsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProblemClassification"
            }
          }
        }
      }
    }
  }
};

export const ProblemClassification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProblemClassification",
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
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityInput",
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
            "Microsoft.Support/supportTickets",
            "Microsoft.Support/communications"
          ]
        }
      }
    }
  }
};

export const CheckNameAvailabilityOutput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityOutput",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
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
      }
    }
  }
};

export const SupportTicketsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SupportTicketsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SupportTicketDetails"
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

export const SupportTicketDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SupportTicketDetails",
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
      supportTicketId: {
        serializedName: "properties.supportTicketId",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      problemClassificationId: {
        serializedName: "properties.problemClassificationId",
        type: {
          name: "String"
        }
      },
      problemClassificationDisplayName: {
        serializedName: "properties.problemClassificationDisplayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      severity: {
        serializedName: "properties.severity",
        type: {
          name: "String"
        }
      },
      enrollmentId: {
        serializedName: "properties.enrollmentId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      require24X7Response: {
        serializedName: "properties.require24X7Response",
        type: {
          name: "Boolean"
        }
      },
      contactDetails: {
        serializedName: "properties.contactDetails",
        type: {
          name: "Composite",
          className: "ContactProfile"
        }
      },
      serviceLevelAgreement: {
        serializedName: "properties.serviceLevelAgreement",
        type: {
          name: "Composite",
          className: "ServiceLevelAgreement"
        }
      },
      supportEngineer: {
        serializedName: "properties.supportEngineer",
        type: {
          name: "Composite",
          className: "SupportEngineer"
        }
      },
      supportPlanType: {
        serializedName: "properties.supportPlanType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "properties.title",
        type: {
          name: "String"
        }
      },
      problemStartTime: {
        serializedName: "properties.problemStartTime",
        type: {
          name: "DateTime"
        }
      },
      serviceId: {
        serializedName: "properties.serviceId",
        type: {
          name: "String"
        }
      },
      serviceDisplayName: {
        serializedName: "properties.serviceDisplayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      createdDate: {
        serializedName: "properties.createdDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      modifiedDate: {
        serializedName: "properties.modifiedDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      technicalTicketDetails: {
        serializedName: "properties.technicalTicketDetails",
        type: {
          name: "Composite",
          className: "TechnicalTicketDetails"
        }
      },
      quotaTicketDetails: {
        serializedName: "properties.quotaTicketDetails",
        type: {
          name: "Composite",
          className: "QuotaTicketDetails"
        }
      }
    }
  }
};

export const ContactProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactProfile",
    modelProperties: {
      firstName: {
        serializedName: "firstName",
        required: true,
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "lastName",
        required: true,
        type: {
          name: "String"
        }
      },
      preferredContactMethod: {
        serializedName: "preferredContactMethod",
        required: true,
        type: {
          name: "String"
        }
      },
      primaryEmailAddress: {
        serializedName: "primaryEmailAddress",
        required: true,
        type: {
          name: "String"
        }
      },
      additionalEmailAddresses: {
        serializedName: "additionalEmailAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      preferredTimeZone: {
        serializedName: "preferredTimeZone",
        required: true,
        type: {
          name: "String"
        }
      },
      country: {
        serializedName: "country",
        required: true,
        type: {
          name: "String"
        }
      },
      preferredSupportLanguage: {
        serializedName: "preferredSupportLanguage",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceLevelAgreement: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceLevelAgreement",
    modelProperties: {
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      expirationTime: {
        serializedName: "expirationTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      slaMinutes: {
        serializedName: "slaMinutes",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SupportEngineer: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SupportEngineer",
    modelProperties: {
      emailAddress: {
        serializedName: "emailAddress",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TechnicalTicketDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TechnicalTicketDetails",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QuotaTicketDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaTicketDetails",
    modelProperties: {
      quotaChangeRequestSubType: {
        serializedName: "quotaChangeRequestSubType",
        type: {
          name: "String"
        }
      },
      quotaChangeRequestVersion: {
        serializedName: "quotaChangeRequestVersion",
        type: {
          name: "String"
        }
      },
      quotaChangeRequests: {
        serializedName: "quotaChangeRequests",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QuotaChangeRequest"
            }
          }
        }
      }
    }
  }
};

export const QuotaChangeRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaChangeRequest",
    modelProperties: {
      region: {
        serializedName: "region",
        type: {
          name: "String"
        }
      },
      payload: {
        serializedName: "payload",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateSupportTicket: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateSupportTicket",
    modelProperties: {
      severity: {
        serializedName: "severity",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      contactDetails: {
        serializedName: "contactDetails",
        type: {
          name: "Composite",
          className: "UpdateContactProfile"
        }
      }
    }
  }
};

export const UpdateContactProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateContactProfile",
    modelProperties: {
      firstName: {
        serializedName: "firstName",
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "lastName",
        type: {
          name: "String"
        }
      },
      preferredContactMethod: {
        serializedName: "preferredContactMethod",
        type: {
          name: "String"
        }
      },
      primaryEmailAddress: {
        serializedName: "primaryEmailAddress",
        type: {
          name: "String"
        }
      },
      additionalEmailAddresses: {
        serializedName: "additionalEmailAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      preferredTimeZone: {
        serializedName: "preferredTimeZone",
        type: {
          name: "String"
        }
      },
      country: {
        serializedName: "country",
        type: {
          name: "String"
        }
      },
      preferredSupportLanguage: {
        serializedName: "preferredSupportLanguage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationDetails"
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

export const CommunicationDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationDetails",
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
      communicationType: {
        serializedName: "properties.communicationType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      communicationDirection: {
        serializedName: "properties.communicationDirection",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sender: {
        serializedName: "properties.sender",
        type: {
          name: "String"
        }
      },
      subject: {
        serializedName: "properties.subject",
        type: {
          name: "String"
        }
      },
      body: {
        serializedName: "properties.body",
        type: {
          name: "String"
        }
      },
      createdDate: {
        serializedName: "properties.createdDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};
