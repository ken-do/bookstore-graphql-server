const { GraphQLObjectType } = require('graphql')
const fields = require('../fields/authorFields')

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields
})

module.exports = AuthorType
