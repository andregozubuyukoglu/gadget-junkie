const dotenv = require("dotenv")
dotenv.config()

const Airtable = require("airtable-node")
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters
  if (id) {
    return {
      statusCode: 200,
      body: "single products route",
    }
  }
  return {
    statusCode: 400,
    body: "single products route",
  }
}
