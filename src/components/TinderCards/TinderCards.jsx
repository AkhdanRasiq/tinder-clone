import React, { useEffect, useState } from "react"
import "../../assets/css/TinderCards.css"
import TinderCards from "react-tinder-card"
import * as ADAPTERS from "../../utils/adapters"

function TtinderCards() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    var promise = ADAPTERS.fetchData()

    promise.then((res) => {
      setPeople(res.data)
    }, (errReason) => {
      console.log(errReason)
    })
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log("Removing: " + nameToDelete)
    // setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!")
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
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

export default TtinderCards