import axios from 'axios'
import { strHost, saveToLocalStorage, loadFromLocalStorage, handleFilterMessage, strWebsocketHost, eventDispatcher } from './util'

import { w3cwebsocket as W3CWebSocket } from "websocket";

let wsSocket
let wsHeartbeat

const axiosInstance = axios.create({
  baseURL: strHost()
})

export function fetchData() {
  return axiosInstance
  .get("/tinder/cards")
  .then(res => Promise.resolve(res))
  .catch(err => Promise.reject(err))
}

export function connectWebsocket() {
  wsSocket = new W3CWebSocket(strWebsocketHost())

  wsSocket.onopen = function () {
    console.log('WebSocket Client Connected');
    heartbeat()
    eventDispatcher('authorOnline', { detail: { isOnline: true }})
  }

  wsSocket.onmessage = function (event) {
    const message = JSON.parse(event.data)
    eventDispatcher('authorOnline', { detail: { isOnline: true }})

    if (message.userID)
      saveToLocalStorage('userID', message.userID)
    
    handleFilterMessage(message)
  }

  wsSocket.onclose = function (event) {
    console.log(event)
    eventDispatcher('authorOnline', { detail: { isOnline: false }})
    wsRefreshConnection()
  }

  wsSocket.onerror = function (err) {
    console.error(`[ERROR] ${err.message}`)
  }
}

export function onSendWebsocket(data) {
  try {
    let strData = JSON.stringify(data)
    wsSocket.send(strData)
  } catch (err) {
    console.error(`[ERROR] ${err.message}`)
  }
}

export function wsRefreshConnection() {
  clearTimeout(wsHeartbeat)
  connectWebsocket()
}

export function currentWebsocket() {
  return wsSocket
}

function heartbeat() {
  wsSocket.send(JSON.stringify({ userOnline: loadFromLocalStorage('userID') }))
  wsHeartbeat = setTimeout(heartbeat, 1000)
}
