// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Recorder } from "@azure-tools/test-recorder";
import { assert } from "chai";
import { JobQueue, RouterClient } from "../../../src";
import { Context } from "mocha";
import {
  distributionPolicyRequest,
  exceptionPolicyRequest,
  queueRequest
} from "../../internal/utils/testData";
import { createRecordedRouterClientWithConnectionString } from "../../internal/utils/mockClient";
import { timeoutMs } from "../../internal/utils/constants";

describe("RouterClient", function() {
  let recorder: Recorder;
  let client: RouterClient;
  let request: JobQueue = queueRequest;

  describe("Queue Operations", function() {
    this.beforeAll(async function(this: Context) {
      ({ client, recorder } = createRecordedRouterClientWithConnectionString(this));

      await client.createDistributionPolicy(
        distributionPolicyRequest.id!,
        distributionPolicyRequest
      );
      await client.createExceptionPolicy(exceptionPolicyRequest.id!, exceptionPolicyRequest);
      await client.createQueue(queueRequest.id!, queueRequest);
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending() && recorder) {
        // unused
      }

      await client.deleteQueue(queueRequest.id!);
    });

    it("should create a queue", async function() {
      const result = await client.createQueue(request.id!, request);

      assert.isDefined(result);
      assert.isDefined(result?.id);
      assert.equal(result.name, request.name);
    }).timeout(timeoutMs);

    it("should get a queue", async function() {
      const response: JobQueue = await client.createQueue(request.id!, request);

      const result = await client.getQueue(request.id!);

      assert.equal(result.id, response.id);
      assert.equal(result.name, response.name);
    }).timeout(timeoutMs);

    it("should update a queue", async function() {
      const response: JobQueue = await client.createQueue(request.id!, request);

      const patch: JobQueue = { ...response, name: "new name" };
      const result = await client.updateQueue(response.id!, patch);

      assert.isDefined(result);
      assert.isDefined(result.id);
      assert.equal(result.name, patch.name);
    }).timeout(timeoutMs);

    it("should delete a queue", async function() {
      const response: JobQueue = await client.createQueue(request.id!, request);

      const result = await client.deleteQueue(response.id!);

      assert.isDefined(result);
    }).timeout(timeoutMs);

    it("should list queues", async function() {
      await client.createQueue(request.id!, request);

      const result = await client.listQueues({
        maxpagesize: 1
      });

      assert.isNotNull(result.next());
      assert.isNotNull(result.next());
    }).timeout(timeoutMs);
  });
});
