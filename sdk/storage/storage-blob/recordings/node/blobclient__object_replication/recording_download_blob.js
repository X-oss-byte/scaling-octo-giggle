let nock = require('nock');

module.exports.hash = "d828775101e541e25dac28f8074b369b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/orssrc/orsBlob')
  .reply(200, "hello world", [
  'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Content-MD5',
  'XrY7u+Ae7tCTyyK7j1rNww==',
  'Last-Modified',
  'Wed, 08 Jul 2020 09:08:09 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D8231E6F08A0F8"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd15e4202-301e-002a-0a08-55fab9000000',
  'x-ms-client-request-id',
  '2e848ce8-c8d7-4aec-9efa-5838220f4cab',
  'x-ms-version',
  '2019-12-12',
  'x-ms-version-id',
  '2020-07-08T09:08:09.1762696Z',
  'x-ms-is-current-version',
  'true',
  'x-ms-or-003ca702-58ab-4405-8f52-cb92316babde_9a53f315-d56b-44f6-a3e8-1d62c1b7089b',
  'complete',
  'x-ms-or-d685bc41-c8ab-4ea5-889c-2503f02954d8_671e9447-be18-4632-9eea-a1a29cdae759',
  'complete',
  'x-ms-creation-time',
  'Wed, 08 Jul 2020 09:08:09 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-version-id,x-ms-is-current-version,x-ms-or-003ca702-58ab-4405-8f52-cb92316babde_9a53f315-d56b-44f6-a3e8-1d62c1b7089b,x-ms-or-d685bc41-c8ab-4ea5-889c-2503f02954d8_671e9447-be18-4632-9eea-a1a29cdae759,Content-Type,Last-Modified,ETag,x-ms-creation-time,Content-MD5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 08 Jul 2020 09:15:36 GMT'
]);

nock('https://fakestorageaccount1.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/orsdst/orsBlob')
  .reply(200, "hello world", [
  'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Content-MD5',
  'XrY7u+Ae7tCTyyK7j1rNww==',
  'Last-Modified',
  'Wed, 08 Jul 2020 09:09:13 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D8231E9580072D"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8f2c1d22-c01e-004c-6608-55b599000000',
  'x-ms-client-request-id',
  '23d85244-7fb8-4ca7-8145-eb4c1074f98c',
  'x-ms-version',
  '2019-12-12',
  'x-ms-version-id',
  '2020-07-08T09:09:13.7010084Z',
  'x-ms-is-current-version',
  'true',
  'x-ms-or-policy-id',
  'd685bc41-c8ab-4ea5-889c-2503f02954d8',
  'x-ms-creation-time',
  'Wed, 08 Jul 2020 09:09:13 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-copy-id',
  'c0db52ea-d934-4655-a139-039db3cc6d04',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/orssrc/orsBlob?versionid=2020-07-08T09:08:09.1762696Z&sv=2015-04-05&ss=b&srt=sco&sp=rwdlacup&se=2020-07-09T07%3A56%3A40.3939857Z&spr=https',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '11/11',
  'x-ms-copy-completion-time',
  'Wed, 08 Jul 2020 09:09:13 GMT',
  'x-ms-server-encrypted',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-version-id,x-ms-is-current-version,x-ms-or-policy-id,Content-Type,Last-Modified,ETag,x-ms-creation-time,Content-MD5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-server-encrypted,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 08 Jul 2020 09:15:36 GMT'
]);
