import { TokenCredential, NamedKeyCredential } from "@azure/core-auth";
import {
  ServiceBusClientOptions,
  ServiceBusAdministrationClientOptions
} from "@azure/service-bus";

import { ServiceBusClientBase } from "./servicebusclientbase.js";

export class QueueServiceBusClient extends ServiceBusClientBase {
  constructor(connectionString: string,
              clientOptions?: ServiceBusClientOptions,
              adminClientOptions?: ServiceBusAdministrationClientOptions);
  constructor(fullyQualifiedNamespace: string,
              credential: TokenCredential | NamedKeyCredential,
              clientOptions?: ServiceBusClientOptions,
              adminClientOptions?: ServiceBusAdministrationClientOptions);
  constructor(...args: any[]) {
    super(...args);
  }
}
