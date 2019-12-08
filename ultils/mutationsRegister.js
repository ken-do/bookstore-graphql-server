const axios = require('axios')

const {
    GraphQLString,
    GraphQLNonNull
} = require('graphql')

const registerFieldsAdder = queryTypes => {
    const registerMutations = {}
    queryTypes.forEach(type => {
        const fieldName = type.name.toLowerCase() + 's'
        registerMutations[fieldName] = {
            type,
            args: {
                ...type.fields,
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, agrs) {
                return axios.post(`${process.env.API_BOOKSTORE}/${fieldName}`, agrs)
                    .then(res => res.data)
            }
        }
    })

    return registerMutations
}

const registerFieldsEditor = queryTypes => {
    const registerMutations = {}
    queryTypes.forEach(type => {
        const fieldName = type.name.toLowerCase() + 's'
        registerMutations[fieldName] = {
            type,
            args: { ...type.fields },
            resolve(parentValue, args) {
                return axios.patch(`${process.env.API_BOOKSTORE}/${fieldName}/${args.id}`, args)
                    .then(res => res.data)
            }
        }
    })

    return registerMutations;
}

const registerFieldsRemover = queryTypes => {
    const registerMutations = {}
    queryTypes.forEach(type => {
        const fieldName = type.name.toLowerCase() + 's'
        registerMutations[fieldName] = {
            type,
            args: { id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parentValue, { id }) {
                return axios.delete(`${process.env.API_BOOKSTORE}/${fieldName}/${id}`)
                    .then(res => res.data)
            }
        }
    })

    return registerMutations;
}

module.exports = {
    registerFieldsAdder,
    registerFieldsEditor,
    registerFieldsRemover
}