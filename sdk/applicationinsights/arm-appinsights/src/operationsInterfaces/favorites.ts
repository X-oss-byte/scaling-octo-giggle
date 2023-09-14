/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  FavoritesListOptionalParams,
  FavoritesListResponse,
  FavoritesGetOptionalParams,
  FavoritesGetResponse,
  ApplicationInsightsComponentFavorite,
  FavoritesAddOptionalParams,
  FavoritesAddResponse,
  FavoritesUpdateOptionalParams,
  FavoritesUpdateResponse,
  FavoritesDeleteOptionalParams
} from "../models";

/** Interface representing a Favorites. */
export interface Favorites {
  /**
   * Gets a list of favorites defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: FavoritesListOptionalParams
  ): Promise<FavoritesListResponse>;
  /**
   * Get a single favorite by its FavoriteId, defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    favoriteId: string,
    options?: FavoritesGetOptionalParams
  ): Promise<FavoritesGetResponse>;
  /**
   * Adds a new favorites to an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to create a new favorite and add it
   *                           to an Application Insights component.
   * @param options The options parameters.
   */
  add(
    resourceGroupName: string,
    resourceName: string,
    favoriteId: string,
    favoriteProperties: ApplicationInsightsComponentFavorite,
    options?: FavoritesAddOptionalParams
  ): Promise<FavoritesAddResponse>;
  /**
   * Updates a favorite that has already been added to an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to update the existing favorite.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    favoriteId: string,
    favoriteProperties: ApplicationInsightsComponentFavorite,
    options?: FavoritesUpdateOptionalParams
  ): Promise<FavoritesUpdateResponse>;
  /**
   * Remove a favorite that is associated to an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    favoriteId: string,
    options?: FavoritesDeleteOptionalParams
  ): Promise<void>;
}