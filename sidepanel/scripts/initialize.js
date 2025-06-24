const { shortHands } = require('./browser')
const db = shortHands.db
const { createWalletWithSigners } = require('./wallets')


function createWallet () {
  const wallet = {}
  const key = createEtherumMetaKey()
  wallet[key.address] = key
  db.set({wallet})
  return wallet
}

function createEtherumMetaKey (chainId) {
  const key = ethers.Wallet.createRandom()
  key.chainId = chainId
  return key
}



module.exports = async function initialize (state) {
  const { initialized, wallet, userInfo, settings } =  await db.get(['initialized', 'wallet', 'userInfo', 'settings'])
  state.initialized = !!initialized
  state.wallet = wallet || createWallet() //create wallet here
  state.userInfo = userInfo || {}
  state.settings = settings || {} // FIAT defaults colors etc
}