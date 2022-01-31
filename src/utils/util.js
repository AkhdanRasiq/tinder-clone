import CONFIG from '../static/config.json'

export function strHost() {
  if (CONFIG.connection.port !== '') {
    return CONFIG.connection.protocol + CONFIG.connection.address + CONFIG.connection.port
  }
  return CONFIG.connection.protocol + CONFIG.connection.address
}

export function strWebsocketHost() {
  return CONFIG.websocket.protocol + CONFIG.websocket.address
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
    eventDispatcher('newMessage', { detail: data })
  }
}

export function goToBottom() {
  var element = document.getElementById('messageBodyContainer');
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

export function eventDispatcher(strEventName, data) {
  const eventDispatch = new CustomEvent(strEventName, data);
  window.dispatchEvent(eventDispatch)
}

export function timestampConverter(iTimestamp) {
  return new Date(iTimestamp).toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit', hour12: true })
}
