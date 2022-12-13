import { TokenCredential, NamedKeyCredential, AzureNamedKeyCredential } from "@azure/core-auth";
import {
    ServiceBusClient,
    ServiceBusAdministrationClient,
    ServiceBusReceiver,
    ServiceBusSender,
    // ServiceBusMessage,
    // CreateQueueOptions,
    ServiceBusClientOptions,
    ServiceBusAdministrationClientOptions,
    // CreateTopicOptions,
    // CreateSubscriptionOptions,
    // ServiceBusSessionReceiverOptions,
    // SubscribeOptions,
    // MessageHandlers,
    // RetryMode
} from "@azure/service-bus";

function isClass(val: any) {
  return ((Object.prototype.toString.call(val) === "[object Object]") &&
          (val.constructor.name !== "Object"));
}

export class ServiceBusClientBase {
  protected mClient: ServiceBusClient | null;
  protected mAdminClient: ServiceBusAdministrationClient | null;
  protected mSender: ServiceBusSender | null;
  protected mReceiver: ServiceBusReceiver | null;

  // constructor(connectionString: string);
  // constructor(credential: AzureNamedKeyCredential);
  constructor(...args: any[]) {
    this.mClient = null;
    this.mAdminClient = null;
    this.mSender = null;
    this.mReceiver = null;

    if (args.length === 1) {
      this.initwithConnectionString(args[0]);
      return;
    }

    if (args.length === 2) {
      if(isClass(args[1])) {
        this.initwithCredential(args[0], args[1]);
      } else {
        this.initwithConnectionString(args[0], args[1]);
      }
      return;
    }

    if (args.length === 3) {
      if(isClass(args[1])) {
        this.initwithCredential(args[0], args[1], args[2]);
      } else {
        this.initwithConnectionString(args[0], args[1], args[2]);
      }
      return;
    }
    
    if (args.length === 4) {
      this.initwithCredential(args[0], args[1], args[2], args[3]);
      return;
    }

    throw new Error('Undefined constructor.');
  }

  isConnected() : boolean {
    return(false);
  }

  private initwithConnectionString(connectionString: string,
              clientOptions?: ServiceBusClientOptions,
              adminClientOptions?: ServiceBusAdministrationClientOptions) {
    this.mClient = new ServiceBusClient(connectionString, clientOptions);
    this.mAdminClient = new ServiceBusAdministrationClient(connectionString, adminClientOptions);
  }

  private initwithCredential(fullyQualifiedNamespace: string,
              credential: TokenCredential | NamedKeyCredential,
              clientOptions?: ServiceBusClientOptions,
              adminClientOptions?: ServiceBusAdministrationClientOptions) {
    this.mClient = new ServiceBusClient(fullyQualifiedNamespace, credential, clientOptions);
    this.mAdminClient = new ServiceBusAdministrationClient(fullyQualifiedNamespace, credential, adminClientOptions);
  }
}
