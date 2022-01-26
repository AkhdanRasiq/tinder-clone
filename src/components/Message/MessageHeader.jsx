import React from 'react'

import { Avatar } from '@mui/material'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'

const StyledBadgeOnline = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    right: 10,
    bottom: 15,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '100%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const StyledBadgeOffline = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#b70000',
    color: '#b70000',
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    right: 10,
    bottom: 15,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  }
}));

class MessageHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false
    }
  }

  componentDidMount() {
    window.addEventListener("authorOnline", this.handleEventStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("authorOnline", this.handleEventStatus);
  }

  handleEventStatus = (event) => {
    this.setState({ isOnline: event.detail.isOnline })
  }

  render() {
    return (
      <div className='messageHeaderContainer'>
        {this.state.isOnline ?
          <StyledBadgeOnline
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar className='messageHeaderAvatar' alt="Avatar Image" src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" />
          </StyledBadgeOnline>
        :
          <StyledBadgeOffline
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar className='messageHeaderAvatar' alt="Avatar Image" src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" />
          </StyledBadgeOffline>
        }
      </div>
    )
  }
}

export default MessageHeader
