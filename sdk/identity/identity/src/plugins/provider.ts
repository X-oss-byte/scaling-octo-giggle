// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCachePersistenceOptions } from "../msal/nodeFlows/tokenCachePersistenceOptions";
import { VSCodeCredentialFinder } from "../credentials/visualStudioCodeCredentialPlugin";

/**
 * The type of an Azure Identity plugin, a function accepting a plugin
 * context.
 */
export type IdentityPlugin = (context: unknown) => void;

/**
 * Plugin context entries for controlling cache plugins.
 */
export interface CachePluginControl {
  setPersistence(
    persistenceFactory: (
      options?: TokenCachePersistenceOptions
    ) => Promise<import("@azure/msal-common").ICachePlugin>
  ): void;
}

export interface NativeBrokerPluginOptions {
  // We don't think this is necessary in JS as the user has to explicitly opt in to the plugin.
  // useBroker: boolean;
  enableMSAPassthrough: boolean;
  parentWindowHandle: Buffer;
}

export interface NativeBrokerPluginControl {
  // useBroker: boolean;
  // enableMSAPassthrough: boolean;
  // parentWindowHandle: string;

  setNativeBroker(
    nativeBroker: import("@azure/msal-common").INativeBrokerPlugin,
    options: NativeBrokerPluginOptions
  ): void;
  // createNativeBrokerPlugin(
  //   nativeBrokerFactory: () => Promise<import("@azure/msal-common").INativeBrokerPlugin>
  // ): void;
}

/**
 * Plugin context entries for controlling VisualStudioCodeCredential.
 */
export interface VisualStudioCodeCredentialControl {
  setVsCodeCredentialFinder(finder: VSCodeCredentialFinder): void;
}

/**
 * Context options passed to a plugin during initialization.
 *
 * Plugin authors are responsible for casting their plugin context values
 * to this type.
 *
 * @internal
 */
export interface AzurePluginContext {
  cachePluginControl: CachePluginControl;
  nativeBrokerPluginControl: NativeBrokerPluginControl;
  vsCodeCredentialControl: VisualStudioCodeCredentialControl;
}
