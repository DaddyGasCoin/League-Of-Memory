import React from "react";


const DisplayCards = (props) => {
    const { cards, handler } = props

    return (
        <div className="container">
            <div className="cards">
                {cards.map((val, index) => {
                    while (index < 12) {
                        return (<div className="card-wrapper">
                            <img src={val.link} key={val.id} className="card" data-id={val.id}
                                onClick={handler}></img>
                            <div className="champName">{val.name.substring(0, val.name.indexOf('.'))}</div>
                        </div>)

                    }
                })}
            </div>
        </div>
    )
}


export default DisplayCards
