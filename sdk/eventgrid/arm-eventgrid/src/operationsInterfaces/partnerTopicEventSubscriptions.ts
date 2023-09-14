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
  EventSubscription,
  PartnerTopicEventSubscriptionsListByPartnerTopicOptionalParams,
  PartnerTopicEventSubscriptionsGetOptionalParams,
  PartnerTopicEventSubscriptionsGetResponse,
  PartnerTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  PartnerTopicEventSubscriptionsCreateOrUpdateResponse,
  PartnerTopicEventSubscriptionsDeleteOptionalParams,
  EventSubscriptionUpdateParameters,
  PartnerTopicEventSubscriptionsUpdateOptionalParams,
  PartnerTopicEventSubscriptionsUpdateResponse,
  PartnerTopicEventSubscriptionsGetFullUrlOptionalParams,
  PartnerTopicEventSubscriptionsGetFullUrlResponse,
  PartnerTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  PartnerTopicEventSubscriptionsGetDeliveryAttributesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PartnerTopicEventSubscriptions. */
export interface PartnerTopicEventSubscriptions {
  /**
   * List event subscriptions that belong to a specific partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param options The options parameters.
   */
  listByPartnerTopic(
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicEventSubscriptionsListByPartnerTopicOptionalParams
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * Get properties of an event subscription of a partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be found. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsGetOptionalParams
  ): Promise<PartnerTopicEventSubscriptionsGetResponse>;
  /**
   * Asynchronously creates or updates an event subscription of a partner topic with the specified
   * parameters. Existing event subscriptions will be updated with this API.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: PartnerTopicEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PartnerTopicEventSubscriptionsCreateOrUpdateResponse>,
      PartnerTopicEventSubscriptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates or updates an event subscription of a partner topic with the specified
   * parameters. Existing event subscriptions will be updated with this API.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: PartnerTopicEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<PartnerTopicEventSubscriptionsCreateOrUpdateResponse>;
  /**
   * Delete an existing event subscription of a partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete an existing event subscription of a partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update an existing event subscription of a partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: PartnerTopicEventSubscriptionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PartnerTopicEventSubscriptionsUpdateResponse>,
      PartnerTopicEventSubscriptionsUpdateResponse
    >
  >;
  /**
   * Update an existing event subscription of a partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: PartnerTopicEventSubscriptionsUpdateOptionalParams
  ): Promise<PartnerTopicEventSubscriptionsUpdateResponse>;
  /**
   * Get the full endpoint URL for an event subscription of a partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  getFullUrl(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsGetFullUrlOptionalParams
  ): Promise<PartnerTopicEventSubscriptionsGetFullUrlResponse>;
  /**
   * Get all delivery attributes for an event subscription of a partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  getDeliveryAttributes(
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsGetDeliveryAttributesOptionalParams
  ): Promise<PartnerTopicEventSubscriptionsGetDeliveryAttributesResponse>;
}