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
} from "@azure/core-http";
import {
  Contacts as ContactsMapper,
  CertificateIssuerSetParameters as CertificateIssuerSetParametersMapper,
  CertificateIssuerUpdateParameters as CertificateIssuerUpdateParametersMapper,
  CertificateCreateParameters as CertificateCreateParametersMapper,
  CertificateImportParameters as CertificateImportParametersMapper,
  CertificatePolicy as CertificatePolicyMapper,
  CertificateUpdateParameters as CertificateUpdateParametersMapper,
  CertificateOperationUpdateParameter as CertificateOperationUpdateParameterMapper,
  CertificateMergeParameters as CertificateMergeParametersMapper,
  CertificateRestoreParameters as CertificateRestoreParametersMapper
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

export const vaultBaseUrl: OperationURLParameter = {
  parameterPath: "vaultBaseUrl",
  mapper: {
    serializedName: "vaultBaseUrl",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const maxresults: OperationQueryParameter = {
  parameterPath: ["options", "maxresults"],
  mapper: {
    constraints: {
      InclusiveMaximum: 25,
      InclusiveMinimum: 1
    },
    serializedName: "maxresults",
    type: {
      name: "Number"
    }
  }
};

export const includePending: OperationQueryParameter = {
  parameterPath: ["options", "includePending"],
  mapper: {
    serializedName: "includePending",
    type: {
      name: "Boolean"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    serializedName: "api-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    serializedName: "certificate-name",
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

export const contacts: OperationParameter = {
  parameterPath: "contacts",
  mapper: ContactsMapper
};

export const provider: OperationParameter = {
  parameterPath: "provider",
  mapper: CertificateIssuerSetParametersMapper
};

export const credentials: OperationParameter = {
  parameterPath: ["options", "credentials"],
  mapper: CertificateIssuerSetParametersMapper
};

export const organizationDetails: OperationParameter = {
  parameterPath: ["options", "organizationDetails"],
  mapper: CertificateIssuerSetParametersMapper
};

export const attributes: OperationParameter = {
  parameterPath: ["options", "attributes"],
  mapper: CertificateIssuerSetParametersMapper
};

export const issuerName: OperationURLParameter = {
  parameterPath: "issuerName",
  mapper: {
    serializedName: "issuer-name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const provider1: OperationParameter = {
  parameterPath: ["options", "provider"],
  mapper: CertificateIssuerUpdateParametersMapper
};

export const credentials1: OperationParameter = {
  parameterPath: ["options", "credentials"],
  mapper: CertificateIssuerUpdateParametersMapper
};

export const organizationDetails1: OperationParameter = {
  parameterPath: ["options", "organizationDetails"],
  mapper: CertificateIssuerUpdateParametersMapper
};

export const attributes1: OperationParameter = {
  parameterPath: ["options", "attributes"],
  mapper: CertificateIssuerUpdateParametersMapper
};

export const certificatePolicy: OperationParameter = {
  parameterPath: ["options", "certificatePolicy"],
  mapper: CertificateCreateParametersMapper
};

export const certificateAttributes: OperationParameter = {
  parameterPath: ["options", "certificateAttributes"],
  mapper: CertificateCreateParametersMapper
};

export const tags: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: CertificateCreateParametersMapper
};

export const certificateName1: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[0-9a-zA-Z-]+$")
    },
    serializedName: "certificate-name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const base64EncodedCertificate: OperationParameter = {
  parameterPath: "base64EncodedCertificate",
  mapper: CertificateImportParametersMapper
};

export const password: OperationParameter = {
  parameterPath: ["options", "password"],
  mapper: CertificateImportParametersMapper
};

export const certificatePolicy1: OperationParameter = {
  parameterPath: ["options", "certificatePolicy"],
  mapper: CertificateImportParametersMapper
};

export const certificateAttributes1: OperationParameter = {
  parameterPath: ["options", "certificateAttributes"],
  mapper: CertificateImportParametersMapper
};

export const tags1: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: CertificateImportParametersMapper
};

export const certificatePolicy2: OperationParameter = {
  parameterPath: "certificatePolicy",
  mapper: CertificatePolicyMapper
};

export const certificatePolicy3: OperationParameter = {
  parameterPath: ["options", "certificatePolicy"],
  mapper: CertificateUpdateParametersMapper
};

export const certificateAttributes2: OperationParameter = {
  parameterPath: ["options", "certificateAttributes"],
  mapper: CertificateUpdateParametersMapper
};

export const tags2: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: CertificateUpdateParametersMapper
};

export const certificateVersion: OperationURLParameter = {
  parameterPath: "certificateVersion",
  mapper: {
    serializedName: "certificate-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cancellationRequested: OperationParameter = {
  parameterPath: "cancellationRequested",
  mapper: CertificateOperationUpdateParameterMapper
};

export const x509Certificates: OperationParameter = {
  parameterPath: "x509Certificates",
  mapper: CertificateMergeParametersMapper
};

export const certificateAttributes3: OperationParameter = {
  parameterPath: ["options", "certificateAttributes"],
  mapper: CertificateMergeParametersMapper
};

export const tags3: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: CertificateMergeParametersMapper
};

export const certificateBundleBackup: OperationParameter = {
  parameterPath: "certificateBundleBackup",
  mapper: CertificateRestoreParametersMapper
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
