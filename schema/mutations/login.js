const axios = require('axios')

const {
    GraphQLString,
    GraphQLNonNull
} = require('graphql')

const UserType = require('../query_types/UserType')

module.exports = {
    type: UserType,
    args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, args) {
        return axios.post(`${process.env.API_BOOKSTORE}/api-auth/login/`, args)
            .then(res => res.data)
    }
}