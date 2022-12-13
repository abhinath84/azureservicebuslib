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
    // 1. 1 -> ConnectionString
    // 2. 1, 2 -> ConnectionString
    // 3. 1, 2, 3 -> ConnectionString
    //   => when snd is not credential

    // 4. 1, 2 -> TokenCredential | NamedKeyCredential
    // 5. 1, 2, 3 -> TokenCredential | NamedKeyCredential
    // 6. 1, 2, 3, 4 -> TokenCredential | NamedKeyCredential
    //   => when snd is not credential

    this.mClient = null;
    this.mAdminClient = null;
    this.mSender = null;
    this.mReceiver = null;

    // 1. 1 -> ConnectionString
    if (args.length === 1) {
      this.initwithConnectionString(args[0]);
      return;
    }
    // 2. 1, 2 -> ConnectionString
    // 4. 1, 2 -> TokenCredential | NamedKeyCredential
    if (args.length === 2) {
      if(isClass(args[1])) {
        this.initwithCredential(args[0], args[1]);
      } else {
        this.initwithConnectionString(args[0], args[1]);
      }
      return;
    }
    // 3. 1, 2, 3 -> ConnectionString
    // 5. 1, 2, 3 -> TokenCredential | NamedKeyCredential
    if (args.length === 3) {
      if(isClass(args[1])) {
        this.initwithCredential(args[0], args[1], args[2]);
      } else {
        this.initwithConnectionString(args[0], args[1], args[2]);
      }
      return;
    }
    // 6. 1, 2, 3, 4 -> TokenCredential | NamedKeyCredential
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
    this.mClient = new ServiceBusClient(connectionString);
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
