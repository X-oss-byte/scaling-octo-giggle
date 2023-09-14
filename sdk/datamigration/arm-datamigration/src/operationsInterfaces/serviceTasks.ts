/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ProjectTask,
  ServiceTasksListOptionalParams,
  ServiceTasksCreateOrUpdateOptionalParams,
  ServiceTasksCreateOrUpdateResponse,
  ServiceTasksGetOptionalParams,
  ServiceTasksGetResponse,
  ServiceTasksDeleteOptionalParams,
  ServiceTasksUpdateOptionalParams,
  ServiceTasksUpdateResponse,
  ServiceTasksCancelOptionalParams,
  ServiceTasksCancelResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServiceTasks. */
export interface ServiceTasks {
  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * method returns a list of service level tasks owned by a service resource. Some tasks may have a
   * status of Unknown, which indicates that an error occurred while querying the status of that task.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  list(
    groupName: string,
    serviceName: string,
    options?: ServiceTasksListOptionalParams
  ): PagedAsyncIterableIterator<ProjectTask>;
  /**
   * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. The PUT method creates a new service task or updates an existing one, although since
   * service tasks have no mutable custom properties, there is little reason to update an existing one.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param taskName Name of the Task
   * @param parameters Information about the task
   * @param options The options parameters.
   */
  createOrUpdate(
    groupName: string,
    serviceName: string,
    taskName: string,
    parameters: ProjectTask,
    options?: ServiceTasksCreateOrUpdateOptionalParams
  ): Promise<ServiceTasksCreateOrUpdateResponse>;
  /**
   * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. The GET method retrieves information about a service task.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param taskName Name of the Task
   * @param options The options parameters.
   */
  get(
    groupName: string,
    serviceName: string,
    taskName: string,
    options?: ServiceTasksGetOptionalParams
  ): Promise<ServiceTasksGetResponse>;
  /**
   * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. The DELETE method deletes a service task, canceling it first if it's running.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param taskName Name of the Task
   * @param options The options parameters.
   */
  delete(
    groupName: string,
    serviceName: string,
    taskName: string,
    options?: ServiceTasksDeleteOptionalParams
  ): Promise<void>;
  /**
   * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. The PATCH method updates an existing service task, but since service tasks have no mutable
   * custom properties, there is little reason to do so.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param taskName Name of the Task
   * @param parameters Information about the task
   * @param options The options parameters.
   */
  update(
    groupName: string,
    serviceName: string,
    taskName: string,
    parameters: ProjectTask,
    options?: ServiceTasksUpdateOptionalParams
  ): Promise<ServiceTasksUpdateResponse>;
  /**
   * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. This method cancels a service task if it's currently queued or running.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param taskName Name of the Task
   * @param options The options parameters.
   */
  cancel(
    groupName: string,
    serviceName: string,
    taskName: string,
    options?: ServiceTasksCancelOptionalParams
  ): Promise<ServiceTasksCancelResponse>;
}
