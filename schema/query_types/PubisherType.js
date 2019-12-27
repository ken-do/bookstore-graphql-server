const { GraphQLObjectType } = require('graphql')

const fields = require('../fields/publisherFields')

const PublisherType = new GraphQLObjectType({
  name: 'Publisher',
  fields
})

module.exports = PublisherType
