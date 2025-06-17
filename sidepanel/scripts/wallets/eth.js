const { Wallet, isHexString } = require('ethers')

/**
 * Creates an Ethereum wallet from either a mnemonic or a private key.
 * @param {string} input - Mnemonic phrase or private key
 * @returns {Wallet}
 */

module.exports = function createEthAccountFromInput(input) {
  input = input.trim()

  if (input.split(' ').length >= 12 && input.includes(' ')) {
    // Assume it's a mnemonic phrase
    return Wallet.fromPhrase(input) // ethers v6
  }

  if (isHexString(input) && input.length === 66) {
    // Likely a private key (0x-prefixed, 64 hex chars)
    return new Wallet(input)
  }

  throw new Error("Input must be a valid mnemonic or private key")
}