import axios from 'axios'
import { strHost, saveToLocalStorage, loadFromLocalStorage, handleFilterMessage, strWebsocketHost, eventDispatcher } from './util'

import { w3cwebsocket as W3CWebSocket } from "websocket";

let wsSocket    = new W3CWebSocket(strWebsocketHost())
let wsHeartbeat  = {}

const axiosInstance = axios.create({
  baseURL: strHost()
})

export async function fetchData() {
  const res = await axiosInstance.get("/tinder/cards")
  if (!res)
    return Promise.reject("Something went wrong!")
  return Promise.resolve(res)

}

export function connectWebsocket() {
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
  wsSocket = new W3CWebSocket(strWebsocketHost())
  connectWebsocket()
}

function heartbeat() {
  wsSocket.send(JSON.stringify({ userOnline: loadFromLocalStorage('userID') }))
  wsHeartbeat = setTimeout(heartbeat, 1000)
}
