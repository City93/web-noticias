import React, { Component } from "react";
import './Card.css'

class Card extends Component {


render() {
    const {header,description,img,topic} = this.props.info

    return (
        <div>
            <h1>{header}</h1><br/>
            <h2>{description}</h2><br/>        
            <img src={img} alt={header} className='picture'/>
            <p>{topic}</p>
            {/* <button onClick={this.props.delete}>Borrar</button> */}
        </div>
    )
}
}

export default Card;
