/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing QueryBody.
 * The Analytics query. Learn more about the [Analytics query
 * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
 *
 */
export interface QueryBody {
  /**
   * @member {string} query The query to execute.
   */
  query: string;
  /**
   * @member {string} [timespan] Optional. The timespan over which to query
   * data. This is an ISO8601 time period value.  This timespan is applied in
   * addition to any that are specified in the query expression.
   */
  timespan?: string;
  /**
   * @member {string[]} [workspaces] A list of workspaces that are included in
   * the query.
   */
  workspaces?: string[];
}

/**
 * @interface
 * An interface representing Column.
 * @summary A table column.
 *
 * A column in a table.
 *
 */
export interface Column {
  /**
   * @member {string} [name] The name of this column.
   */
  name?: string;
  /**
   * @member {string} [type] The data type of this column.
   */
  type?: string;
}

/**
 * @interface
 * An interface representing Table.
 * @summary A query response table.
 *
 * Contains the columns and rows for one table in a query response.
 *
 */
export interface Table {
  /**
   * @member {string} name The name of the table.
   */
  name: string;
  /**
   * @member {Column[]} columns The list of columns in this table.
   */
  columns: Column[];
  /**
   * @member {string[][]} rows The resulting rows from this query.
   */
  rows: string[][];
}

/**
 * @interface
 * An interface representing QueryResults.
 * @summary A query response.
 *
 * Contains the tables, columns & rows resulting from a query.
 *
 */
export interface QueryResults {
  /**
   * @member {Table[]} tables The list of tables, columns and rows.
   */
  tables: Table[];
}

/**
 * @interface
 * An interface representing ErrorDetail.
 * @summary Error details.
 *
 */
export interface ErrorDetail {
  /**
   * @member {string} code The error's code.
   */
  code: string;
  /**
   * @member {string} message A human readable error message.
   */
  message: string;
  /**
   * @member {string} [target] Indicates which property in the request is
   * responsible for the error.
   */
  target?: string;
  /**
   * @member {string} [value] Indicates which value in 'target' is responsible
   * for the error.
   */
  value?: string;
  /**
   * @member {string[]} [resources] Indicates resources which were responsible
   * for the error.
   */
  resources?: string[];
  /**
   * @member {any} [additionalProperties]
   */
  additionalProperties?: any;
}

/**
 * @interface
 * An interface representing ErrorInfo.
 * @summary The code and message for an error.
 *
 */
export interface ErrorInfo {
  /**
   * @member {string} code A machine readable error code.
   */
  code: string;
  /**
   * @member {string} message A human readable error message.
   */
  message: string;
  /**
   * @member {ErrorDetail[]} [details] error details.
   */
  details?: ErrorDetail[];
  /**
   * @member {ErrorInfo} [innererror] Inner error details if they exist.
   */
  innererror?: ErrorInfo;
  /**
   * @member {any} [additionalProperties]
   */
  additionalProperties?: any;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * @summary Error details.
 *
 * Contains details when the response code indicates an error.
 *
 */
export interface ErrorResponse {
  /**
   * @member {ErrorInfo} error The error details.
   */
  error: ErrorInfo;
}

/**
 * @interface
 * An interface representing LogAnalyticsClientOptions.
 * @extends ServiceClientOptions
 */
export interface LogAnalyticsClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * Contains response data for the execute operation.
 */
export type QueryExecuteResponse = QueryResults & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: QueryResults;
    };
};
