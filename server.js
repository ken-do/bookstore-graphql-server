require('dotenv').config()

const express = require('express')
const expressGraphQL = require('express-graphql')
const cors = require('cors')

const RootQuery = require('./schema/schema')

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}))

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema: RootQuery
}))

app.listen(4000, () => {
  console.log('server listens on PORT 4000')
})
