import { TokenCredential, NamedKeyCredential } from "@azure/core-auth";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  HttpResponse,
  EntitiesResponse,
  ServiceBusClientOptions,
  ServiceBusAdministrationClientOptions,
  CreateQueueOptions,
  WithResponse,
  QueueProperties,
  OperationOptions,
  QueueRuntimeProperties
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

  createQueue(queueName: string, options?: CreateQueueOptions): Promise<WithResponse<QueueProperties>> {
    if(this.mAdminClient)
      return(this.mAdminClient.createQueue(queueName, options));
    
    throw new Error("Invalid ServiceBusAdministrationClient handler");
  }

  deleteQueue(queueName: string, operationOptions?: OperationOptions): Promise<{ _response: HttpResponse; }> {
    if(this.mAdminClient)
      return(this.mAdminClient.deleteQueue(queueName, operationOptions));
    
    throw new Error("Invalid ServiceBusAdministrationClient handler");
  }

  getQueue(queueName: string, operationOptions?: OperationOptions): Promise<WithResponse<QueueProperties>> {
    if(this.mAdminClient)
      return(this.mAdminClient.getQueue(queueName, operationOptions));
    
    throw new Error("Invalid ServiceBusAdministrationClient handler");
  }

  getQueueRuntimeProperties(queueName: string, operationOptions?: OperationOptions): Promise<WithResponse<QueueRuntimeProperties>> {
    if(this.mAdminClient)
      return(this.mAdminClient.getQueueRuntimeProperties(queueName, operationOptions));
    
    throw new Error("Invalid ServiceBusAdministrationClient handler");
  }

  listQueues(options?: OperationOptions): PagedAsyncIterableIterator<QueueProperties, EntitiesResponse<QueueProperties>> {
    if(this.mAdminClient)
      return(this.mAdminClient.listQueues(options));
    
    throw new Error("Invalid ServiceBusAdministrationClient handler");
  }

  listQueuesRuntimeProperties(options?: OperationOptions): PagedAsyncIterableIterator<QueueRuntimeProperties, EntitiesResponse<QueueRuntimeProperties>> {
    if(this.mAdminClient)
      return(this.mAdminClient.listQueuesRuntimeProperties(options));
    
    throw new Error("Invalid ServiceBusAdministrationClient handler");
  }

  queueExists(queueName: string, operationOptions?: OperationOptions): Promise<boolean> {
    if(this.mAdminClient)
      return(this.mAdminClient.queueExists(queueName, operationOptions));
    
    throw new Error("Invalid ServiceBusAdministrationClient handler");
  }

  updateQueue(queue: WithResponse<QueueProperties>, operationOptions?: OperationOptions): Promise<WithResponse<QueueProperties>> {
    if(this.mAdminClient)
      return(this.mAdminClient.updateQueue(queue));
    
    throw new Error("Invalid ServiceBusAdministrationClient handler");
  }
}
