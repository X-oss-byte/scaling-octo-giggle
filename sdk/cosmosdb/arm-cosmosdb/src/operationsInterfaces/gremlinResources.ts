/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GremlinDatabaseGetResults,
  GremlinResourcesListGremlinDatabasesOptionalParams,
  GremlinGraphGetResults,
  GremlinResourcesListGremlinGraphsOptionalParams,
  GremlinResourcesGetGremlinDatabaseOptionalParams,
  GremlinResourcesGetGremlinDatabaseResponse,
  GremlinDatabaseCreateUpdateParameters,
  GremlinResourcesCreateUpdateGremlinDatabaseOptionalParams,
  GremlinResourcesCreateUpdateGremlinDatabaseResponse,
  GremlinResourcesDeleteGremlinDatabaseOptionalParams,
  GremlinResourcesGetGremlinDatabaseThroughputOptionalParams,
  GremlinResourcesGetGremlinDatabaseThroughputResponse,
  ThroughputSettingsUpdateParameters,
  GremlinResourcesUpdateGremlinDatabaseThroughputOptionalParams,
  GremlinResourcesUpdateGremlinDatabaseThroughputResponse,
  GremlinResourcesMigrateGremlinDatabaseToAutoscaleOptionalParams,
  GremlinResourcesMigrateGremlinDatabaseToAutoscaleResponse,
  GremlinResourcesMigrateGremlinDatabaseToManualThroughputOptionalParams,
  GremlinResourcesMigrateGremlinDatabaseToManualThroughputResponse,
  GremlinResourcesGetGremlinGraphOptionalParams,
  GremlinResourcesGetGremlinGraphResponse,
  GremlinGraphCreateUpdateParameters,
  GremlinResourcesCreateUpdateGremlinGraphOptionalParams,
  GremlinResourcesCreateUpdateGremlinGraphResponse,
  GremlinResourcesDeleteGremlinGraphOptionalParams,
  GremlinResourcesGetGremlinGraphThroughputOptionalParams,
  GremlinResourcesGetGremlinGraphThroughputResponse,
  GremlinResourcesUpdateGremlinGraphThroughputOptionalParams,
  GremlinResourcesUpdateGremlinGraphThroughputResponse,
  GremlinResourcesMigrateGremlinGraphToAutoscaleOptionalParams,
  GremlinResourcesMigrateGremlinGraphToAutoscaleResponse,
  GremlinResourcesMigrateGremlinGraphToManualThroughputOptionalParams,
  GremlinResourcesMigrateGremlinGraphToManualThroughputResponse,
  ContinuousBackupRestoreLocation,
  GremlinResourcesRetrieveContinuousBackupInformationOptionalParams,
  GremlinResourcesRetrieveContinuousBackupInformationResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GremlinResources. */
