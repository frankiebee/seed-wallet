const html = require('choo/html')


module.exports = function settingsView (onclick) {
  return html`
    <img id="gear" class="spin" onclick=${(e) => {
      e.preventDefault()
      onclick(e)
    }} style=" width: 2.5em; height: 2.5em; position: absolute; right: 10px; top: 22px; z-index: 9999;" src="assets/gear.png">
  `
}