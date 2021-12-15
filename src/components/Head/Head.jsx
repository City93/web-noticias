import React, { Component } from "react";
import Nav from '../Nav'

import {userContext} from '../../context/userContext'

class Head extends Component {
  render() {
    return (
      <header>
                <Nav/>
                <userContext.Consumer>
                {({user, logoutUser}) => user ? <>
                <h3>Bienvenido {user}!</h3>
                <button onClick={logoutUser}>Logout</button>
                </> : ('')
                }
                </userContext.Consumer>
      </header>
    )
}
}

export default Head;
