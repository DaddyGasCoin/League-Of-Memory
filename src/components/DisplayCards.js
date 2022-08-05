import React from "react";

const DisplayCards = (props) => {
    const { cards, handler } = props
    return (
        <div className="container">
            <div className="cards">
                {cards.map((val, index) => {
                    {
                        while (index < 9) {
                            return <div key={index} className="card" data-id={val} onClick={handler}>{val}</div>;
                        }
                    }
                })}
            </div>
        </div>
    )
}

export default DisplayCards
