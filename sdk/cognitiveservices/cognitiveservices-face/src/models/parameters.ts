/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const applyScope: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "applyScope"
  ],
  mapper: {
    serializedName: "applyScope",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const detectionModel: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "detectionModel"
  ],
  mapper: {
    serializedName: "detectionModel",
    defaultValue: 'detection_01',
    type: {
      name: "String"
    }
  }
};
export const endpoint: msRest.OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    required: true,
    serializedName: "Endpoint",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const faceIdTimeToLive: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "faceIdTimeToLive"
  ],
  mapper: {
    serializedName: "faceIdTimeToLive",
    defaultValue: 86400,
    constraints: {
      InclusiveMaximum: 86400,
      InclusiveMinimum: 60
    },
    type: {
      name: "Number"
    }
  }
};
export const faceListId: msRest.OperationURLParameter = {
  parameterPath: "faceListId",
  mapper: {
    required: true,
    serializedName: "faceListId",
    constraints: {
      MaxLength: 64,
      Pattern: /^[a-z0-9-_]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const largeFaceListId: msRest.OperationURLParameter = {
  parameterPath: "largeFaceListId",
  mapper: {
    required: true,
    serializedName: "largeFaceListId",
    constraints: {
      MaxLength: 64,
      Pattern: /^[a-z0-9-_]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const largePersonGroupId: msRest.OperationURLParameter = {
  parameterPath: "largePersonGroupId",
  mapper: {
    required: true,
    serializedName: "largePersonGroupId",
    constraints: {
      MaxLength: 64,
      Pattern: /^[a-z0-9-_]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const operationId: msRest.OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    required: true,
    serializedName: "operationId",
    type: {
      name: "Uuid"
    }
  }
};
export const persistedFaceId: msRest.OperationURLParameter = {
  parameterPath: "persistedFaceId",
  mapper: {
    required: true,
    serializedName: "persistedFaceId",
    type: {
      name: "Uuid"
    }
  }
};
export const personGroupId: msRest.OperationURLParameter = {
  parameterPath: "personGroupId",
  mapper: {
    required: true,
    serializedName: "personGroupId",
    constraints: {
      MaxLength: 64,
      Pattern: /^[a-z0-9-_]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const personId: msRest.OperationURLParameter = {
  parameterPath: "personId",
  mapper: {
    required: true,
    serializedName: "personId",
    type: {
      name: "Uuid"
    }
  }
};
export const recognitionModel: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "recognitionModel"
  ],
  mapper: {
    serializedName: "recognitionModel",
    defaultValue: 'recognition_01',
    type: {
      name: "String"
    }
  }
};
export const returnFaceAttributes: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "returnFaceAttributes"
  ],
  mapper: {
    serializedName: "returnFaceAttributes",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: [
            "age",
            "gender",
            "headPose",
            "smile",
            "facialHair",
            "glasses",
            "emotion",
            "hair",
            "makeup",
            "occlusion",
            "accessories",
            "blur",
            "exposure",
            "noise",
            "mask"
          ]
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const returnFaceId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "returnFaceId"
  ],
  mapper: {
    serializedName: "returnFaceId",
    defaultValue: true,
    type: {
      name: "Boolean"
    }
  }
};
export const returnFaceLandmarks: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "returnFaceLandmarks"
  ],
  mapper: {
    serializedName: "returnFaceLandmarks",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const returnRecognitionModel: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "returnRecognitionModel"
  ],
  mapper: {
    serializedName: "returnRecognitionModel",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const snapshotId: msRest.OperationURLParameter = {
  parameterPath: "snapshotId",
  mapper: {
    required: true,
    serializedName: "snapshotId",
    type: {
      name: "Uuid"
    }
  }
};
export const start0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "start"
  ],
  mapper: {
    serializedName: "start",
    type: {
      name: "String"
    }
  }
};
export const start1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "start"
  ],
  mapper: {
    serializedName: "start",
    constraints: {
      MaxLength: 64
    },
    type: {
      name: "String"
    }
  }
};
export const targetFace: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "targetFace"
  ],
  mapper: {
    serializedName: "targetFace",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Number"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const top0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "top",
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const top1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "top",
    defaultValue: 1000,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const type: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "type"
  ],
  mapper: {
    serializedName: "type",
    type: {
      name: "Enum",
      allowedValues: [
        "FaceList",
        "LargeFaceList",
        "LargePersonGroup",
        "PersonGroup"
      ]
    }
  }
};
export const userData: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "userData"
  ],
  mapper: {
    serializedName: "userData",
    constraints: {
      MaxLength: 1024
    },
    type: {
      name: "String"
    }
  }
};
