import React, { useState, useEffect } from "react";
import DisplayCards from "./components/DisplayCards";


const App = () => {
  const [score, setScore] = useState(0)
  const [cards, setOrder] = useState((Array.from(Array(13).keys())))
  const [usedItems, AddUsedItems] = useState([]);

  useEffect(() => {

    randomizeOrder()
    setOrder([...cards])
  }, [usedItems])

  //shuffle cards and change state
  function randomizeOrder() {
    let currentIndex = cards.length, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }

    setOrder([...cards])
  }

  function validateTurn(event) {
    const target = event.target.dataset.id;
    if (!usedItems.includes(target)) {
      setScore(score + 1)
    }
    usedItems.push(target)
    AddUsedItems([...usedItems])
  }

  return (
    <>
      <div>{score}</div>
      <DisplayCards cards={cards} handler={validateTurn} />
    </>


  )
}

export default App;
