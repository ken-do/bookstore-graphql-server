const { GraphQLList } = require('graphql')
const axios = require('axios')

const AuthorType = require('../query_types/AuthorType')
const PublisherType = require('../query_types/PubisherType')
const GenreType = require('../query_types/GenreType')

const bookDynamicFields = {
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

module.exports = bookDynamicFields
