const html = require('choo/html')

const subSelctor = require('../components/sub-selector')
const fullOverlay = require('../components/full-overlay')
const accountView = require('./account')
const personalView = require('./personal')
const settingsView = require('./settings')
const importView = require('./account/import')

const defaultSelction = 'Wallet'

const overlayViews = {
  accountImport: importView,
}



module.exports = function main (state, emit) {
  if (!state.main) state.main = {}

  const selectedContext = state.main.selected || defaultSelction
  const views = {
    Wallet: accountView,
    Personal: personalView,
    Settings: settingsView,
  }

  const sub = subSelctor({
    context: 'main',
    defaultSelction,
    tabs: Object.keys(views).map((name) => { return { name } }),
  }, state, () => emit('render'))

  return html`
    <body class="full-width column center-start">
      ${sub}
      <div class="border column center-start full-width full-height">
        ${state.overlay ? fullOverlay({view: overlayViews[state.overlay]}, state, emit) : ''}
        ${views[selectedContext](state, emit)}
      </div>
    </body>
  `
}