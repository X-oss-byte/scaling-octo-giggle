// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Recorder } from "@azure-tools/test-recorder";
import { assert } from "chai";
import { ExceptionPolicy, RouterClient } from "../../../src";
import { Context } from "mocha";
import {
  classificationPolicyRequest,
  distributionPolicyRequest,
  exceptionPolicyRequest,
  queueRequest
} from "../../internal/utils/testData";
import { createRecordedRouterClientWithConnectionString } from "../../internal/utils/mockClient";
import { timeoutMs } from "../../internal/utils/constants";

describe("RouterClient", function() {
  let recorder: Recorder;
  let client: RouterClient;
  let request: ExceptionPolicy = exceptionPolicyRequest;

  describe("Exception Policy Operations", function() {
    beforeEach(function(this: Context) {
      ({ client, recorder } = createRecordedRouterClientWithConnectionString(this));
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending() && recorder) {
        // unused
      }

      await client.deleteExceptionPolicy(exceptionPolicyRequest.id!);
    });

    it("should create an exception policy", async function() {
      const result = await client.createExceptionPolicy(request.id!, request);

      assert.isDefined(result);
      assert.isDefined(result?.id);
      assert.equal(result.name, request.name);
    }).timeout(timeoutMs);

    it("should get an exception policy", async function() {
      const response: ExceptionPolicy = await client.createExceptionPolicy(request.id!, request);

      const result = await client.getExceptionPolicy(request.id!);

      assert.equal(result.id, response.id);
      assert.equal(result.name, response.name);
      assert.deepEqual(result.exceptionRules, response.exceptionRules);
    }).timeout(timeoutMs);

    it("should update an exception policy", async function() {
      const response: ExceptionPolicy = await client.createExceptionPolicy(request.id!, request);

      const patch: ExceptionPolicy = { ...response, name: "new name" };
      const result = await client.updateExceptionPolicy(response.id!, patch);

      assert.isDefined(result);
      assert.isDefined(result.id);
      assert.equal(result.name, patch.name);
    }).timeout(timeoutMs);

    it("should delete an exception policy", async function() {
      await client.deleteQueue(queueRequest.id!);
      await client.deleteExceptionPolicy(exceptionPolicyRequest.id!);
      await client.deleteDistributionPolicy(distributionPolicyRequest.id!);
      await client.deleteClassificationPolicy(classificationPolicyRequest.id!);

      const response: ExceptionPolicy = await client.createExceptionPolicy(request.id!, request);

      const result = await client.deleteExceptionPolicy(response.id!);

      assert.isDefined(result);
    }).timeout(timeoutMs);

    it("should list exception policies", async function() {
      await client.createExceptionPolicy(request.id!, request);

      const result = await client.listExceptionPolicies({
        maxpagesize: 1
      });

      assert.isNotNull(result.next());
      assert.isNotNull(result.next());
    }).timeout(timeoutMs);
  });
});
