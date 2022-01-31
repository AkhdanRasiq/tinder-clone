import React from 'react'

import { loadFromLocalStorage, timestampConverter } from '../../utils/util'

class Chatbox extends React.Component {
  render() {
    return(
      <div className    = {this.props.a_messages.user === loadFromLocalStorage('userID') ? 'chatboxContainer alignRight' : 'chatboxContainer'}>
        <div className  = {this.props.a_messages.user === loadFromLocalStorage('userID') ? 'chatboxCard cardSelf' : 'chatboxCard cardOther'}>
          <p className  = 'chatbox_user'>{this.props.a_messages.user}</p>
          <p className  = 'chatbox_text'>{this.props.a_messages.text}</p>
          <p className  = 'chatbox_time'>{timestampConverter(this.props.a_messages.timestamp)}</p>
        </div>
      </div>
    )
  }
}

export default Chatbox
