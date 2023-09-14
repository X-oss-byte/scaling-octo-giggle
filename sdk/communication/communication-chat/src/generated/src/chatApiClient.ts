/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ChatThreadImpl, ChatImpl } from "./operations";
import { ChatThread, Chat } from "./operationsInterfaces";
import { ChatApiClientContext } from "./chatApiClientContext";
import { ChatApiClientOptionalParams } from "./models";

export class ChatApiClient extends ChatApiClientContext {
  /**
   * Initializes a new instance of the ChatApiClient class.
   * @param endpoint The endpoint of the Azure Communication resource.
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: ChatApiClientOptionalParams) {
    super(endpoint, options);
    this.chatThread = new ChatThreadImpl(this);
    this.chat = new ChatImpl(this);
  }

  chatThread: ChatThread;
  chat: Chat;
}
