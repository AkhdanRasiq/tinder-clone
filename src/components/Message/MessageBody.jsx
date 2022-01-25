import React from 'react'

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
      <div className='messageBodyContainer'>
        {this.state.arrMessages.map((msg) => (
          <p key={msg.timestamp}>{msg.text}</p>
        ))}
      </div>
    )
  }
}

export default MessageBody
