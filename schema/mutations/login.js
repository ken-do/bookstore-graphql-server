const {
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

const {
  login
} = require('../../ultils/Auth')

const TokenType = require('../query_types/TokenType')

module.exports = {
  type: TokenType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve (parentValue, args) {
    return login(args)
  }
}