export interface GremlinResources {
  /**
   * Lists the Gremlin databases under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  listGremlinDatabases(
    resourceGroupName: string,
    accountName: string,
    options?: GremlinResourcesListGremlinDatabasesOptionalParams
  ): PagedAsyncIterableIterator<GremlinDatabaseGetResults>;
  /**
   * Lists the Gremlin graph under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  listGremlinGraphs(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesListGremlinGraphsOptionalParams
  ): PagedAsyncIterableIterator<GremlinGraphGetResults>;
  /**
   * Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided
   * name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  getGremlinDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesGetGremlinDatabaseOptionalParams
  ): Promise<GremlinResourcesGetGremlinDatabaseResponse>;
  /**
   * Create or update an Azure Cosmos DB Gremlin database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param createUpdateGremlinDatabaseParameters The parameters to provide for the current Gremlin
   *                                              database.
   * @param options The options parameters.
   */
  beginCreateUpdateGremlinDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    createUpdateGremlinDatabaseParameters: GremlinDatabaseCreateUpdateParameters,
    options?: GremlinResourcesCreateUpdateGremlinDatabaseOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GremlinResourcesCreateUpdateGremlinDatabaseResponse>,
      GremlinResourcesCreateUpdateGremlinDatabaseResponse
    >
  >;
  /**
   * Create or update an Azure Cosmos DB Gremlin database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param createUpdateGremlinDatabaseParameters The parameters to provide for the current Gremlin
   *                                              database.
   * @param options The options parameters.
   */
  beginCreateUpdateGremlinDatabaseAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    createUpdateGremlinDatabaseParameters: GremlinDatabaseCreateUpdateParameters,
    options?: GremlinResourcesCreateUpdateGremlinDatabaseOptionalParams
  ): Promise<GremlinResourcesCreateUpdateGremlinDatabaseResponse>;
  /**
   * Deletes an existing Azure Cosmos DB Gremlin database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  beginDeleteGremlinDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesDeleteGremlinDatabaseOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing Azure Cosmos DB Gremlin database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  beginDeleteGremlinDatabaseAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesDeleteGremlinDatabaseOptionalParams
  ): Promise<void>;
  /**
   * Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  getGremlinDatabaseThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesGetGremlinDatabaseThroughputOptionalParams
  ): Promise<GremlinResourcesGetGremlinDatabaseThroughputResponse>;
  /**
   * Update RUs per second of an Azure Cosmos DB Gremlin database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Gremlin database.
   * @param options The options parameters.
   */
  beginUpdateGremlinDatabaseThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: GremlinResourcesUpdateGremlinDatabaseThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        GremlinResourcesUpdateGremlinDatabaseThroughputResponse
      >,
      GremlinResourcesUpdateGremlinDatabaseThroughputResponse
    >
  >;
  /**
   * Update RUs per second of an Azure Cosmos DB Gremlin database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Gremlin database.
   * @param options The options parameters.
   */
  beginUpdateGremlinDatabaseThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: GremlinResourcesUpdateGremlinDatabaseThroughputOptionalParams
  ): Promise<GremlinResourcesUpdateGremlinDatabaseThroughputResponse>;
  /**
   * Migrate an Azure Cosmos DB Gremlin database from manual throughput to autoscale
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  beginMigrateGremlinDatabaseToAutoscale(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesMigrateGremlinDatabaseToAutoscaleOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        GremlinResourcesMigrateGremlinDatabaseToAutoscaleResponse
      >,
      GremlinResourcesMigrateGremlinDatabaseToAutoscaleResponse
    >
  >;
  /**
   * Migrate an Azure Cosmos DB Gremlin database from manual throughput to autoscale
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  beginMigrateGremlinDatabaseToAutoscaleAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesMigrateGremlinDatabaseToAutoscaleOptionalParams
  ): Promise<GremlinResourcesMigrateGremlinDatabaseToAutoscaleResponse>;
  /**
   * Migrate an Azure Cosmos DB Gremlin database from autoscale to manual throughput
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  beginMigrateGremlinDatabaseToManualThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesMigrateGremlinDatabaseToManualThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        GremlinResourcesMigrateGremlinDatabaseToManualThroughputResponse
      >,
      GremlinResourcesMigrateGremlinDatabaseToManualThroughputResponse
    >
  >;
  /**
   * Migrate an Azure Cosmos DB Gremlin database from autoscale to manual throughput
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  beginMigrateGremlinDatabaseToManualThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: GremlinResourcesMigrateGremlinDatabaseToManualThroughputOptionalParams
  ): Promise<GremlinResourcesMigrateGremlinDatabaseToManualThroughputResponse>;
  /**
   * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  getGremlinGraph(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: GremlinResourcesGetGremlinGraphOptionalParams
  ): Promise<GremlinResourcesGetGremlinGraphResponse>;
  /**
   * Create or update an Azure Cosmos DB Gremlin graph
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param createUpdateGremlinGraphParameters The parameters to provide for the current Gremlin graph.
   * @param options The options parameters.
   */
  beginCreateUpdateGremlinGraph(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    createUpdateGremlinGraphParameters: GremlinGraphCreateUpdateParameters,
    options?: GremlinResourcesCreateUpdateGremlinGraphOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GremlinResourcesCreateUpdateGremlinGraphResponse>,
      GremlinResourcesCreateUpdateGremlinGraphResponse
    >
  >;
  /**
   * Create or update an Azure Cosmos DB Gremlin graph
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param createUpdateGremlinGraphParameters The parameters to provide for the current Gremlin graph.
   * @param options The options parameters.
   */
  beginCreateUpdateGremlinGraphAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    createUpdateGremlinGraphParameters: GremlinGraphCreateUpdateParameters,
    options?: GremlinResourcesCreateUpdateGremlinGraphOptionalParams
  ): Promise<GremlinResourcesCreateUpdateGremlinGraphResponse>;
  /**
   * Deletes an existing Azure Cosmos DB Gremlin graph.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  beginDeleteGremlinGraph(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: GremlinResourcesDeleteGremlinGraphOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing Azure Cosmos DB Gremlin graph.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  beginDeleteGremlinGraphAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: GremlinResourcesDeleteGremlinGraphOptionalParams
  ): Promise<void>;
  /**
   * Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the
   * provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  getGremlinGraphThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: GremlinResourcesGetGremlinGraphThroughputOptionalParams
  ): Promise<GremlinResourcesGetGremlinGraphThroughputResponse>;
  /**
   * Update RUs per second of an Azure Cosmos DB Gremlin graph
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Gremlin graph.
   * @param options The options parameters.
   */
  beginUpdateGremlinGraphThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: GremlinResourcesUpdateGremlinGraphThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GremlinResourcesUpdateGremlinGraphThroughputResponse>,
      GremlinResourcesUpdateGremlinGraphThroughputResponse
    >
  >;
  /**
   * Update RUs per second of an Azure Cosmos DB Gremlin graph
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Gremlin graph.
   * @param options The options parameters.
   */
  beginUpdateGremlinGraphThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: GremlinResourcesUpdateGremlinGraphThroughputOptionalParams
  ): Promise<GremlinResourcesUpdateGremlinGraphThroughputResponse>;
  /**
   * Migrate an Azure Cosmos DB Gremlin graph from manual throughput to autoscale
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  beginMigrateGremlinGraphToAutoscale(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: GremlinResourcesMigrateGremlinGraphToAutoscaleOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        GremlinResourcesMigrateGremlinGraphToAutoscaleResponse
      >,
      GremlinResourcesMigrateGremlinGraphToAutoscaleResponse
    >
  >;
  /**
   * Migrate an Azure Cosmos DB Gremlin graph from manual throughput to autoscale
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  beginMigrateGremlinGraphToAutoscaleAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: GremlinResourcesMigrateGremlinGraphToAutoscaleOptionalParams
  ): Promise<GremlinResourcesMigrateGremlinGraphToAutoscaleResponse>;
  /**
   * Migrate an Azure Cosmos DB Gremlin graph from autoscale to manual throughput
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  beginMigrateGremlinGraphToManualThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: GremlinResourcesMigrateGremlinGraphToManualThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        GremlinResourcesMigrateGremlinGraphToManualThroughputResponse
      >,
      GremlinResourcesMigrateGremlinGraphToManualThroughputResponse
    >
  >;
  /**
   * Migrate an Azure Cosmos DB Gremlin graph from autoscale to manual throughput
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  beginMigrateGremlinGraphToManualThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: GremlinResourcesMigrateGremlinGraphToManualThroughputOptionalParams
  ): Promise<GremlinResourcesMigrateGremlinGraphToManualThroughputResponse>;
  /**
   * Retrieves continuous backup information for a gremlin graph.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param location The name of the continuous backup restore location.
   * @param options The options parameters.
   */
  beginRetrieveContinuousBackupInformation(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    location: ContinuousBackupRestoreLocation,
    options?: GremlinResourcesRetrieveContinuousBackupInformationOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        GremlinResourcesRetrieveContinuousBackupInformationResponse
      >,
      GremlinResourcesRetrieveContinuousBackupInformationResponse
    >
  >;
  /**
   * Retrieves continuous backup information for a gremlin graph.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param location The name of the continuous backup restore location.
   * @param options The options parameters.
   */
  beginRetrieveContinuousBackupInformationAndWait(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    location: ContinuousBackupRestoreLocation,
    options?: GremlinResourcesRetrieveContinuousBackupInformationOptionalParams
  ): Promise<GremlinResourcesRetrieveContinuousBackupInformationResponse>;
}