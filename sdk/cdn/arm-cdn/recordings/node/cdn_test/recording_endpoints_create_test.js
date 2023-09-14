let nock = require('nock');

module.exports.hash = "7c66302b70d569ff45ae98febc6b5db3";

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
  '9bed8f69-8b1e-4591-be3e-4496e6ea0600',
  'x-ms-ests-server',
  '2.1.12261.15 - KRSLR1 ProdSlices',
  'Set-Cookie',
  'fpc=Akxd5LYWW9FNjdbNnthjeRY; expires=Sat, 15-Jan-2022 02:14:32 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrSGNI-kbCqABC3oYiQid4sVvRTgF3pGLfaGRGOlBrvqZ-BwJ4h0OlH9K9C0XR8TGUOKzCN9cmiLrPSS82H72-LOJs3LnhOQJPE-0e1-pyLrcSnmTlAEwvRJGoF2CmPqg5NfET92ip_yMVx0fydUXlbCQDpHEXwkSGH5eOwQsB1fkgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 16 Dec 2021 02:14:32 GMT',
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
  'f215b684-5d11-4e35-8031-583352230200',
  'x-ms-ests-server',
  '2.1.12261.15 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AmnqY-lfqDlOn0vNhl9O5Qg; expires=Sat, 15-Jan-2022 02:14:33 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrWUREpaAnK6jQ5_jO7Jfj5q7CVZBsx-qGMguKlGgyJUTrsRx5DwAKzfnX8DS2N5xsqpWF_mMMNQmlyWtZWJnNIttnZIk49WRIiRmFUGM5b0kcsPytgjNUEHJAkdx9VwqS6rycImzqQZQHKG5TuzM2QY68-oYsIzfC2euXlAQgTwogAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 16 Dec 2021 02:14:32 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.4.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=bcc0c77a-8b97-4963-b5de-3bc1939e1696&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
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
  '96da2a01-9bbf-4976-b77e-e8e6562f0200',
  'x-ms-ests-server',
  '2.1.12261.15 - SEASLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=Alk0AHSg1lZMgw_5joM-GwgWPr5BAQAAAAiYTNkOAAAA; expires=Sat, 15-Jan-2022 02:14:33 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 16 Dec 2021 02:14:32 GMT',
  'Content-Length',
  '1393'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cdn/profiles/myprofilexxx/endpoints/myendpointxxx', {"location":"westus","tags":{"key1":"value1"},"properties":{"originPath":"/image","contentTypesToCompress":["text/html","application/octet-stream"],"originHostHeader":"www.bing.com","isCompressionEnabled":true,"isHttpAllowed":true,"isHttpsAllowed":true,"queryStringCachingBehavior":"BypassCaching","origins":[{"name":"origin1","properties":{"hostName":"host1.hello.com"}}]}})
  .query(true)
  .reply(201, {"id":"/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/profiles/myprofilexxx/endpoints/myendpointxxx","type":"Microsoft.Cdn/profiles/endpoints","name":"myendpointxxx","location":"WestUs","tags":{"key1":"value1"},"properties":{"hostName":"myendpointxxx.azureedge.net","originHostHeader":"www.bing.com","originPath":"/image","contentTypesToCompress":["text/html","application/octet-stream"],"isCompressionEnabled":true,"isHttpAllowed":true,"isHttpsAllowed":true,"queryStringCachingBehavior":"BypassCaching","optimizationType":null,"probePath":null,"origins":[{"name":"origin1","properties":{"hostName":"host1.hello.com","httpPort":null,"httpsPort":null,"originHostHeader":null,"priority":null,"weight":null,"enabled":true,"privateLinkAlias":null,"privateLinkResourceId":null,"privateLinkLocation":null,"privateEndpointStatus":null,"privateLinkApprovalMessage":null}}],"originGroups":[],"defaultOriginGroup":null,"customDomains":[],"geoFilters":[],"deliveryPolicy":null,"urlSigningKeys":null,"webApplicationFirewallPolicyLink":null,"resourceState":"Creating","provisioningState":"Creating"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1140',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '4c728a18-6e03-458e-b824-f461043720a6',
  'x-ms-client-request-id',
  '84e588f9-71ea-4809-9b18-d58dd0be8f99',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c?api-version=2020-09-01',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-resource-requests',
  '99',
  'x-ms-correlation-request-id',
  '2c2b1c2a-8c1b-48c5-b18b-4db9adde985a',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021448Z:2c2b1c2a-8c1b-48c5-b18b-4db9adde985a',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:14:48 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'd9f068c0-e790-4f8d-889f-b3b6f47b25ce',
  'x-ms-client-request-id',
  'f518cf04-f54c-43b1-9835-753be672d4f8',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11939',
  'x-ms-correlation-request-id',
  '978e847f-01be-4118-99ad-8e73f6ebc620',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021449Z:978e847f-01be-4118-99ad-8e73f6ebc620',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:14:49 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'e36bf57b-611b-408f-bf7e-aad21194e302',
  'x-ms-client-request-id',
  'f71c0c94-9dc5-4e33-bfb5-f7216ee2d6f0',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11938',
  'x-ms-correlation-request-id',
  'd1ddbbbf-0c57-404a-b6b6-b886e8256fee',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021451Z:d1ddbbbf-0c57-404a-b6b6-b886e8256fee',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:14:51 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'd0017f54-dd9a-4862-bf9b-05ab05b3cb71',
  'x-ms-client-request-id',
  '2ff6a2c4-7170-4735-a3b9-7d6f70514827',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11937',
  'x-ms-correlation-request-id',
  '6e84fbf1-6bd0-45a9-9289-3b476f7e040e',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021453Z:6e84fbf1-6bd0-45a9-9289-3b476f7e040e',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:14:53 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '7e530318-d21d-48d4-a5d4-23a3327c2a7f',
  'x-ms-client-request-id',
  'de2ebe52-b80c-4fb7-b774-3d55be47b708',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11936',
  'x-ms-correlation-request-id',
  '4e0cbe26-f997-4fc5-ad52-0ae3cb289fa8',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021456Z:4e0cbe26-f997-4fc5-ad52-0ae3cb289fa8',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:14:55 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '4c678973-55e9-4306-a00c-0b8f3d66dc58',
  'x-ms-client-request-id',
  '9c928fd7-4f25-4cee-a524-938c0ef214f8',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11935',
  'x-ms-correlation-request-id',
  '57ee41e4-5f81-4331-b41a-5230fd42ade7',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021458Z:57ee41e4-5f81-4331-b41a-5230fd42ade7',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:14:58 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '976d6d86-99a3-4f52-9faa-69dbe7789cf0',
  'x-ms-client-request-id',
  'cbb18d11-3747-45cd-b6a2-ea5627132979',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11934',
  'x-ms-correlation-request-id',
  'f9c19a63-d470-4d36-a959-3526c3b9c26c',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021500Z:f9c19a63-d470-4d36-a959-3526c3b9c26c',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:00 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '27d4c4a4-0f41-466f-a030-a14bcc2c60b6',
  'x-ms-client-request-id',
  'c890aaf0-b8da-4242-9771-d126b568bedb',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11933',
  'x-ms-correlation-request-id',
  '64aa5d3f-8217-4307-bb84-62e01683435a',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021503Z:64aa5d3f-8217-4307-bb84-62e01683435a',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:02 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '5556951b-28ce-48d9-af23-1701c3025bcf',
  'x-ms-client-request-id',
  'a5f06467-151a-4788-90ff-b67f8d69b63c',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11932',
  'x-ms-correlation-request-id',
  'a5effd6d-632d-4831-8dea-9c1b3d2e7048',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021505Z:a5effd6d-632d-4831-8dea-9c1b3d2e7048',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:05 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '91f3a8ba-47bb-44e4-a8ba-69f7e273d1a1',
  'x-ms-client-request-id',
  'a5732a49-1001-4042-9cde-c616c9e3ca83',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11931',
  'x-ms-correlation-request-id',
  '5e662844-11fc-46a1-8f8f-ea24d8a99f89',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021507Z:5e662844-11fc-46a1-8f8f-ea24d8a99f89',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:07 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '2a092789-eb30-4c84-8c49-79b7e4b9f123',
  'x-ms-client-request-id',
  'd7b554d0-079b-4933-8854-74f8942bf789',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11930',
  'x-ms-correlation-request-id',
  '6914c662-4811-4a09-8ea2-fb5279ffc6cf',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021510Z:6914c662-4811-4a09-8ea2-fb5279ffc6cf',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:09 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'd09f4b6c-ab6d-4fd6-8a25-9bb21d3a0740',
  'x-ms-client-request-id',
  'a16ee363-68e9-48e3-b1ef-d012a111d610',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11929',
  'x-ms-correlation-request-id',
  '7edf181c-5028-44e5-8462-28a897a0c8b7',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021512Z:7edf181c-5028-44e5-8462-28a897a0c8b7',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:12 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '8a937305-4c44-4369-bd0c-2fef95c42204',
  'x-ms-client-request-id',
  '2b3a10e0-012e-4ae1-b026-6f4a6dbe6664',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11928',
  'x-ms-correlation-request-id',
  'fa971091-d52f-4085-94ce-46eb2af348b1',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021514Z:fa971091-d52f-4085-94ce-46eb2af348b1',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:14 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'dd4aebd2-b07c-461b-8746-936a964561c1',
  'x-ms-client-request-id',
  'ce49c07a-e804-4c8e-b8a0-8696e0c79515',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11927',
  'x-ms-correlation-request-id',
  'e77dd1f0-2b4c-4af8-b9da-6469d80c4712',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021517Z:e77dd1f0-2b4c-4af8-b9da-6469d80c4712',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:16 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '46bc9d0c-75df-4c93-b458-72f53ba6da30',
  'x-ms-client-request-id',
  '438f7165-2d0f-4557-a06f-59477936e5bd',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11926',
  'x-ms-correlation-request-id',
  'f6e8b0a2-6546-46c8-b7d6-2fc1b927e7b4',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021519Z:f6e8b0a2-6546-46c8-b7d6-2fc1b927e7b4',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:19 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'befa50f8-e445-4193-bf01-703dbf03ecb8',
  'x-ms-client-request-id',
  '5cd9e1d6-cd6a-41f9-8bc0-8e57f9a7ca57',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11925',
  'x-ms-correlation-request-id',
  '8bd90431-948a-424d-b55b-27394ff02a7b',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021521Z:8bd90431-948a-424d-b55b-27394ff02a7b',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:21 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '7e7528fb-93b6-42c5-a0a1-f6e356f9f265',
  'x-ms-client-request-id',
  '88f97026-344d-4e27-826b-43e625b2449e',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11924',
  'x-ms-correlation-request-id',
  'c7d7e229-67c8-49e9-9ac6-50782e017fd6',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021524Z:c7d7e229-67c8-49e9-9ac6-50782e017fd6',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:23 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/c93b235f-2731-4ae6-9c10-b3f46a0cec7c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471fbd5e4fa7793ecb671f8d3ecaebbaaa3f7af48b3f9a56b39cbe7b512d73fa7891374d76411f2cd765f94b","7ec9ff03e35461a53d000000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'b2182c25-238e-41ba-9207-53dfcafc8a28',
  'x-ms-client-request-id',
  'd5a80b61-b04a-4d37-97af-4a7106f63642',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11923',
  'x-ms-correlation-request-id',
  '88a6a5cb-244a-471b-8dde-6ef8468f6130',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021526Z:88a6a5cb-244a-471b-8dde-6ef8468f6130',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:26 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cdn/profiles/myprofilexxx/endpoints/myendpointxxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fca2aed6abe6eee2faa79b366fdabbabbaba2c6679dddcfda298d655539db7e393d9129f9f17658e96faebbb77efeee6cbd9aa2a962d3e36bfd3e71f8d3e6aaf5739a13600c4b46da8e5325ba0651740594d338c87befa2e21f6159ab6d945f3d1a35ffcd1dbfc7a973ebfccca75befbd12f197d44805779dd16397f3daf9af645d6873ace7eb0aef37c76918f97794bf0aabab82896dfa6e6dfce331a34bd707575359e14cb8bf1b45ad8162fb3764edfdd2d16d9454e9f4eab659b2fdb3734c6e64d75522d56444eeafa7b1fb5f9bbf6eebc5d94d42a5badca420671b79ab679bbddb4759e2d3efafee8a3a2316fd1b7a7cb6c52e634936dbdcef1ddb7db76755c96d555f7c3a6f3e92f5ae7f5f5ebb626844fb2e99c7e3cc9e7d9655161284fae5759d3e8e7844f45fcb1287ec00801f58f1e2dd765c9c49be43244f940068df1fc62333bf2d12e41a1d67152e3d7ddf13c270c957873c2f86555b7062efe6efc0f04aa4f7ff97c55d3088af6dafc7d95171773fb561e928b1a5f666dfebc58be3d2e8b8cd09266dee7af94d9cfe8a5de97cf2da3055f9d2adfbc6eb3761d037abc2252100b7e419308b6e016bfe497d0e412ee34accf59b28888f4c92c3fcfd665fba5fb429a132bad9bb65a3cad1699509c1a5fe4d5b3a26c4906e5ef595e169734cf2f2b62274b93755dbe2e2e9634b5bf577e4d2de5d3ab7c4278513b1ed2b3a2ceafb2b2943781b469479cc714c1e808f58f5ead97004593864115e04afad37cfb7a3d9d92dc10cd7fc92f","f97f00088390f674040000"], [
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
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'fc606965-ef64-4948-88a8-b3d6fe4e7b10',
  'x-ms-client-request-id',
  'fc611616-1ab8-451b-9c05-2e38c471ea9a',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-resource-requests',
  '49',
  'x-ms-correlation-request-id',
  '8bd3c035-5a9b-4c59-93fc-69b4b2da1638',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021529Z:8bd3c035-5a9b-4c59-93fc-69b4b2da1638',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:29 GMT'
]);
