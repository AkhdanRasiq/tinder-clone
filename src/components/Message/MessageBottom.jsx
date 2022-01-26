import React from 'react'

import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import { onSendWebsocket } from '../../utils/adapters'
import { handleGenerateMessage } from '../../utils/util'

class MessageBottom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strMessage: "",
      arrMessages: []
    }
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.a_arrMessages !== prevProps.a_arrMessages)
      this.setState({ arrMessages: this.props.a_arrMessages })
  }

  handleSendMessage = (event) => {
    if (event.key === 'Enter' || event.target.id === 'btnSend') {
      const element = document.getElementById('messageBottom_textfield');
      element.focus()

      const generatedMessage = handleGenerateMessage(this.state.strMessage)
      onSendWebsocket(generatedMessage);

      this.setState({ arrMessages: [...this.state.arrMessages, generatedMessage]})
      this.props.a_messageOnUpdateCallback([...this.state.arrMessages, generatedMessage])

      this.setState({ strMessage: "" })
    }
  }

  handleTyping = (event) => {
    this.setState({ strMessage: event.target.value });
  }

  render() {
    return (
      <div className  ='messageBottomContainer'>

        <TextField
          fullWidth
          className   ='messageBottom_textfield'
          id          ='messageBottom_textfield'
          placeholder ='Type a message'
          onKeyDown   ={this.handleSendMessage} 
          onChange    ={this.handleTyping}
          value       ={this.state.strMessage}  
        />

        <SendIcon
          id          ='btnSend'
          className   ='messageBottom_btnSend'
          fontSize    ='large'
          onClick     ={this.handleSendMessage}
        />
      </div>
    )
  }
}

export default MessageBottom
