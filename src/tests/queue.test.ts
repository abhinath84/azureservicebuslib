import assert from "assert";
import dotenv from "dotenv";

import { AzureNamedKeyCredential } from "@azure/core-auth";
import {
  ServiceBusClientOptions,
  ServiceBusAdministrationClientOptions,
} from "@azure/service-bus";
import { QueueServiceBusClient } from "../libs/core/queueservicebusclient.js";

dotenv.config({path: "/dist/tests/.env"});

describe("Create queue", () => {
  const clientWithConnectionString = new QueueServiceBusClient("Endpoint=sb://anathpracticeservicebus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=CWFee73R9gyVuK/SUZWc8jKBYqmwDhEWCsQCS+oQtmU=" /*<string>process.env.SERVICE_BUS_CLIENT_CONNECTION_STRING*/);

  const credential = new AzureNamedKeyCredential("RootManageSharedAccessKey", "CWFee73R9gyVuK/SUZWc8jKBYqmwDhEWCsQCS+oQtmU=");
  const fullyQualifiedNamespace = "anathpracticeservicebus.servicebus.windows.net";
  const clientWithCredential = new QueueServiceBusClient(fullyQualifiedNamespace, credential);

  const copt: ServiceBusClientOptions = {};
  const copt1: ServiceBusClientOptions = {};
  const aopt: ServiceBusAdministrationClientOptions = {};
  const clientWithCredentialAndOpts = new QueueServiceBusClient(fullyQualifiedNamespace, credential, copt, aopt);
  const clientWithConnectionStringAndOpts = new QueueServiceBusClient(<string>process.env.SERVICE_BUS_CLIENT_CONNECTION_STRING, copt, aopt);
  // const clientWithJunkInput = new QueueServiceBusClient("ggg", credential, copt, aopt, copt1);

  it("Basic queue", (done) => {
    assert(false);
    done();
  });

  it("Queue with session", (done) => {
    assert(false);
    done();
  });
});

describe("Send message in queue", () => {
  const client = new QueueServiceBusClient(<string>process.env.SERVICE_BUS_CLIENT_CONNECTION_STRING);

  it("Basic queue", (done) => {
    assert(false);
    done();
  });

  it("Queue with session", (done) => {
    assert(false);
    done();
  });
});

describe("Receive message from queue", () => {
  const client = new QueueServiceBusClient(<string>process.env.SERVICE_BUS_CLIENT_CONNECTION_STRING);

  it("Basic queue", (done) => {
    assert(false);
    done();
  });

  it("Queue with session", (done) => {
    assert(false);
    done();
  });
});
