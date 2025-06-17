const html = require('choo/html')


module.exports = function rightOverlay ({ context, items }, state, emit) {
  if(!state[context]) state[context] = {}
  const onclick = (e) => {
    e.preventDefault();
    state[context].selected = e.currentTarget.getAttribute("id").split(':')[2]
  }
  const itemsHtml = (items || []).map((item) => {
    if (!item) return ''
    return html`
      <div id= "${context}:item:${item.name}" class="${item.classString}" onclick=${item.onclick || onclick}>${item.name}</div>
    `
  })

  return html`
    <div id='right-overlay'>
      ${itemsHtml}
    </div>
  `
}