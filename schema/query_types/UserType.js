const { GraphQLObjectType } = require('graphql')
const fields = require('../fields/userFields')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields
})

module.exports = UserType
