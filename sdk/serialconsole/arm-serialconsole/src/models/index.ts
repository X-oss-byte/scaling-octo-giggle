/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Serial Console operations */
export interface SerialConsoleOperations {
  /** A list of Serial Console operations */
  value?: SerialConsoleOperationsValueItem[];
}

export interface SerialConsoleOperationsValueItem {
  name?: string;
  isDataAction?: string;
  display?: SerialConsoleOperationsValueItemDisplay;
}

export interface SerialConsoleOperationsValueItemDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/** Returns whether or not Serial Console is disabled. */
export interface SerialConsoleStatus {
  /** Whether or not Serial Console is disabled. */
  disabled?: boolean;
}

/** Error saying that the provided subscription could not be found */
export interface GetSerialConsoleSubscriptionNotFound {
  /** Error code */
  code?: string;
  /** Subscription not found message */
  message?: string;
}

/** Returns whether or not Serial Console is disabled. */
export interface DisableSerialConsoleResult {
  /** Whether or not Serial Console is disabled. */
  disabled?: boolean;
}

/** Returns whether or not Serial Console is disabled (enabled). */
export interface EnableSerialConsoleResult {
  /** Whether or not Serial Console is disabled (enabled). */
  disabled?: boolean;
}

/** The list serial ports operation response. */
export interface SerialPortListResult {
  /** The list of serial ports. */
  value?: SerialPort[];
}

/** The Resource model definition. */
export interface Resource {
  /**
   * Resource Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** An error response from the service. */
export interface CloudError {
  /** Cloud error body. */
  error?: CloudErrorBody;
}

/** An error response from the Batch service. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for display in a user interface. */
  message?: string;
  /** The target of the particular error. For example, the name of the property in error. */
  target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** Returns a connection string to the serial port of the resource. */
export interface SerialPortConnectResult {
  /** Connection string to the serial port of the resource. */
  connectionString?: string;
}

/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
export type ProxyResource = Resource & {};

/** Represents the serial port of the parent resource. */
export type SerialPort = ProxyResource & {
  /** Specifies whether the port is enabled for a serial console connection. */
  state?: SerialPortState;
};
/** Defines values for SerialPortState. */
export type SerialPortState = "enabled" | "disabled";

/** Optional parameters. */
export interface ListOperationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOperations operation. */
export type ListOperationsResponse = SerialConsoleOperations;

/** Optional parameters. */
export interface GetConsoleStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getConsoleStatus operation. */
export type GetConsoleStatusResponse = SerialConsoleStatus;

/** Optional parameters. */
export interface DisableConsoleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the disableConsole operation. */
export type DisableConsoleResponse = DisableSerialConsoleResult;

/** Optional parameters. */
export interface EnableConsoleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the enableConsole operation. */
export type EnableConsoleResponse = EnableSerialConsoleResult;

/** Optional parameters. */
export interface SerialPortsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type SerialPortsListResponse = SerialPortListResult;

/** Optional parameters. */
export interface SerialPortsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SerialPortsGetResponse = SerialPort;

/** Optional parameters. */
export interface SerialPortsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type SerialPortsCreateResponse = SerialPort;

/** Optional parameters. */
export interface SerialPortsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SerialPortsListBySubscriptionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptions operation. */
export type SerialPortsListBySubscriptionsResponse = SerialPortListResult;

/** Optional parameters. */
export interface SerialPortsConnectOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the connect operation. */
export type SerialPortsConnectResponse = SerialPortConnectResult;

/** Optional parameters. */
export interface MicrosoftSerialConsoleClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
