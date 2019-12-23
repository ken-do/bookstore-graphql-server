const axios = require('axios')

module.exports = {
  login: (args) => {
    return axios.post(`${process.env.API_BOOKSTORE}/api-token-auth/`, args)
      .then(res => {
        axios.defaults.headers.common['Authorization'] = 'Token ' + res.data.token
        return res.data
      })
      .catch(err => console.log(err))
  },

  logout: () => {
    delete axios.defaults.headers.common['Authorization']
    return ''
  }
}
