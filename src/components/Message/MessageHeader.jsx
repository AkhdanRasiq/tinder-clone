import React from 'react'

import { Avatar } from '@mui/material'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
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

class MessageHeader extends React.Component {
  render() {
    return (
      <div className='messageHeaderContainer'>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar className='messageHeaderAvatar' alt="Avatar Image" src="https://media-exp1.licdn.com/dms/image/C5103AQHB1GRZq-arKg/profile-displayphoto-shrink_400_400/0/1535513202972?e=1648684800&v=beta&t=NFXC30MwzF0Y3zJUgVJk7d3FMAmAHKCdbnESGrOmpYE" />
      </StyledBadge>
      </div>
    )
  }
}

export default MessageHeader
