import React from 'react'

import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import { IconButton } from "@mui/material"

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

  handleMessageToSend = () => {
    const generatedMessage = handleGenerateMessage(this.state.strMessage)
    onSendWebsocket(generatedMessage);

    this.setState({ arrMessages: [...this.state.arrMessages, generatedMessage]})
    this.props.a_messageOnUpdateCallback([...this.state.arrMessages, generatedMessage])

    this.setState({ strMessage: "" })
  }

  handleSendMessage = (event) => {
    if (event.key === 'Enter' && this.state.strMessage !== '')
      this.handleMessageToSend()
  }

  handleBtnSendMessage = (event) => {
    event.preventDefault()
    if (this.state.strMessage !== '')
      this.handleMessageToSend()
  }

  handleTyping = (event) => {
    this.setState({ strMessage: event.target.value });
  }

  render() {
    return (
      <div className    ='messageBottomContainer'>

        <TextField
          fullWidth
          className     ='messageBottom_textfield'
          placeholder   ='Type a message'
          autoComplete  ='off'
          onKeyDown     ={this.handleSendMessage} 
          onChange      ={this.handleTyping}
          value         ={this.state.strMessage}  
        />

        <IconButton onClick={this.handleBtnSendMessage}>
          <SendIcon
            className   ='messageBottom_btnSend'
            fontSize    ='large'
          />
        </IconButton>
      </div>
    )
  }
}

export default MessageBottom
