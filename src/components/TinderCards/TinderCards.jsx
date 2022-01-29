import React, { useEffect, useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import * as ADAPTERS from "../../utils/adapters"

import { Replay, Close, Favorite } from '@mui/icons-material'
import { IconButton } from '@mui/material'

function TinderCardsView () {
  const [isCardLoaded, setIsCardLoaded]   = useState(false)
  const [people, setPeople]               = useState([])
  const [currentIndex, setCurrentIndex]   = useState(0)

  const currentIndexRef = useRef(currentIndex)

  useEffect(() => {
    const promise = ADAPTERS.fetchData()

    promise.then((res) => {
      setPeople(res.data)
      setIsCardLoaded(true)
      setCurrentIndex(res.data.length - 1)
    }, (errReason) => {
      console.log(errReason)
      setIsCardLoaded(true)
    })
  }, [])

  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map(() => React.createRef()),
    [people]
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < people.length - 1
  const canSwipe = currentIndex >= 0

  const swiped = (direction, nameToDelete, index) => {
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < people.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className="tinderCards">
      <div className='tinderCards__cardContainer'>
        { !isCardLoaded ? (
          <div className="dot-pulse" />
        ) : (
          <div/>
        )}

        {people.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.imgUrl + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='swipeButtons'>
        <IconButton style={{ backgroundColor: !canSwipe && '#ffffff' }} onClick={() => swipe('left')} className="swipeButtons_left">
          <Close fontSize='large' />
        </IconButton>
        <IconButton style={{ backgroundColor: !canGoBack && '#ffffff' }} onClick={() => goBack()} className="swipeButtons_repeat">
          <Replay fontSize='large' />
        </IconButton>
        <IconButton style={{ backgroundColor: !canSwipe && '#ffffff' }} onClick={() => swipe('right')} className="swipeButtons_right">
          <Favorite fontSize='large' />
        </IconButton>
      </div>
    </div>
  )
}

export default TinderCardsView
