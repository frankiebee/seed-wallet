const html = require('choo/html')
const context = 'account#info'

module.exports = function transactionHistory (state, emit) {
  if (!state[context]) state[context] = {}
  // const processData = (e) => {
  //   e.preventDefault();
  //   state.name = e.currentTarget.name.value
  //  }
  const transactions  = state.transactions || []

  return transactions.length ? transactions.map((tx) => {
    if (!tx) return ''
    return html`
      <div class='transaction'>
        <div>${tx.FIATvalue}</div>
        <div>${tx.direction}</div>
        <div>${tx.token}</div>
        <div>${tx.tokenAmmount}</div>
      </div>
    `
  }) : html`<div>No Transaction History</div>`

}