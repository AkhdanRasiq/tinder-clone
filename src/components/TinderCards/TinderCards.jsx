import React, { useState } from "react"
import "../../assets/css/TinderCards.css"
import TinderCards from "react-tinder-card"

function TtinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://cdn.popbela.com/content-images/post/20210111/elon-musk-usnews-b593d7d5c5a8d929e1076a2386508a17_750x500.jpg'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://koinworks.com/wp-content/uploads/2018/01/orang-terkaya-di-dunia-jeff-bezos.jpg'
    }
  ])

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
            style={{backgroundImage: "url(" + person.url + ")"}}
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