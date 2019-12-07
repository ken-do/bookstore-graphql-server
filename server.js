require('dotenv').config();

const express = require('express');
const expressGraphQL = require('express-graphql');

const RootQuery = require('./schema/schema');

const app = express();

app.get('/', (req, res) => {
    res.send("Bookstore GraphQL Server");
});

app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema: RootQuery
}));

app.listen(4000, () => {
    console.log('server listens on PORT 4000')
})