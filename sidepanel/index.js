/**
 * This file is the root file where the app and it's listeners are
 * setup and mounted to the dom
 *
 * */
const choo = require('choo')
const html = require('choo/html')
const initialize = require('./scripts/initialize')
const { createAccountSigners } = require('./scripts/wallets')
const main = require('./views/main')

const app = choo()

app.route('/sidepanel.html', main)

app.use((state, emitter) => {
  const user = {}
  state.loading = true
  initialize(state).then(() => {
    state.loading = false
    emitter.emit('render')
  })
  emitter.on('gear#click', (context) => {
    document.getElementById('gear').classList.toggle('active')
    if (context === 'right-overlay') document.getElementById('right-overlay').classList.toggle('open')
  })
  emitter.on('overlay', (overlay) => {
    state.overlay = overlay
    emitter.emit('render')
  })
  emitter.on('overlay#done', (overlay) => {
    delete state.overlay
    emitter.emit('render')
  })
  emitter.on('account#import', (data) => {
    try {
      if (data.network === 'Ethereum') {
        createAccount(data)
        emitter.emit('overlay#done')
      } else {
        throw new Error('unrecognized network')
      }
    } catch (e) {
      state.error = e
      emitter.emit('render')
    }
  })
})

app.mount('body')
