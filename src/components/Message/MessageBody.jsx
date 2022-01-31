import React from 'react'
import Chatbox from './Chatbox'

import { goToBottom } from '../../utils/util'
import { currentWebsocket } from '../../utils/adapters'

class MessageBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arrMessages: []
    }
  }

  componentDidMount = () => {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.a_arrMessages !== prevProps.a_arrMessages) {
      this.setState({ arrMessages: this.props.a_arrMessages })
    }
    if(currentWebsocket().readyState === WebSocket.OPEN)
      goToBottom()
  }

  handleResize = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    goToBottom()
  }

  render() {
    return (
      <div className='messageBodyContainer' id='messageBodyContainer'>
        {this.state.arrMessages.map((msg) => (
          <Chatbox
            key={msg.timestamp}
            a_messages={msg}
          />
        ))}
      </div>
    )
  }
}

export default MessageBody
