import { Client, Transport } from "@elastic/elasticsearch";
import loadEnvVariables from "../utils/envHelper.js";
loadEnvVariables();

console.log("Initializing Elasticsearch client");
console.log("Elasticsearch URL:", process.env.ELASTIC_SEARCH_URL);

// Custom Transport class to log queries
class CustomTransport extends Transport {
  request(params, options, callback) {
    console.log(
      "Query: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
      JSON.stringify(params)
    );
    return super.request(params, options, callback);
  }
}

const client = new Client({
  node: process.env.ELASTIC_SEARCH_URL,
  auth: { apiKey: process.env.ELASTIC_SEARCH_API_KEY },
  Transport: CustomTransport,
  log: {
    info: (message) => console.log("INFO:", message),
    warn: (message) => console.warn("WARN:", message),
    error: (message) => console.error("ERROR:", message),
  },
});

export default client;
