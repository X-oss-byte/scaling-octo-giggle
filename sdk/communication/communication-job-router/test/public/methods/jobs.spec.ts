// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Recorder } from "@azure-tools/test-recorder";
import { assert } from "chai";
import { RouterJob, RouterClient } from "../../../src";
import { Context } from "mocha";
import {
  classificationPolicyRequest,
  distributionPolicyRequest,
  exceptionPolicyRequest,
  jobRequest,
  queueRequest
} from "../../internal/utils/testData";
import { createRecordedRouterClientWithConnectionString } from "../../internal/utils/mockClient";
import { timeoutMs } from "../../internal/utils/constants";

describe("RouterClient", function() {
  const sleepMs: number = 1500;
  let recorder: Recorder;
  let client: RouterClient;
  let request: RouterJob = jobRequest;

  // HACK: Intentionally block to avoid 'duplicate sequence number' error from service
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  describe("Job Operations", function() {
    this.beforeAll(async function(this: Context) {
      ({ client, recorder } = createRecordedRouterClientWithConnectionString(this));

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
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending() && recorder) {
        // unused
      }

      await sleep(sleepMs);
    });

    this.afterAll(async function(this: Context) {
      await sleep(sleepMs);
      await client.deleteClassificationPolicy(classificationPolicyRequest.id!, {});
      await client.deleteQueue(queueRequest.id!, {});
      await client.deleteExceptionPolicy(exceptionPolicyRequest.id!, {});
      await client.deleteDistributionPolicy(distributionPolicyRequest.id!, {});
    });

    it("should create a job", async function() {
      const result = await client.createJob(request.id!, request);

      assert.isDefined(result);
      assert.isDefined(result.id);
      assert.equal(result.id, request.id);
    }).timeout(timeoutMs);

    it("should get a job", async function() {
      const result = await client.getJob(request.id!);

      assert.isDefined(result);
      assert.isDefined(result.id);
      assert.equal(result.id, request.id);
    }).timeout(timeoutMs);

    it("should update a job", async function() {
      const patch: RouterJob = { ...request, priority: 5 };
      const result = await client.updateJob(request.id!, patch);

      assert.isDefined(result);
      assert.isDefined(result.id);
      assert.equal(result.id, request.id);
      assert.equal(result.priority, patch.priority);
    }).timeout(timeoutMs);

    it("should get in-queue position for a job", async function() {
      const result = await client.getInQueuePosition(request.id!);

      assert.isDefined(result);
      assert.isDefined(result.position);
      assert.equal(request.id, result.jobId);
    }).timeout(timeoutMs);

    it("should reclassify a job", async function() {
      const result = await client.reclassifyJob(request.id!);

      assert.isDefined(result);
    }).timeout(timeoutMs);

    it("should cancel a job", async function() {
      const result = await client.cancelJob(request.id!);

      assert.isDefined(result);
    }).timeout(timeoutMs);

    it("should delete a job", async () => {
      const result = await client.deleteJob(request.id!);

      assert.isDefined(result);
    }).timeout(timeoutMs);

    it("should list jobs", () => {
      const result = client.listJobs("all");

      assert.isNotNull(result.next());
      assert.isNotNull(result.next());
    }).timeout(timeoutMs);
  });
});
