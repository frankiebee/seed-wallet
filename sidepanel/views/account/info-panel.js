const html = require('choo/html')
const subSelctor = require('../../components/sub-selector')
const transactionHistory = require('./components/transaction-history')
const tokens = require('./components/tokens')
const defi = require('./components/defi')

const context = 'account#info'

module.exports = function infoPanel (state, emit) {
  if (!state[context]) state[context] = {}
  // const processData = (e) => {
  //   e.preventDefault();
  //   state.name = e.currentTarget.name.value
  //  }
  const views = {
    'Transactions': transactionHistory,
    'Tokens': tokens,
    'DeFi': defi,
  }

  const defaultSelction = 'Transactions'
  const selected = state[context].selected || defaultSelction

  const sub = subSelctor({
    context,
    defaultSelction,
    tabs: Object.keys(views).map((name) => { return { name } }),
  }, state, () => emit('render'))


  return html`
    <div class="column full-width half-height">
      ${sub}
      <div class="column full-height center border">
        ${views[selected](state, emit)}
      </div>
    </div>
  `
}