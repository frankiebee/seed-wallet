const ethers = require('ethers')


module.exports = class Eth {
  constructor (endpoint) {
    this.query = (() => {throw new Error('please update the query')})()
  }

  getBalance (address) {

  }

  getBalances (address) {

  }

  getTransactions ({address, startBlock, endBlock}) {

  }
}


