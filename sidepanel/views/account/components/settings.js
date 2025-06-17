const html = require('choo/html')
const rightOverlay = require('../../../components/right-overlay-menu')

const context = 'account-settings'

module.exports = function settings (state, emit) {
  if (!state[context]) state[context] = {}
  // const processData = (e) => {
  //   e.preventDefault();
  //   state.name = e.currentTarget.name.value
  //  }
  const items = [
    {
      name: 'Import Account',
      onclick: () => {
        emit('overlay', 'accountImport')
      },
    },
  ]

  const sub = rightOverlay({
    context,
    items,
  }, state, () => emit('render'))


  return html`
    <div>
      ${sub}
    </div>
  `
}