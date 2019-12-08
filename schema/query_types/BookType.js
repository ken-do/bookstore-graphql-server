const axios = require('axios')
const graphQL = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = graphQL

const AuthorType = require('./AuthorType')
const PublisherType = require('./PubisherType')
const GenreType = require('./GenreType')

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    id: { type: GraphQLString },
    sku: { type: GraphQLString },
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    publication_date: { type: GraphQLString },
    size: { type: GraphQLString },
    cover_type: { type: GraphQLString },
    edition: { type: GraphQLString },
    available_quantity: { type: GraphQLString },
    price: { type: GraphQLString },
    created_at: { type: GraphQLString },
    modified_at: { type: GraphQLString },
    publisher: {
      type: PublisherType,
      resolve ({ publisher }, args) {
        return axios.get(`${process.env.API_BOOKSTORE}/publishers/${publisher}`)
          .then(res => res.data)
      }
    },
    author: {
      type: AuthorType,
      resolve ({ author }, args) {
        return axios.get(`${process.env.API_BOOKSTORE}/authors/${author}`)
          .then(res => res.data)
      }
    },
    genres: {
      type: new GraphQLList(GenreType),
      resolve ({ genre }, args) {
        return Promise.all(genre.map(g => {
          return axios.get(`${process.env.API_BOOKSTORE}/genres/${g}`)
            .then(res => res.data)
        }))
      }
    }
  }
})

module.exports = BookType
