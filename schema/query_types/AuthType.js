const { GraphQLObjectType } = require('graphql')
const fields = require('../fields/authFields')

const AuthType = new GraphQLObjectType({
    name: 'Auth',
    fields
})

module.exports = AuthType
