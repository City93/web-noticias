import React, { Component } from "react";

class Card extends Component {


render() {
    const {header,description,img,topic} = this.props.info

    return (
        <div>
            <p>Header:{header}, Description:{description}, Topic: {topic}</p>
                <img src={img} alt={header} className='picture'/>
            {/* <button onClick={this.props.delete}>Borrar</button> */}
        </div>
    )
}
}

export default Card;
