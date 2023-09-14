// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { matrix } from "@azure/test-utils";
import { assert } from "chai";
import { Context } from "mocha";
import { OperatorConnectRecordedClient } from "./utils/recordedClient";
import { ConsentContact } from "../../src";

matrix([[true, false]], async function (useAad) {
  describe(`OperatorConnectClient - consent operations${useAad ? " [AAD]" : ""}`, function () {
    const defaultTimeoutMs = 60000;

    const operatorId = "fa82b96a-3352-4594-80f2-a0a18924a001";
    const nonExistingOperatorId = "fa82b96a-1111-2222-3333-a0a18924a001";
    const companyName = "Test Company";
    const contact: ConsentContact = {
      fullName: "Test User",
      email: "BillTest@contoso.com",
      phoneNumber: "+1234",
    };
    const defaultCountry = "US";

    let client: OperatorConnectRecordedClient;

    beforeEach(function (this: Context) {
      client = new OperatorConnectRecordedClient(this, useAad);
    });

    afterEach(async function (this: Context) {
      if (!this.currentTest?.isPending()) {
        await client.stopRecorder();
      }
      await clearConsent();
    });

    it("can retrieve consents list", async function (this: Context) {
      let activeConsentCount = 0;
      for await (const operator of client.listConsents({
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
      })) {
        if (operator.status == "active") {
          activeConsentCount++;
        }
      }
      assert.isTrue(activeConsentCount > 0);
    }).timeout(defaultTimeoutMs);

    it("can get consent", async function (this: Context) {
      await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      const getResponse = await client.getConsent({
        operatorId,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
      });
      assert.equal(getResponse.operatorId, operatorId);
    }).timeout(defaultTimeoutMs);

    it("can create consent and get it back", async function (this: Context) {
      const createResponse = await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      assert.deepEqual(createResponse.consentedBy, contact);
      assert.deepEqual(createResponse.lastModifiedBy, contact);
      assert.equal(createResponse.operatorId, operatorId);
      assert.equal(createResponse.companyName, companyName);
      assert.equal(createResponse.countryCodes, [defaultCountry]);
      assert.equal(createResponse.contacts, [contact]);
      assert.equal(createResponse.status, "Active");

      const getResponse = await client.getConsent({
        operatorId,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
      });
      assert.deepEqual(getResponse, createResponse);
    }).timeout(defaultTimeoutMs);

    it("can create consent and remove consent", async function (this: Context) {
      const createResponse = await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      assert.equal(createResponse.status, "Active");

      const removeResponse = await client.revokeConsent({
        operatorId: operatorId,
        lastModifiedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      assert.equal(removeResponse.status, "Removed");
    }).timeout(defaultTimeoutMs);

    it("can create consent with suspended state", async function (this: Context) {
      const createResponse = await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        status: "suspended",
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      assert.equal(createResponse.status, "Suspended");
    }).timeout(defaultTimeoutMs);

    it("can create consent with 2 contacts", async function (this: Context) {
      const backupContact = {
        fullName: "Test User 2",
        email: "BillTest2@contoso.com",
        phoneNumber: "+1234",
      };
      const createResponse = await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        contacts: [contact, backupContact],
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      assert.equal(createResponse.contacts?.length, 2);
    }).timeout(defaultTimeoutMs);

    it("can update consent's company name only", async function (this: Context) {
      await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      const updateResponse = await client.updateConsent({
        operatorId,
        lastModifiedBy: contact,
        companyName: companyName,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });

      assert.equal(updateResponse.companyName, companyName);
    }).timeout(defaultTimeoutMs);

    it("can update consent's company name only", async function (this: Context) {
      await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      const updateResponse = await client.updateConsent({
        operatorId,
        lastModifiedBy: contact,
        companyName: companyName,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });

      assert.equal(updateResponse.companyName, companyName);
    }).timeout(defaultTimeoutMs);

    it("can update consent's status only", async function (this: Context) {
      await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      const updateResponse = await client.updateConsent({
        operatorId: operatorId,
        lastModifiedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
        status: "suspended",
      });

      assert.equal(updateResponse.status, "Suspended");
    }).timeout(defaultTimeoutMs);

    it("can update consent's countries only", async function (this: Context) {
      await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      const updateResponse = await client.updateConsent({
        operatorId: operatorId,
        lastModifiedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
        countryCodes: [defaultCountry, "UK"],
      });

      assert.equal(updateResponse.countryCodes?.length, 2);
    }).timeout(defaultTimeoutMs);

    it("can update consent's contacts only", async function (this: Context) {
      await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      const updateResponse = await client.updateConsent({
        operatorId: operatorId,
        lastModifiedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
        contacts: [
          {
            fullName: "Some other user",
            email: "BillTest2@contoso.com",
            phoneNumber: "+1234",
          },
        ],
      });

      assert.equal(updateResponse.contacts?.length, 2);
      assert.equal(updateResponse.contacts![0].fullName, "Some other user");
    }).timeout(defaultTimeoutMs);

    it("can update consent's all parameters", async function (this: Context) {
      await client.grantConsent({
        operatorId: operatorId,
        companyName: companyName,
        countryCodes: [defaultCountry],
        consentedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
      });
      const updateResponse = await client.updateConsent({
        operatorId: operatorId,
        lastModifiedBy: contact,
        requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
        companyName: companyName,
        status: "suspended",
        countryCodes: [defaultCountry, "UK"],
        contacts: [
          contact,
          {
            fullName: "Some other user",
            email: "BillTest2@contoso.com",
            phoneNumber: "+1234",
          },
        ],
      });

      assert.equal(updateResponse.companyName, companyName);
      assert.equal(updateResponse.status, "Suspended");
      assert.equal(updateResponse.countryCodes?.length, 2);
      assert.equal(updateResponse.contacts?.length, 2);
    }).timeout(defaultTimeoutMs);

    it("can handle not found error in get consent", async function (this: Context) {
      await assertThrows(
        404,
        async () =>
          await client.getConsent({
            operatorId,
            requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
          })
      );
    }).timeout(defaultTimeoutMs);

    it("can handle bad request error in get consent", async function (this: Context) {
      await assertThrows(
        400,
        async () =>
          await client.getConsent({
            operatorId: nonExistingOperatorId,
            requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
          })
      );
    }).timeout(defaultTimeoutMs);

    it("can handle not found error in remove consent", async function (this: Context) {
      await assertThrows(
        404,
        async () =>
          await client.revokeConsent({
            operatorId,
            lastModifiedBy: contact,
            requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
          })
      );
    }).timeout(defaultTimeoutMs);

    it("can handle bad request error in remove consent", async function (this: Context) {
      await assertThrows(
        400,
        async () =>
          await client.revokeConsent({
            operatorId: nonExistingOperatorId,
            lastModifiedBy: contact,
            requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } },
          })
      );
    }).timeout(defaultTimeoutMs);

    it("can handle bad request error in create consent", async function (this: Context) {
      await assertThrows(
        400,
        async () =>
          await client.grantConsent({
            operatorId: nonExistingOperatorId,
            companyName: companyName,
            countryCodes: [defaultCountry],
            consentedBy: contact,
            requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
          })
      );
    }).timeout(defaultTimeoutMs);

    it("can handle not found error in update consent", async function (this: Context) {
      await assertThrows(
        404,
        async () =>
          await client.updateConsent({
            operatorId: operatorId,
            companyName: companyName,
            countryCodes: [defaultCountry],
            lastModifiedBy: contact,
            requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
          })
      );
    }).timeout(defaultTimeoutMs);

    it("can handle bad request error in update consent", async function (this: Context) {
      await assertThrows(
        400,
        async () =>
          await client.updateConsent({
            operatorId: nonExistingOperatorId,
            companyName: companyName,
            countryCodes: [defaultCountry],
            lastModifiedBy: contact,
            requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready
          })
      );
    }).timeout(defaultTimeoutMs);

    async function assertThrows(expectedStatus: number, action: () => Promise<any>) {
      try {
        await action();
      } catch (ex: any) {
        assert.equal(expectedStatus, ex.statusCode);
        return;
      }
      assert.fail("Expected exception was not triggered");
    }

    async function clearConsent() {
      try {
        // Remove consent of default operator
        await client.revokeConsent({
          operatorId: operatorId,
          lastModifiedBy: contact,
          requestOptions: { customHeaders: { "x-ms-useragent": "acs-mock-test" } }, // Todo: remove. sent to get mocked results while api is not ready})
        });
      } catch (e: any) {
        if (e.statusCode == 404) {
          return;
        }
        throw e;
      }
    }
  });
});
