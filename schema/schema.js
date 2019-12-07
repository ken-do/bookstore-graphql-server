const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList
} = require('graphql');

const {
    registerSingleFields,
    registerListFields
} = require('../ultils/fieldsRegister');
const {
    GenreType,
    AuthorType,
    PublisherType,
    BookType
} = require('./query_types');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...registerListFields([
            GenreType,
            AuthorType,
            PublisherType,
            BookType
        ]),
        ...registerSingleFields([
            GenreType,
            AuthorType,
            PublisherType,
            BookType
        ])
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});