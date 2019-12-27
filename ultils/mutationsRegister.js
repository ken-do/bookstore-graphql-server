const axios = require('axios')

const {
  GraphQLID,
  GraphQLNonNull
} = require('graphql')

const registerFieldsAdder = queryTypes => {
  const registeredMutations = {}
  queryTypes.forEach(type => {
    const fieldName = type.name
    const loweredFieldName = fieldName.toLowerCase()
    const args = require(`../schema/fields/${loweredFieldName}Fields`)
    delete args.id
    registeredMutations[`add${fieldName}`] = {
      type,
      args,
      resolve(parentValue, agrs) {
        return axios.post(`${process.env.API_BOOKSTORE}/${loweredFieldName}s/`, agrs)
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
    const loweredFieldName = fieldName.toLowerCase()
    const args = require(`../schema/fields/${loweredFieldName}Fields`)

    registeredMutations[`edit${fieldName}`] = {
      type,
      args: {
        ...args,
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, args) {
        return axios.patch(`${process.env.API_BOOKSTORE}/${loweredFieldName}s/${args.id}/`, args)
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
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
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
