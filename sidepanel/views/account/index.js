const html = require('choo/html')
const subSelctor = require('../../components/sub-selector')
const gear = require('../../components/gear')
const basic = require('./basic')
const infoPanel = require('./info-panel')
const settings = require('./components/settings')

module.exports = function accountView (state, emit) {

  const gearOnclick = (e) => {
    e.preventDefault()
    state.account.rightOverlayOpen = !state.account.rightOverlayOpen
    emit('gear#click', 'right-overlay')
  }

  if (!state.account) state.account = {}
  return html`
    <div class='column full-height full-width'>
      ${gear(gearOnclick)}
      ${settings(state, emit)}
      ${basic(state, emit)}
      ${infoPanel(state, emit)}
    </div>
  `
}