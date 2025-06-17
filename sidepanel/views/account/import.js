const html = require('choo/html')
const NETWORKS = require('../../../constants/networks')
const subSelctor = require('../../components/sub-selector')
const gear = require('../../components/gear')
const basic = require('./basic')
const infoPanel = require('./info-panel')
const settings = require('./components/settings')

module.exports = function importView (state, emit) {
  if (!state.account) state.account = {}
  const onsubmit = (e) => {
    e.preventDefault();
    const data = {
      secret: e.target.secret.value,
      network: e.target.network.value,
    }
    emit('account#import', data)
  }

  const networks = NETWORKS.map((net) => {
    if (!net) return ''
    return html`
      <option value="${net.name}">${net.name}</option>
    `
  })
  const keypress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        const form = e.currentTarget.closest("form")
        const data = {
          secret: form.secret.value,
          network: form.network.value,
        }
        emit('account#import', data)
    }
  }

  const error = () => {
    return html`
      <div class="error">ERROR: ${state.error.message}</div>
    `
  }

  return html`
    ${state.error ? error() : ''}
    <form class="column center-spaceAround" onsubmit=${onsubmit}>
      <div class="left-icon" onclick=${() => {emit('overlay#done')}}>←</div>
      <textarea name="secret" rows="4" cols="30" placeholder="private key or seed phrase" onkeypress=${keypress}></textarea>
      <div class="row center-spaceAround">
        <select name="network">
          ${networks}
        </select>
        <input type="submit" value="enter">
      </div>
    </form>
  `
}