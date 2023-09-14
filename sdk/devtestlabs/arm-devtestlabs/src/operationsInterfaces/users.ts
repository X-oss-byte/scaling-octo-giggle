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
  User,
  UsersListOptionalParams,
  UsersGetOptionalParams,
  UsersGetResponse,
  UsersCreateOrUpdateOptionalParams,
  UsersCreateOrUpdateResponse,
  UsersDeleteOptionalParams,
  UserFragment,
  UsersUpdateOptionalParams,
  UsersUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Users. */
export interface Users {
  /**
   * List user profiles in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    labName: string,
    options?: UsersListOptionalParams
  ): PagedAsyncIterableIterator<User>;
  /**
   * Get user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: UsersGetOptionalParams
  ): Promise<UsersGetResponse>;
  /**
   * Create or replace an existing user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    user: User,
    options?: UsersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<UsersCreateOrUpdateResponse>,
      UsersCreateOrUpdateResponse
    >
  >;
  /**
   * Create or replace an existing user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    user: User,
    options?: UsersCreateOrUpdateOptionalParams
  ): Promise<UsersCreateOrUpdateResponse>;
  /**
   * Delete user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: UsersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: UsersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Allows modifying tags of user profiles. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    name: string,
    user: UserFragment,
    options?: UsersUpdateOptionalParams
  ): Promise<UsersUpdateResponse>;
}