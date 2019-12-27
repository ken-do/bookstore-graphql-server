const { GraphQLString } = require('graphql')

const bookFields = {
  id: { type: GraphQLString },
  sku: { type: GraphQLString },
  isbn: { type: GraphQLString },
  title: { type: GraphQLString },
  publication_date: { type: GraphQLString },
  size: { type: GraphQLString },
  cover_type: { type: GraphQLString },
  edition: { type: GraphQLString },
  available_quantity: { type: GraphQLString },
  price: { type: GraphQLString },
  created_at: { type: GraphQLString },
  modified_at: { type: GraphQLString }
}

module.exports = bookFields
