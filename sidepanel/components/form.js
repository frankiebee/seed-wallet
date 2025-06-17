export function form({state, emit, onsubmit, inputs}) {
  const onsubmitBase = () => {
    emit.preventDefault();
    return onsubmit()
  }
  const inputsAndLables = Object.keys(inputs).reduce((agg, key) => {
    if (inputs[key]) {
      let lable = ''
      if (inputs[key].label) lable = `<label for="key">${inputs[key].label}</label>`
      return agg.concat(lable, `<input id="${inputs[key].id}" type="text" name="name" value=${state.name || ''} />`)

    }
    return agg
  }, '')

  return html`
    <form onsubmit=${onsubmitBase}>
      <label for="name">Your name:</label>
      <input id="name" type="text" name="name" value=${state.name || ''} />
      <button type="submit">Submit</button>
    </form>
  `;
};