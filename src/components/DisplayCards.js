import React from "react";


const DisplayCards = (props) => {
    const { cards, handler } = props
    return (
        <div className="container">
            <div className="cards">
                {cards.map((val, index) => {

                    while (index < 9) {
                        return <img src={val.name} key={val.id} className="card" data-id={val.id} onClick={handler}></img>;
                    }

                })}
            </div>
        </div>
    )
}

export default DisplayCards
