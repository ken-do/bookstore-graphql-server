const { GraphQLObjectType } = require('graphql')

const fields = require('../fields/tokenFields')

const TokenType = new GraphQLObjectType({
  name: 'Token',
  fields
})

module.exports = TokenType
