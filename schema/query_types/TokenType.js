const graphQL = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString
} = graphQL

const TokenType = new GraphQLObjectType({
  name: 'TokenType',
  fields: {
    token: { type: GraphQLString }
  }
})

module.exports = TokenType
