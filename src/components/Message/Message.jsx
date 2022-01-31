import React, { Component } from 'react'
import { connectWebsocket } from '../../utils/adapters'

import MessageHeader from '../Message/MessageHeader'
import MessageBody from '../Message/MessageBody'
import MessageBottom from '../Message/MessageBottom'

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrMessages: []
    }
  }

  componentDidMount = () => {
    connectWebsocket()
    window.addEventListener("newMessage", this.handleEventNewMessage);
  }

  componentWillUnmount() {
    window.removeEventListener("newMessage", this.handleEventNewMessage);
  }

  handleEventNewMessage = (event) => {
    this.setState({ arrMessages: [...this.state.arrMessages, event.detail] })
  }

  handleMessagesUpdate = (event) => {
    this.setState({ arrMessages: event })
  }

  render() {
    return (
      <div className="messageContainer">
        <MessageHeader />
        <MessageBody
          a_arrMessages             = {this.state.arrMessages}
        />

        <MessageBottom
          a_arrMessages             = {this.state.arrMessages}
          a_messageOnUpdateCallback = {this.handleMessagesUpdate}
        />
      </div>
    )
  }
}

export default Message
