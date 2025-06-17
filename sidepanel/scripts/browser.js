

const storage = {
  local: chrome.storage.local
}

const shortHands = {
  db: {
    get: (...args) => chrome.storage.local.get(...args),
    set: (...args) => chrome.storage.local.set(...args),
  }
}

module.exports = {
  storage,
  shortHands,
}