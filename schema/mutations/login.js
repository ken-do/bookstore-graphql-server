const {
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

const {
  login
} = require('../../ultils/Auth')

const AuthType = require('../query_types/AuthType')

module.exports = {
  type: AuthType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve (parentValue, args) {
    return login(args)
  }
}
