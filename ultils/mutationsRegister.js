const axios = require('axios')

const {
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

const registerFieldsAdder = queryTypes => {
  const registeredMutations = {}
  queryTypes.forEach(type => {
    const fieldName = type.name
    registeredMutations[`add${fieldName}`] = {
      type,
      args: {
        ...type.fields,
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (parentValue, agrs) {
        return axios.post(`${process.env.API_BOOKSTORE}/${fieldName.toLowerCase()}s/`, agrs)
          .then(res => res.data)
      }
    }
  })

  return registeredMutations
}

const registerFieldsEditor = queryTypes => {
  const registeredMutations = {}
  queryTypes.forEach(type => {
    const fieldName = type.name
    registeredMutations[`edit${fieldName}`] = {
      type,
      args: { ...type.fields },
      resolve (parentValue, args) {
        return axios.patch(`${process.env.API_BOOKSTORE}/${fieldName.toLowerCase()}s/${args.id}/`, args)
          .then(res => res.data)
      }
    }
  })

  return registeredMutations
}

const registerFieldsRemover = queryTypes => {
  const registeredMutations = {}
  queryTypes.forEach(type => {
    const fieldName = type.name
    registeredMutations[`delete${fieldName}`] = {
      type,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve (parentValue, { id }) {
        return axios.delete(`${process.env.API_BOOKSTORE}/${fieldName.toLowerCase()}s/${id}/`)
          .then(res => res.data)
      }
    }
  })

  return registeredMutations
}

module.exports = {
  registerFieldsAdder,
  registerFieldsEditor,
  registerFieldsRemover
}
