// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { RouterClient, RouterJob } from "../../../src";
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
  let client: RouterClient;

  // HACK: Intentionally block to avoid 'duplicate sequence number' error from service
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  describe("Cancellation Scenario", function() {
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
      await client.createJob(jobRequest.id!, jobRequest);
    });

    this.afterAll(async function(this: Context) {
      await sleep(sleepMs);
      await client.deleteJob(jobRequest.id!);
      await client.deleteClassificationPolicy(classificationPolicyRequest.id!);
      await client.deleteQueue(queueRequest.id!);
      await client.deleteExceptionPolicy(exceptionPolicyRequest.id!);
      await client.deleteDistributionPolicy(distributionPolicyRequest.id!);
    });

    it("should complete cancellation scenario", async () => {
      const dispositionCode = "dispositionCode";
      const jobStatusQueued = "queued";
      const jobStatusCancelled = "cancelled";

      let job: RouterJob = jobRequest;
      while (job.jobStatus !== jobStatusQueued) {
        job = await client.getJob(job.id!);
      }
      assert.equal(job.jobStatus, jobStatusQueued);

      await client.cancelJob(job.id!, { dispositionCode });

      var result = await client.getJob(job.id!);
      assert.equal(result.jobStatus, jobStatusCancelled);
      assert.equal(result.dispositionCode, dispositionCode);
    }).timeout(timeoutMs);
  });
});
