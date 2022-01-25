import CONFIG from '../static/config.json'

export function strHost() {
  if (CONFIG.connection.port !== '') {
    return CONFIG.connection.protocol + CONFIG.connection.address + CONFIG.connection.port
  }
  return CONFIG.connection.protocol + CONFIG.connection.address
}

export function handleGenerateMessage(msg) {
  let content = {
    text        : msg,
    timestamp   : Date.now(),
    user        : loadFromLocalStorage('userID')
  }
  return content
}

export function saveToLocalStorage(strKey, value) {
  localStorage.setItem(strKey, value)
}

export function loadFromLocalStorage(strKey) {
  return localStorage.getItem(strKey)
}

export function handleFilterMessage(data) {
  if (data.user === loadFromLocalStorage('userID'))
    return
  
  else if (data.user) {
    const eventDispatch = new CustomEvent('newMessage', { detail: data });
    window.dispatchEvent(eventDispatch)
  }
}
