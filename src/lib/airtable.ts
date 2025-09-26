import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_TOKEN,
  endpointUrl: process.env.AIRTABLE_ENDPOINT_URL,
}).base(process.env.AIRTABLE_BASE_ID!);

export { base };
