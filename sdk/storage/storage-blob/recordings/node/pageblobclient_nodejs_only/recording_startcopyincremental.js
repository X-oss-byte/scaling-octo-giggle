let nock = require('nock');

module.exports.testInfo = {"container":"container156816868124805715","blob":"blob156816868166707823","page":"page156816868291608210"}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:41 GMT',
  'ETag',
  '"0x8D7365F33DA6A60"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '4092f522-f01e-0027-5b48-68fcb5000000',
  'x-ms-client-request-id',
  '2a93c304-dd28-4595-9988-85e3643801ea',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 11 Sep 2019 02:24:40 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715/blob156816868166707823')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:42 GMT',
  'ETag',
  '"0x8D7365F341A6644"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '58605338-101e-0026-7a48-68fd48000000',
  'x-ms-client-request-id',
  '938f692b-e223-4934-9386-e9650c1208ea',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:24:41 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715/blob156816868166707823', "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:42 GMT',
  'ETag',
  '"0x8D7365F345A12CF"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '52e95060-801e-0028-4548-681143000000',
  'x-ms-client-request-id',
  'cfb7e371-80e8-400f-8c6a-6c5d471b8c55',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-content-crc64',
  'pK+ypU+jreM=',
  'x-ms-blob-sequence-number',
  '0',
  'Date',
  'Wed, 11 Sep 2019 02:24:41 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715/blob156816868166707823')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:42 GMT',
  'ETag',
  '"0x8D7365F345A12CF"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1ba05fe4-e01e-0033-6d48-683fd1000000',
  'x-ms-client-request-id',
  '33562b77-e27d-4f21-ac73-0b7ce71c008b',
  'x-ms-version',
  '2019-02-02',
  'x-ms-snapshot',
  '2019-09-11T02:24:42.8458755Z',
  'x-ms-request-server-encrypted',
  'false',
  'Date',
  'Wed, 11 Sep 2019 02:24:42 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><SignedIdentifiers/>")
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:43 GMT',
  'ETag',
  '"0x8D7365F34DA40F8"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '478f2352-701e-0014-5c48-68a598000000',
  'x-ms-client-request-id',
  '02a52eee-61aa-4810-9bd8-281b575889db',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 11 Sep 2019 02:24:42 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715/page156816868291608210')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'ETag',
  '"0x8D7365F38202D5C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '331e1899-c01e-000d-5048-6889f0000000',
  'x-ms-client-request-id',
  '22b0a3ed-4b06-4b6f-840f-63181d4ef06a',
  'x-ms-version',
  '2019-02-02',
  'x-ms-copy-id',
  '6245e750-efa9-4f75-b33a-8bde076479bd',
  'x-ms-copy-status',
  'pending',
  'Date',
  'Wed, 11 Sep 2019 02:24:47 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F38202D5C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '9bf9dcb1-501e-0047-6348-68b997000000',
  'x-ms-client-request-id',
  '205324fd-19a5-4891-8c4a-4837b4290e43',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '6245e750-efa9-4f75-b33a-8bde076479bd',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z',
  'x-ms-copy-status',
  'pending',
  'x-ms-copy-progress',
  '0/1024',
  'x-ms-incremental-copy',
  'true',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-incremental-copy,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:24:51 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F38202D5C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8b517df0-b01e-0002-3348-686406000000',
  'x-ms-client-request-id',
  '6742f1b8-f820-4351-95c0-aaca0c2a2e98',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '6245e750-efa9-4f75-b33a-8bde076479bd',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z',
  'x-ms-copy-status',
  'pending',
  'x-ms-copy-progress',
  '0/1024',
  'x-ms-incremental-copy',
  'true',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-incremental-copy,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:24:55 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F38202D5C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b36e6df6-801e-0023-4848-680937000000',
  'x-ms-client-request-id',
  '7d70ae6f-2925-42b1-ae78-b57997d0d345',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '6245e750-efa9-4f75-b33a-8bde076479bd',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z',
  'x-ms-copy-status',
  'pending',
  'x-ms-copy-progress',
  '0/1024',
  'x-ms-incremental-copy',
  'true',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-incremental-copy,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:24:58 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F38202D5C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '4924558b-901e-0015-7b48-68a465000000',
  'x-ms-client-request-id',
  '3c6ec8e6-5adf-4212-a46b-2f0e53788728',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '6245e750-efa9-4f75-b33a-8bde076479bd',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z',
  'x-ms-copy-status',
  'pending',
  'x-ms-copy-progress',
  '0/1024',
  'x-ms-incremental-copy',
  'true',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-incremental-copy,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:25:02 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F38202D5C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'dd4cf05e-901e-0037-2c48-68ca53000000',
  'x-ms-client-request-id',
  'c0f2deec-a5e6-4d3a-88e4-e4b3d9da6003',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '6245e750-efa9-4f75-b33a-8bde076479bd',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z',
  'x-ms-copy-status',
  'pending',
  'x-ms-copy-progress',
  '0/1024',
  'x-ms-incremental-copy',
  'true',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-incremental-copy,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:25:05 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F38202D5C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '018b4c49-d01e-0019-0748-684a94000000',
  'x-ms-client-request-id',
  '1ae69987-c607-4671-b19f-876d4527d033',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '6245e750-efa9-4f75-b33a-8bde076479bd',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z',
  'x-ms-copy-status',
  'pending',
  'x-ms-copy-progress',
  '0/1024',
  'x-ms-incremental-copy',
  'true',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-incremental-copy,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:25:08 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:25:11 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F45E3796C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '66b38798-f01e-004a-0a48-68569b000000',
  'x-ms-client-request-id',
  '6d268968-d52e-41de-93b6-55114c595c1b',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '6245e750-efa9-4f75-b33a-8bde076479bd',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Wed, 11 Sep 2019 02:25:11 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-09-11T02:25:11.8603245Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:25:12 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156816868124805715')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.blob.core.windows.net/\" ContainerName=\"container156816868124805715\"><Blobs><Blob><Name>blob156816868166707823</Name><Snapshot>2019-09-11T02:24:42.8458755Z</Snapshot><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:42 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:24:42 GMT</Last-Modified><Etag>0x8D7365F345A12CF</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156816868166707823</Name><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:42 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:24:42 GMT</Last-Modified><Etag>0x8D7365F345A12CF</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156816868291608210</Name><Snapshot>2019-09-11T02:25:11.8603245Z</Snapshot><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:48 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:25:11 GMT</Last-Modified><Etag>0x8D7365F45E463ED</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>6245e750-efa9-4f75-b33a-8bde076479bd</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Wed, 11 Sep 2019 02:25:11 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-09-11T02:25:11.8603245Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156816868291608210</Name><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:48 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:25:11 GMT</Last-Modified><Etag>0x8D7365F45E3796C</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><CopyId>6245e750-efa9-4f75-b33a-8bde076479bd</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Wed, 11 Sep 2019 02:25:11 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-09-11T02:25:11.8603245Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob></Blobs><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1ba08145-e01e-0033-3a48-683fd1000000',
  'x-ms-client-request-id',
  'eba43127-cf19-4b83-8a8b-cb89cf3bdca3',
  'x-ms-version',
  '2019-02-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:25:12 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715/blob156816868166707823', "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:25:13 GMT',
  'ETag',
  '"0x8D7365F470AA27F"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '816f93e9-c01e-006b-4548-683baa000000',
  'x-ms-client-request-id',
  'f5ed1f8b-482c-46fb-a7f5-594fe1419687',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-content-crc64',
  'fxGiQip9xjM=',
  'x-ms-blob-sequence-number',
  '0',
  'Date',
  'Wed, 11 Sep 2019 02:25:13 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715/blob156816868166707823')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:25:13 GMT',
  'ETag',
  '"0x8D7365F470AA27F"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8ead444f-201e-002e-5d48-68e63b000000',
  'x-ms-client-request-id',
  '21a5a2a9-b99d-4cf9-8e1f-3605ffee3f41',
  'x-ms-version',
  '2019-02-02',
  'x-ms-snapshot',
  '2019-09-11T02:25:14.2129838Z',
  'x-ms-request-server-encrypted',
  'false',
  'Date',
  'Wed, 11 Sep 2019 02:25:13 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156816868124805715/page156816868291608210')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:25:14 GMT',
  'ETag',
  '"0x8D7365F47940F8D"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b7b67fd5-901e-005a-1d48-68607d000000',
  'x-ms-client-request-id',
  '96a3dea7-7671-40db-ac88-4f6e1cc3f03b',
  'x-ms-version',
  '2019-02-02',
  'x-ms-copy-id',
  '528ca25b-1a85-4071-98b1-a6d55d5aebb8',
  'x-ms-copy-status',
  'pending',
  'Date',
  'Wed, 11 Sep 2019 02:25:14 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:25:14 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F47976B88"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'af58a5d3-501e-0008-5248-687d8f000000',
  'x-ms-client-request-id',
  '597110a7-2897-4a18-87af-cf940c6af111',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '528ca25b-1a85-4071-98b1-a6d55d5aebb8',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:25:14.2129838Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Wed, 11 Sep 2019 02:25:14 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-09-11T02:25:14.7173390Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:25:17 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156816868124805715')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.blob.core.windows.net/\" ContainerName=\"container156816868124805715\"><Blobs><Blob><Name>blob156816868166707823</Name><Snapshot>2019-09-11T02:24:42.8458755Z</Snapshot><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:42 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:24:42 GMT</Last-Modified><Etag>0x8D7365F345A12CF</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156816868166707823</Name><Snapshot>2019-09-11T02:25:14.2129838Z</Snapshot><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:42 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:25:13 GMT</Last-Modified><Etag>0x8D7365F470AA27F</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156816868166707823</Name><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:42 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:25:13 GMT</Last-Modified><Etag>0x8D7365F470AA27F</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156816868291608210</Name><Snapshot>2019-09-11T02:25:11.8603245Z</Snapshot><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:48 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:25:11 GMT</Last-Modified><Etag>0x8D7365F45E463ED</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>6245e750-efa9-4f75-b33a-8bde076479bd</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:24:42.8458755Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Wed, 11 Sep 2019 02:25:11 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-09-11T02:25:11.8603245Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156816868291608210</Name><Snapshot>2019-09-11T02:25:14.7173390Z</Snapshot><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:48 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:25:14 GMT</Last-Modified><Etag>0x8D7365F4798560E</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>528ca25b-1a85-4071-98b1-a6d55d5aebb8</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:25:14.2129838Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Wed, 11 Sep 2019 02:25:14 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-09-11T02:25:14.7173390Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156816868291608210</Name><Properties><Creation-Time>Wed, 11 Sep 2019 02:24:48 GMT</Creation-Time><Last-Modified>Wed, 11 Sep 2019 02:25:14 GMT</Last-Modified><Etag>0x8D7365F47976B88</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><CopyId>528ca25b-1a85-4071-98b1-a6d55d5aebb8</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:25:14.2129838Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Wed, 11 Sep 2019 02:25:14 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-09-11T02:25:14.7173390Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob></Blobs><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '478f506e-701e-0014-0948-68a598000000',
  'x-ms-client-request-id',
  'b2fa700b-642d-46f0-a58e-48e873c192c4',
  'x-ms-version',
  '2019-02-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:25:18 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156816868124805715/page156816868291608210')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:25:14 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365F47976B88"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'ea8f5880-701e-003d-5c48-68d3da000000',
  'x-ms-client-request-id',
  '109133ba-af40-47c3-994e-acfb2eb5330a',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Wed, 11 Sep 2019 02:24:48 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '528ca25b-1a85-4071-98b1-a6d55d5aebb8',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156816868124805715/blob156816868166707823?snapshot=2019-09-11T02:25:14.2129838Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Wed, 11 Sep 2019 02:25:14 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-09-11T02:25:14.7173390Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:25:18 GMT' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/container156816868124805715')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd53ba653-001e-0032-1348-683e2c000000',
  'x-ms-client-request-id',
  'b5409d87-28ab-49fd-a440-2ec81adb8ecf',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 11 Sep 2019 02:25:18 GMT' ]);

