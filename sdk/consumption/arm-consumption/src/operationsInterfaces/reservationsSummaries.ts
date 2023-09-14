/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ReservationSummary,
  Datagrain,
  ReservationsSummariesListByReservationOrderOptionalParams,
  ReservationsSummariesListByReservationOrderAndReservationOptionalParams,
  ReservationsSummariesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReservationsSummaries. */
export interface ReservationsSummaries {
  /**
   * Lists the reservations summaries for daily or monthly grain.
   * @param reservationOrderId Order Id of the reservation
   * @param grain Can be daily or monthly
   * @param options The options parameters.
   */
  listByReservationOrder(
    reservationOrderId: string,
    grain: Datagrain,
    options?: ReservationsSummariesListByReservationOrderOptionalParams
  ): PagedAsyncIterableIterator<ReservationSummary>;
  /**
   * Lists the reservations summaries for daily or monthly grain.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation
   * @param grain Can be daily or monthly
   * @param options The options parameters.
   */
  listByReservationOrderAndReservation(
    reservationOrderId: string,
    reservationId: string,
    grain: Datagrain,
    options?: ReservationsSummariesListByReservationOrderAndReservationOptionalParams
  ): PagedAsyncIterableIterator<ReservationSummary>;
  /**
   * Lists the reservations summaries for the defined scope daily or monthly grain.
   * @param scope The scope associated with reservations summaries operations. This includes
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope (legacy),
   *              and
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for BillingProfile scope (modern).
   * @param grain Can be daily or monthly
   * @param options The options parameters.
   */
  list(
    scope: string,
    grain: Datagrain,
    options?: ReservationsSummariesListOptionalParams
  ): PagedAsyncIterableIterator<ReservationSummary>;
}
