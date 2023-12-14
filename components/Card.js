import React from "react"

function Card(props) {
    return(
        <main className="main-container">
            <div> 
                <img className="card-image" src={props.item.imageUrl} />
            </div>
            
            <div>
                <div className="flex">
                <p className="location"> {props.item.location} </p>
                <a href={props.item.googleMapsUrl}> View on Google Maps  </a>
                </div>
                <h2> {props.item.title} </h2>
                <p className="date"> {props.item.startDate} - {props.item.endDate}  </p>
                <p className="description"> {props.item.description} </p>
            </div>
        </main>
    )
}

export default Card