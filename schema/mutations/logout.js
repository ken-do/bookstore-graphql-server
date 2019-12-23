const {
  logout
} = require('../../ultils/Auth')

const TokenType = require('../query_types/TokenType')

module.exports = {
  type: TokenType,
  resolve (parentValue, args) {
    return logout()
  }
}
