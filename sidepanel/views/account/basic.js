const html = require('choo/html')
const subSelctor = require('../../components/sub-selector')
const infoPanel = require('./info-panel')

module.exports = function basic (state, emit) {
  // const processData = (e) => {
  //   e.preventDefault();
  //   state.name = e.currentTarget.name.value
  //  }
  const balanceData = state.balanceData || { FIAT: 'USD', balance: '0.00' }

  return html`
    <div id="baseAccount" class="row full-width quarter-height center-spaceAround">
      <div id="basic-account" class="row center-spaceAround">
        <div id="balnceData">
          <div class="sub-title">${balanceData.FIAT}</div>
          <div class="title">${balanceData.balance}</div>
        </div>
      </div>
      <div id="account-actions" class="row center-spaceAround">
        <div class="column center">
          <div class="char-icon">↑</div>
          <div> Send </div>
        </div>
        <div class="column center">
          <div class="char-icon">↓</div>
          <div> Recive </div>
        </div>
        <div class="column center">
          <div class="char-icon">+</div>
          <div> fund </div>
        </div>
      </div>
    </div>
  `
}