const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql')

const {
  GenreType,
  AuthorType,
  PublisherType,
  BookType
} = require('./query_types')

const {
  registerSingleFields,
  registerListFields
} = require('../ultils/fieldsRegister')

const {
  registerFieldsAdder,
  registerFieldsEditor,
  registerFieldsRemover
} = require('../ultils/mutationsRegister')

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
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...registerFieldsAdder([
      GenreType,
      AuthorType,
      PublisherType,
      BookType
    ]),
    ...registerFieldsEditor([
      GenreType,
      AuthorType,
      PublisherType,
      BookType
    ]),
    ...registerFieldsRemover([
      GenreType,
      AuthorType,
      PublisherType,
      BookType
    ])
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
