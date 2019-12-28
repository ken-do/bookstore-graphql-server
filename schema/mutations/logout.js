const {
  logout
} = require('../../ultils/Auth')

const AuthType = require('../query_types/AuthType')

module.exports = {
  type: AuthType,
  resolve (parentValue, args) {
    return logout()
  }
}
