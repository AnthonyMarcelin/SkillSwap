const { Client } = require("pg");
const connectionString = process.env.PG_URL || process.env.PG_URL_DOCKER;

const retryInterval = 2000;

async function wait() {
  if (!connectionString) {
    console.error("No PG_URL provided");
    process.exit(1);
  }

  const client = new Client({ connectionString });
  while (true) {
    try {
      await client.connect();
      await client.end();
      console.log("Postgres is available");
      process.exit(0);
    } catch (err) {
      console.log("Waiting for Postgres...");
      await new Promise((r) => setTimeout(r, retryInterval));
    }
  }
}

wait();
