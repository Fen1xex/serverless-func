const items = require('../assets/data')

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters
  const ids = items.filter((item) => item.id === id)
  const item = ids[0]
  console.log(item)

  if (item) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(item),
    }
  }
}
