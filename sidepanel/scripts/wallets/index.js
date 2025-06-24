const NETWORKS = require('../../../constants/networks')
const { createEthAccountFromInput } = require('./eth')

/**
 * data: {
 *   [networkID]: [{ address, secret, publicKey }]
 * }
 */
function createWalletWithSigners(data) {
  const wallet = {}

  Object.keys(data).forEach((network) => {
    if (!network) return

    wallet[network] = data[network].reduce((agg, account) => {
      if (!account || !account.secret) return agg

      const signer = createAccountSigner({ network, secret: account.secret })
      agg.push(signer)
      agg[signer.address] = account
      return agg
    }, [])
  })

  return wallet
}

function createAccountSigner({ network, secret }) {
  switch (network) {
    case NETWORKS[0].name:
      return createEthAccountFromInput(secret)
    default:
      throw new Error(`${network} account not supported`)
  }
}

module.exports = {
  createWalletWithSigners,
  createAccountSigner,
}
