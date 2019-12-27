const { GraphQLObjectType } = require('graphql')
const fields = require('../fields/genreFields')

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields
})

module.exports = GenreType
