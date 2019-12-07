const axios = require('axios');

const {
    GraphQLString,
    GraphQLList
} = require('graphql');

const registerSingleFields = (queryTypes) => {
    const registeredTypes = {};
    queryTypes.forEach(type => {
        const fieldName = type.name.toLowerCase();
        registeredTypes[fieldName] = {
            type,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, { id }) {
                return axios.get(`${process.env.API_BOOKSTORE}/${fieldName}s/${id}`)
                    .then(res => res.data)
            }
        }
    });

    return registeredTypes;
}

const registerListFields = (queryTypes) => {
    const registeredTypes = {};
    queryTypes.forEach(type => {
        const fieldName = type.name.toLowerCase() + 's';
        registeredTypes[fieldName] = {
            type: new GraphQLList(type),
            args: { id: { type: GraphQLString } },
            resolve(parentValue, { id }) {
                return axios.get(`${process.env.API_BOOKSTORE}/${fieldName}`)
                    .then(res => res.data)
            }
        }
    });

    return registeredTypes;
}

module.exports = {
    registerSingleFields,
    registerListFields
};