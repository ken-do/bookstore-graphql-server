const graphQL = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString
} = graphQL

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    email: { type: GraphQLString }
  }
})

module.exports = UserType
