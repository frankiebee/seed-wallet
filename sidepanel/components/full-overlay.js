const html = require('choo/html')


module.exports = function fullOverlay ({ view }, state, emit) {
  return html`
    <div id='full-overlay' class= "">
      <div id='inner-overlay-view'>
        ${view(state, emit)}
      </div>
    </div>
  `
}