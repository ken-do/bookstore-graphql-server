const graphQL = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
} = graphQL;

const PublisherType = new GraphQLObjectType({
    name: 'Publisher',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        website: { type: GraphQLString },
        created_at: { type: GraphQLString },
        modified_at: { type: GraphQLString }
    }
});

module.exports = PublisherType;