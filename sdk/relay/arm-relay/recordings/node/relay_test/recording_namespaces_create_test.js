let nock = require('nock');

module.exports.hash = "b948971e95eded2eba42a424fb4745dc";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '515b7f7a-a6ec-4d9d-a61d-90fdcf0c0c00',
  'x-ms-ests-server',
  '2.1.12261.14 - KRSLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AsdA9I6_3MJIgR7IESqCxsk; expires=Sun, 09-Jan-2022 05:50:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr4BbhYVvsZWChK9et3_jvnOiwNtjmp2tGoarOoA-wmo41W_S6z81xJanOtbAKywfuZx6khgu5_LAT_FoJD_ScsZELc2A1BAj5Dn-eT3TBAiAx9YMapzxR7p6i2MB37-5wdX-h4E-P7d4u_WnXxL8DTq2Sk2f-ANetbTsweWelBkEgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 10 Dec 2021 05:50:10 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '9e4deb1d-59f9-4f91-a0fa-cb1eed3d0b00',
  'x-ms-ests-server',
  '2.1.12261.14 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Arv7cFcg1f9KmLJsxqySkmc; expires=Sun, 09-Jan-2022 05:50:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrBbbvAppmx68fCx_lpPOWYGBj0hshvtpaSuVvIfitn4y7J0ghPx0_dV6oGLarGGGLVS9--K9oWMFcVaYMCGyvqKfqZFI_XxZj8CYGGE4iXtQ8uQ9H_1iQPN9QkWkBxJPqrZU4uQWM1zCvUGHErqrROZBiVUEnOPCvC-8Wr0H7ORggAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 10 Dec 2021 05:50:10 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=4385fbce-b20d-4f0c-aa58-2f4e8e382135&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '1306231f-1899-4d48-aeca-900136130b00',
  'x-ms-ests-server',
  '2.1.12261.14 - SEASLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AhOQHkcV-CdMl_XxrFQKxsIWPr5BAQAAAJLhRNkOAAAA; expires=Sun, 09-Jan-2022 05:50:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 10 Dec 2021 05:50:10 GMT',
  'Content-Length',
  '1374'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx', {"location":"eastus","tags":{"tag1":"value1"},"sku":{"name":"Standard","tier":"Standard"}})
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '9cd9bebf-e1af-4a01-b614-5f44b1a0c9c4_M4CH3_M4CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1199',
  'x-ms-correlation-request-id',
  'efb927ec-3f5d-49ba-89fb-4c4b12c51c45',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055019Z:efb927ec-3f5d-49ba-89fb-4c4b12c51c45',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:18 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'c0c9e010-3dbc-4ee1-bcac-86fb5e80b0a8_M11CH3_M11CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11999',
  'x-ms-correlation-request-id',
  'ccb0cbf5-134a-4bf1-909a-d710f465d70a',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055020Z:ccb0cbf5-134a-4bf1-909a-d710f465d70a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:20 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '2e610945-14e9-4b8d-8a68-ba9474fdc475_M8CH3_M8CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11998',
  'x-ms-correlation-request-id',
  '2a51869b-9ad1-4b07-82ca-c1e90fb8573b',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055023Z:2a51869b-9ad1-4b07-82ca-c1e90fb8573b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:23 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'cdb584b7-eb86-44e7-95cf-609b755466a3_M10CH3_M10CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11997',
  'x-ms-correlation-request-id',
  '53de320b-cff6-4ecd-9b04-662c98e4a3e3',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055027Z:53de320b-cff6-4ecd-9b04-662c98e4a3e3',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:26 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'd32189bf-8353-419c-8012-a5d6b8298bf4_M6CH3_M6CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11996',
  'x-ms-correlation-request-id',
  '40d6c0d8-7746-451a-8f7b-16b1032fab8a',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055031Z:40d6c0d8-7746-451a-8f7b-16b1032fab8a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:30 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '0f3a531a-99b4-4eb6-a111-fd0afe911bec_M7CH3_M7CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11995',
  'x-ms-correlation-request-id',
  'e6c28032-55a9-4ea6-8154-26c3a9f98600',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055033Z:e6c28032-55a9-4ea6-8154-26c3a9f98600',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:33 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'd84f4a4b-d0db-4ace-a4fb-5476d7b8787c_M7CH3_M7CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11994',
  'x-ms-correlation-request-id',
  '625a4615-2474-440d-b5d5-e759cc9a4d27',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055036Z:625a4615-2474-440d-b5d5-e759cc9a4d27',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:36 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '0e0f65f3-3692-49be-86d8-5f25128eaa41_M9CH3_M9CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11993',
  'x-ms-correlation-request-id',
  'c701efa1-5fc2-415e-9398-2b8d76fcf188',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055040Z:c701efa1-5fc2-415e-9398-2b8d76fcf188',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:39 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'ef5ecfe7-f14e-4e81-a2de-f8ede44a829f_M2CH3_M2CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11992',
  'x-ms-correlation-request-id',
  '9b76f4a8-dcc4-4a51-92cc-32eb906e0ee0',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055044Z:9b76f4a8-dcc4-4a51-92cc-32eb906e0ee0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:43 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '6b89acc2-3f9b-4a7a-a70f-901dc81169b4_M2CH3_M2CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11991',
  'x-ms-correlation-request-id',
  '12faffeb-2018-4fbd-bdfb-567a86a760a8',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055047Z:12faffeb-2018-4fbd-bdfb-567a86a760a8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:47 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '32af82f0-2b01-4988-9fa0-22377b734ac8_M11CH3_M11CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11990',
  'x-ms-correlation-request-id',
  '2ba3a64d-4fc4-475c-9f9c-0322bf780d60',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055051Z:2ba3a64d-4fc4-475c-9f9c-0322bf780d60',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:50 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '55aa725e-4b11-4185-96b5-8871cec9d9d5_M4CH3_M4CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11989',
  'x-ms-correlation-request-id',
  'b17ae183-6be2-4a06-ac6c-6f332dfb1c19',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055054Z:b17ae183-6be2-4a06-ac6c-6f332dfb1c19',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:54 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a5456727754ebf805e8bbcad8be91948741b9a3ceaa13f1550c72d41d8dbd9dbdddedddbdedd79b373ffd1fd9d47bb0fc6bb7bf77e8a9aad57b3db346bf2fab298e64fd6cde972b6aa8a25dacfdb76d53cbadb21e958db4ed6cdf8aa58ceaaab66bcccdb47fbfbf7ee02120d754d04f8e878da169744bde5c547bfe4","97fc3f1d8349be3a020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '15211147-c9cd-40ca-a761-5956a89a51ee_M6CH3_M6CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11988',
  'x-ms-correlation-request-id',
  'f9004db9-3850-42c8-a206-cd9412e420cb',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055058Z:f9004db9-3850-42c8-a206-cd9412e420cb',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:57 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Relay/namespaces/mynamespacexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a3d76db69c65f5eca3d1476d91d7fe27bf64f45131a30fee36eb4933ad8b555b54cbe6eec3bdf387f76707e7dbf7a69f3ed8dedfdddbdf7eb83b7db07d303ddf79309d4dcef7f677efd67953adeb69fe795dad57cdddc5f54f376ddeb47757757559ccf2bab9fb4531adaba63a6fc7aff232bbbe0b7c9a5536cdd1dafef1eedd3bc20c7f1222bdcfdbeb153eef827a615a35d4a6aca61910a776a759d3a65fbda60fdbeca20111e8e72e7d719995eb7c170326fc56794d94e0afe9afcba2a1978be50591a54567afd7d3699ecf72506c91b775313d03916e439547bd014ceb9ca0ce8e5b82b0b7b3b7bbbdbbb7bdbbf366e7fea3fb3b8f761f8c77f7eefd14355baf66c3cdee3f1c1fec3d40b326af2f8b69fe64dd9c2e67abaa58a2fdbc6d57cda3bb1da28eb5ed64dd8caf8ae5acba6ac6cbbc7db4bf7fef2e20d160d744828f8ea76d71997ff44b7e","c9ff0354517f5838020000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '6d6ee1f9-b798-4cba-9163-a2d94effa0b3_M8CH3_M8CH3',
  'Server-SB',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Service-Bus-Resource-Provider/CH3',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11987',
  'x-ms-correlation-request-id',
  '6d76dedd-cf0a-457a-b727-d31cdfe0a1d5',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T055100Z:6d76dedd-cf0a-457a-b727-d31cdfe0a1d5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 05:50:59 GMT'
]);
