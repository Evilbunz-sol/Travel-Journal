import React from "react"
import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";


function App() {
    const cardData = data.map(function(info){
        return (
            <Card 
                key={info.id}
                item={info}
            />
        )
    })

    
    return (
        <div>
            <Nav /> 
            {cardData}
        </div>
    )
}

export default App