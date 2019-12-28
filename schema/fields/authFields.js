const {
    GraphQLBoolean
} = require('graphql')

const authFields = {
    isAuthenticated: { type: GraphQLBoolean }
}

module.exports = authFields