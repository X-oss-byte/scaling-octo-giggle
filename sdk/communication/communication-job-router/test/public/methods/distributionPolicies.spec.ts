// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Recorder } from "@azure-tools/test-recorder";
import { assert } from "chai";
import { Context } from "mocha";
import { DistributionPolicy, RouterClient } from "../../../src";
import { distributionPolicyRequest } from "../../internal/utils/testData";
import { createRecordedRouterClientWithConnectionString } from "../../internal/utils/mockClient";
import { timeoutMs } from "../../internal/utils/constants";

describe("RouterClient", function() {
  let recorder: Recorder;
  let client: RouterClient;
  let request: DistributionPolicy = distributionPolicyRequest;

  describe("Distribution Policy Operations", function() {
    this.beforeAll(async function(this: Context) {
      ({ client, recorder } = createRecordedRouterClientWithConnectionString(this));
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending() && recorder) {
        // unused
      }

      await client.deleteDistributionPolicy(distributionPolicyRequest.id!);
    });

    it("should create a distribution policy", async function() {
      const result = await client.createDistributionPolicy(request.id!, request);

      assert.isDefined(result);
      assert.isDefined(result?.id);
      assert.equal(result.name, request.name);
    }).timeout(timeoutMs);

    it("should get a distribution policy", async function() {
      const response: DistributionPolicy = await client.createDistributionPolicy(
        request.id!,
        request
      );

      const result = await client.getDistributionPolicy(request.id!);

      assert.equal(result.id, response.id);
      assert.equal(result.name, response.name);
      assert.equal(result.offerTtlSeconds, response.offerTtlSeconds);
      assert.deepEqual(result.mode, response.mode);
    }).timeout(timeoutMs);

    it("should update a distribution policy", async function() {
      var response: DistributionPolicy = await client.createDistributionPolicy(
        request.id!,
        request
      );

      const patch: DistributionPolicy = { ...response, name: "new name" };
      const result = await client.updateDistributionPolicy(response.id!, patch);

      assert.isDefined(result);
      assert.isDefined(result.id);
      assert.equal(result.name, patch.name);
    }).timeout(timeoutMs);

    it("should delete a distribution policy", async function() {
      const response: DistributionPolicy = await client.createDistributionPolicy(
        request.id!,
        request
      );

      const result = await client.deleteDistributionPolicy(response.id!, {});

      assert.isDefined(result);
    }).timeout(timeoutMs);

    it("should list distribution policies", async function() {
      await client.createDistributionPolicy(request.id!, request);

      const result = await client.listDistributionPolicies({
        maxpagesize: 1
      });

      assert.isNotNull(result.next());
      assert.isNotNull(result.next());
    }).timeout(timeoutMs);
  });
});
