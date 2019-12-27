const { GraphQLString } = require('graphql')

const publisherFields = {
  id: { type: GraphQLString },
  name: { type: GraphQLString },
  website: { type: GraphQLString },
  created_at: { type: GraphQLString },
  modified_at: { type: GraphQLString }
}

module.exports = publisherFields
