import assert from "assert";
import dotenv from "dotenv";

import { QueueServiceBusClient } from "../libs/core/queueservicebusclient.js";

dotenv.config({path: "/dist/tests/.env"});

describe("Create queue", () => {
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
