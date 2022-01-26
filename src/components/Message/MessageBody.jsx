import React from 'react'
import Chatbox from './Chatbox'

class MessageBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arrMessages: []
    }
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.a_arrMessages !== prevProps.a_arrMessages)
      this.setState({ arrMessages: this.props.a_arrMessages })
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
