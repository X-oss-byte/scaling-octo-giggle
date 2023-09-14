// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { JobOffer, RouterClient, RouterWorker } from "../../../src";
import { Context } from "mocha";
import {
  classificationPolicyRequest,
  distributionPolicyRequest,
  exceptionPolicyRequest,
  jobRequest,
  queueRequest,
  workerRequest
} from "../../internal/utils/testData";
import { createRecordedRouterClientWithConnectionString } from "../../internal/utils/mockClient";
import { timeoutMs } from "../../internal/utils/constants";

describe("RouterClient", function() {
  const sleepMs: number = 1500;
  let client: RouterClient;

  // HACK: Intentionally block to avoid 'duplicate sequence number' error from service
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  describe("Assignment Scenario", function() {
    this.beforeAll(async function(this: Context) {
      ({ client } = createRecordedRouterClientWithConnectionString(this));

      await client.createDistributionPolicy(
        distributionPolicyRequest.id!,
        distributionPolicyRequest
      );
      await client.createExceptionPolicy(exceptionPolicyRequest.id!, exceptionPolicyRequest);
      await client.createQueue(queueRequest.id!, queueRequest);
      await client.createClassificationPolicy(
        classificationPolicyRequest.id!,
        classificationPolicyRequest
      );
      await client.createWorker(workerRequest.id!, workerRequest);
      await client.createJob(jobRequest.id!, jobRequest);
    });

    this.afterAll(async function(this: Context) {
      await sleep(sleepMs);
      await client.deleteJob(jobRequest.id!);
      await client.deleteWorker(workerRequest.id!);
      await client.deleteClassificationPolicy(classificationPolicyRequest.id!);
      await client.deleteQueue(queueRequest.id!);
      await client.deleteExceptionPolicy(exceptionPolicyRequest.id!);
      await client.deleteDistributionPolicy(distributionPolicyRequest.id!);
    });

    it("should complete assignment scenario", async () => {
      let worker: RouterWorker = workerRequest;
      while (!worker.offers) {
        worker = await client.getWorker(workerRequest.id!);
      }

      const offer: JobOffer = worker.offers[0];
      console.log(offer);
      assert.isTrue(offer.jobId == jobRequest.id);
      assert.equal(offer.capacityCost, 1);
      assert.isNotNull(offer.offerTimeUtc);
      assert.isNotNull(offer.expiryTimeUtc);

      const acceptOfferResponse = await client.acceptJobOffer(worker.id!, offer.id);
      assert.equal(acceptOfferResponse.jobId, jobRequest.id);
      assert.equal(acceptOfferResponse.workerId, workerRequest.id);
      assert.throws(async () => await client.declineJobOffer(worker.id!, offer.id));

      const completeJobResponse = await client.completeJob(
        jobRequest.id!,
        acceptOfferResponse.assignmentId
      );
      assert.equal(completeJobResponse._response.status, 200);

      const closeJobResponse = await client.closeJob(
        jobRequest.id!,
        acceptOfferResponse.assignmentId
      );
      assert.equal(closeJobResponse._response.status, 200);

      const { assignments } = await client.getJob(jobRequest.id!);
      const assignment = assignments?.[0];
      assert.isNotNull(assignment?.assignTime);
      assert.isNotNull(assignment?.completeTime);
      assert.isNotNull(assignment?.closeTime);
      assert.equal(assignment?.workerId, workerRequest.id);
    }).timeout(timeoutMs);
  });
});
