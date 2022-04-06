require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appNu7IoGFnmMaoRV')
  .table('products')

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list()
    const products = records.map((product) => {
      const { id } = product
      const {
        name,
        image,
        price,
        desc,
        company,
        category,
        colors,
        shipping,
        stars,
        reviews,
        stock,
      } = product.fields
      const img = image[0].url
      return {
        id,
        name,
        img,
        price,
        desc,
        company,
        category,
        colors,
        shipping,
        stars,
        reviews,
        stock,
      }
    })
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
}
