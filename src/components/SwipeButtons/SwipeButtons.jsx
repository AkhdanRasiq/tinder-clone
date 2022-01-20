import React from 'react'
import '../../assets/css/SwipeButtons.css'
import { Replay, Close, StarRate, Favorite, FlashOn } from '@mui/icons-material'
import { IconButton } from '@mui/material'

function SwipeButtons() {
  const swiped = () => {
    return null
  }

  return (
    <div className='swipeButtons'>
      <IconButton onClick={swiped} className="swipeButtons_repeat">
        <Replay fontSize='large' />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons_left">
        <Close fontSize='large' />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons_star">
        <StarRate fontSize='large' />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons_right">
        <Favorite fontSize='large' />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons_lightning">
        <FlashOn fontSize='large' />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
