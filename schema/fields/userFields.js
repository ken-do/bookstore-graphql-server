const { GraphQLString } = require('graphql')

const userFields = {
  id: { type: GraphQLString },
  email: { type: GraphQLString }
}

module.exports = userFields
