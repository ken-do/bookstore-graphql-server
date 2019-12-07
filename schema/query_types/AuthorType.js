const graphQL = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
} = graphQL;

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: {
        id: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        description: { type: GraphQLString },
        created_at: { type: GraphQLString },
        modified_at: { type: GraphQLString }
    }
});

module.exports = AuthorType;