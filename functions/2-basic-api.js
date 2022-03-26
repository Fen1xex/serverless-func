const items = require('../assets/data')

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters
  const ids = items.filter((item) => item.id !== id)
  if (ids) {
    return {
      statusCode: 200,
      body: JSON.stringify(ids),
    }
  }
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  }
}
