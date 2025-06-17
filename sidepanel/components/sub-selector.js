const html = require('choo/html')


module.exports = function subSelctor ({ context, tabs, defaultSelction, css }, state, render) {
  if (!state[context]) state[context] = {}
  const selected = state[context].selected || defaultSelction
  const size = tabs.length
  const onclick = (e) => {
    e.preventDefault()
    state[context].selected = e.currentTarget.getAttribute("id").split(':')[2]
    render()
   }
  const tabsHtml = tabs.map((tab) => {
    if (!tab) return ''
    const classString = selected === tab.name? 'selected' : ''
    return html`
      <div id= "${context}:tab:${tab.name}" class="${classString}" onclick=${onclick}>${tab.name}</div>
    `
  })
  return html`
    <div class="sub-selector row full-width center-spaceAround">
      ${tabsHtml}
    </div>
  `
}