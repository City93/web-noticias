import React, { Component } from "react";

class Home extends Component {

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value
    
    // Crear producto
    console.log(name)
}

  render() {
    return <div>
      <h1>IDENTIFÍCATE!</h1>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nombre:</label><br/>
        <input type="text" id="name" name="name"/><br />
        <input type="submit"/>
      </form>

    </div>;
  }
}

export default Home;
