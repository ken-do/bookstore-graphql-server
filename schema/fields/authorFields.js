const { GraphQLString } = require('graphql')

const authorFields = {
  id: { type: GraphQLString },
  first_name: { type: GraphQLString },
  last_name: { type: GraphQLString },
  description: { type: GraphQLString },
  created_at: { type: GraphQLString },
  modified_at: { type: GraphQLString }
}

module.exports = authorFields
