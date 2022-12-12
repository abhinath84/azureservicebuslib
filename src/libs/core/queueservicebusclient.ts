import { AzureNamedKeyCredential } from "@azure/core-auth";

import { ServiceBusClientBase } from "./servicebusclientbase.js";

export class QueueServiceBusClient extends ServiceBusClientBase {
  constructor(connectionString: string);
  constructor(credential: AzureNamedKeyCredential);
  constructor(...args: any) {
    super(args);
  }
}
