const html = require('choo/html')


module.exports = function firstTimeFlow (state) {
  const processData = (e) => {
    e.preventDefault();
    state.name = e.currentTarget.name.value
   }
  return html`
    <div class='center-spaceAround column half-height'>
      <div id='greeting'>Wellcome To your seed wallet!</div>
      <form class='center column half-height' onsubmit=${processData}>
        <label>
          What should i call you?
        </label>
        <input type="text" id="name" autocomplete="on"/>
        <input type="submit" name="submit" value="↣">
      </form>
    </div>
  `
}