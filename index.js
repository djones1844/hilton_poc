const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./lib/schema')
const PORT = 3001;
const app = express();
const { init } = require('./lib/data')
init()

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(PORT, () => console.log('\x1b[32m%s\x1b[0m', `Server running on port: ${PORT}`))
