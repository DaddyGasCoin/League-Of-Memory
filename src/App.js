import React, { useState, useEffect } from "react";
import DisplayCards from "./components/DisplayCards";
import uniqid from "uniqid";
import DisplayHeader from "./components/DisplayHeader";
import DisplayScores from "./components/DisplayScores";


//import all images
function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./components/imgs', false, /\.jpg/));
const keys = Object.keys(images);


//array for cards state
let arr = []
keys.forEach(element => {
  arr.push({ id: uniqid(), link: images[element], name: element })
});

const App = () => {
  const [score, setScore] = useState(0)
  const [maxScore, setMax] = useState(0)
  const [cards, setOrder] = useState(arr)
  const [usedItems, AddUsedItems] = useState([])

  useEffect(() => {
    randomizeOrder()
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

      usedItems.push(target)
      AddUsedItems([...usedItems])
    }
    // reset game
    else {
      setScore(0)
      AddUsedItems([])
    }

    if (maxScore <= score) {
      setMax(maxScore + 1)
    }

  }

  return (
    <>
      <DisplayHeader />
      <DisplayScores current={score} max={maxScore} />
      <DisplayCards cards={cards} handler={validateTurn} />
    </>
  )
}

export default App;
