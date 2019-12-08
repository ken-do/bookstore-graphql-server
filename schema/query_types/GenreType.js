const graphQL = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString
} = graphQL

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
})

module.exports = GenreType
