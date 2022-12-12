import { AzureNamedKeyCredential } from "@azure/core-auth";
import {
    ServiceBusClient,
    ServiceBusAdministrationClient,
    ServiceBusReceiver,
    ServiceBusSender,
    // ServiceBusMessage,
    // CreateQueueOptions,
    // ServiceBusClientOptions,
    // ServiceBusAdministrationClientOptions,
    // CreateTopicOptions,
    // CreateSubscriptionOptions,
    // ServiceBusSessionReceiverOptions,
    // SubscribeOptions,
    // MessageHandlers,
    // RetryMode
} from "@azure/service-bus";

export class ServiceBusClientBase {
  protected mClient: ServiceBusClient | null;
  protected mAdminClient: ServiceBusAdministrationClient | null;
  protected mSender: ServiceBusSender | null;
  protected mReceiver: ServiceBusReceiver | null;

  // constructor(connectionString: string);
  // constructor(credential: AzureNamedKeyCredential);
  constructor(...args: any) {
    this.mClient = null;
    this.mAdminClient = null;
    this.mSender = null;
    this.mReceiver = null;
  }
}
