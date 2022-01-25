import axios from 'axios'
import { strHost, saveToLocalStorage, handleFilterMessage } from './util'

import { w3cwebsocket as W3CWebSocket } from "websocket";

const wsSocket = new W3CWebSocket('ws://tinder-backend-clone-24.herokuapp.com');

const axiosInstance = axios.create({
  baseURL: strHost()
})

export async function fetchData() {
  const res = await axiosInstance.get("/tinder/cards")
  if (!res)
    return Promise.reject("No Result!")
  return Promise.resolve(res)

}

export function connectWebsocket() {
  wsSocket.onopen = function (event) {
    console.log('WebSocket Client Connected');
  }

  wsSocket.onmessage = function (event) {
    console.log(event.data)
    const message = JSON.parse(event.data)
    
    if (message.userID)
      saveToLocalStorage('userID', message.userID)
    
    handleFilterMessage(message)
  }

  wsSocket.onclose = function (event) {
    console.log(event)
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
