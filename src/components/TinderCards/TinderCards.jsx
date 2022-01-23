import React, { useEffect, useState } from "react"
import "../../assets/css/TinderCards.css"
import "../../assets/css/Animation.css"
import TinderCards from "react-tinder-card"
import * as ADAPTERS from "../../utils/adapters"

function TinderCardsView() {
  const [isCardLoaded, setIsCardLoaded]   = useState(false)
  const [people, setPeople]               = useState([])

  useEffect(() => {
    var promise = ADAPTERS.fetchData()

    promise.then((res) => {
      setPeople(res.data)
      setIsCardLoaded(true)
    }, (errReason) => {
      console.log(errReason)
      setIsCardLoaded(true)
    })
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log("Removing: " + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!")
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
      { !isCardLoaded ? (
        <div className="dot-pulse" />
      ) : (
        <div/>
      )}

      {people.map((person) => (
        <TinderCards
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={(dir) => outOfFrame(person.name)}
        >
          <div
            style={{backgroundImage: "url(" + person.imgUrl + ")"}}
            className="card"
          >
            <h3>{person.name}</h3>
          </div> 
        </TinderCards>
      ))}
      </div>
    </div>
  )
}

export default TinderCardsView