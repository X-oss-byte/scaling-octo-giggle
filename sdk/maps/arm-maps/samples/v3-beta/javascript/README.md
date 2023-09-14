# client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for in some common scenarios.

| **File Name**                                                                   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [accountsCreateOrUpdateSample.js][accountscreateorupdatesample]                 | Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/CreateAccountManagedIdentity.json                                                                                                                                                                                                                                                                                                                                           |
| [accountsDeleteSample.js][accountsdeletesample]                                 | Delete a Maps Account. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/DeleteAccount.json                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [accountsGetSample.js][accountsgetsample]                                       | Get a Maps Account. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/GetAccount.json                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [accountsListByResourceGroupSample.js][accountslistbyresourcegroupsample]       | Get all Maps Accounts in a Resource Group x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/ListAccountsByResourceGroup.json                                                                                                                                                                                                                                                                                                                                                                                                           |
| [accountsListBySubscriptionSample.js][accountslistbysubscriptionsample]         | Get all Maps Accounts in a Subscription x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/ListAccountsBySubscription.json                                                                                                                                                                                                                                                                                                                                                                                                              |
| [accountsListKeysSample.js][accountslistkeyssample]                             | Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/ListKeys.json                                                                                                                                                                                                                                                                |
| [accountsListSasSample.js][accountslistsassample]                               | Create and list an account shared access signature token. Use this SAS token for authentication to Azure Maps REST APIs through various Azure Maps SDKs. As prerequisite to create a SAS Token. //@@TS-MAGIC-NEWLINE@@ Prerequisites: 1. Create or have an existing User Assigned Managed Identity in the same Azure region as the account. 2. Create or update an Azure Map account with the same Azure region as the User Assigned Managed Identity is placed. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/AccountListSAS.json |
| [accountsRegenerateKeysSample.js][accountsregeneratekeyssample]                 | Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/RegenerateKey.json                                                                                                                                                                                                                                                                                                                                             |
| [accountsUpdateSample.js][accountsupdatesample]                                 | Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku, Tags, Properties. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/UpdateAccountManagedIdentity.json                                                                                                                                                                                                                                                                                                                              |
| [creatorsCreateOrUpdateSample.js][creatorscreateorupdatesample]                 | Create or update a Maps Creator resource. Creator resource will manage Azure resources required to populate a custom set of mapping data. It requires an account to exist before it can be created. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/CreateMapsCreator.json                                                                                                                                                                                                                                                           |
| [creatorsDeleteSample.js][creatorsdeletesample]                                 | Delete a Maps Creator resource. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/DeleteMapsCreator.json                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [creatorsGetSample.js][creatorsgetsample]                                       | Get a Maps Creator resource. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/GetMapsCreator.json                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [creatorsListByAccountSample.js][creatorslistbyaccountsample]                   | Get all Creator instances for an Azure Maps Account x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/ListMapsCreatorsByAccount.json                                                                                                                                                                                                                                                                                                                                                                                                   |
| [creatorsUpdateSample.js][creatorsupdatesample]                                 | Updates the Maps Creator resource. Only a subset of the parameters may be updated after creation, such as Tags. x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/UpdateMapsCreator.json                                                                                                                                                                                                                                                                                                                                               |
| [mapsListOperationsSample.js][mapslistoperationssample]                         | List operations available for the Maps Resource Provider x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/GetOperations.json                                                                                                                                                                                                                                                                                                                                                                                                          |
| [mapsListSubscriptionOperationsSample.js][mapslistsubscriptionoperationssample] | List operations available for the Maps Resource Provider x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/GetOperationsSubscription.json                                                                                                                                                                                                                                                                                                                                                                                              |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node accountsCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node accountsCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[accountscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsCreateOrUpdateSample.js
[accountsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsDeleteSample.js
[accountsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsGetSample.js
[accountslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsListByResourceGroupSample.js
[accountslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsListBySubscriptionSample.js
[accountslistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsListKeysSample.js
[accountslistsassample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsListSasSample.js
[accountsregeneratekeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsRegenerateKeysSample.js
[accountsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/accountsUpdateSample.js
[creatorscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/creatorsCreateOrUpdateSample.js
[creatorsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/creatorsDeleteSample.js
[creatorsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/creatorsGetSample.js
[creatorslistbyaccountsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/creatorsListByAccountSample.js
[creatorsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/creatorsUpdateSample.js
[mapslistoperationssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/mapsListOperationsSample.js
[mapslistsubscriptionoperationssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/maps/arm-maps/samples/v3-beta/javascript/mapsListSubscriptionOperationsSample.js
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-maps?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/maps/arm-maps/README.md