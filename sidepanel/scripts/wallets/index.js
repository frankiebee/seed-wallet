const NETWORKS = require('../../../constants/networks')
const createEthAccountFromInput = require('./eth')

/**
 * walletData: {
 * network:[{address: secret: publicKey}]
 *
 * }*/
function createWalletWithSigners (data) {
  const wallet = {}
  Object.keys(data).forEach((network) => {
    if (!network) return
    wallet[network] = data[network].reduce((agg, account) => {
      if (!account) return agg
      const account = createAccountSigners({ network, secret: account.secret })
      agg.push(account)
      agg[account.address] = account
      return agg
    }, [])
  })
}

createAccountSigners ({network, secret}) {
  switch (network) {
    case NETWORKS[0].name:
      return createEthAccountFromInput(secret)
    default:
      throw new Error(`${network} account not supported`)
  }
}

module.exports = {
  createWallet,
  createAccount,
}