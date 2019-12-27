const graphQL = require('graphql')
const { GraphQLObjectType } = graphQL

const fields = require('../fields/bookFields')
const dynamicFields = require('../fields/bookDynamicFields')

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    ...fields,
    ...dynamicFields
  }
})

module.exports = BookType
