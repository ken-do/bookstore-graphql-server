const axios = require('axios')

const {
    GraphQLString,
    GraphQLNonNull
} = require('graphql')

module.exports = {
    type: 'Mutation',
    args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, args) {
        return axios.post(`${process.env.API_BOOKSTORE}/api-auth/logout/`, args)
            .then(res => res.data)
    }
}