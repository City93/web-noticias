import React, { Component } from "react";

import { userContext } from "../../context/userContext";

class Home extends Component {

  static contextType = userContext

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value
    console.log(this.context)
    const {updateUser} = this.context
    // Crear producto
    updateUser(name)
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
