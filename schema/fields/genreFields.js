const { GraphQLString } = require('graphql')

const genreFields = {
  id: { type: GraphQLString },
  name: { type: GraphQLString }
}

module.exports = genreFields
