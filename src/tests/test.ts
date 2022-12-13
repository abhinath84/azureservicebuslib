import assert from "assert";
// import dotenv from "dotenv";

import { AzureNamedKeyCredential } from "@azure/core-auth";
import {
  ServiceBusClientOptions,
  ServiceBusAdministrationClientOptions,
} from "@azure/service-bus";
import { QueueServiceBusClient } from "../libs/core/queueservicebusclient.js";

// dotenv.config({path: "/dist/tests/.env"});

const connString = "Endpoint=sb://anathpracticeservicebus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=CWFee73R9gyVuK/SUZWc8jKBYqmwDhEWCsQCS+oQtmU=";
const credential = new AzureNamedKeyCredential("RootManageSharedAccessKey", "CWFee73R9gyVuK/SUZWc8jKBYqmwDhEWCsQCS+oQtmU=");
const fullyQualifiedNamespace = "anathpracticeservicebus.servicebus.windows.net";

const copt: ServiceBusClientOptions = {};
const copt1: ServiceBusClientOptions = {};
const aopt: ServiceBusAdministrationClientOptions = {};
const obj = {
  firstname: "abhishek",
  lastname: "nath"
};

// const clientWithConnectionString = new QueueServiceBusClient( connString /*<string>process.env.SERVICE_BUS_CLIENT_CONNECTION_STRING*/);
// const clientWithConnectionStringAndOneOpts = new QueueServiceBusClient(connString, copt);
// const clientWithConnectionStringAndTwoOpts = new QueueServiceBusClient(connString, copt, aopt);

// const clientWithCredential = new QueueServiceBusClient(fullyQualifiedNamespace, credential);
// const clientWithCredentialAndOneOpts = new QueueServiceBusClient(fullyQualifiedNamespace, credential, copt);
// const clientWithCredentialAndTwoOpts = new QueueServiceBusClient(fullyQualifiedNamespace, credential, copt, aopt);
// const clientWithJunkInput = new QueueServiceBusClient(fullyQualifiedNamespace, credential, copt, aopt, copt1);
// const clientWithJunkInput = new QueueServiceBusClient(fullyQualifiedNamespace, credential, copt, obj);
