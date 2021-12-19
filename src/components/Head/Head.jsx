import React, { Component } from "react";
import Nav from '../Nav'
import Button from '@material-ui/core/Button'

import {userContext} from '../../context/userContext'

class Head extends Component {
  render() {
    return (
      <header>
                <Nav/>
                <userContext.Consumer>
                {({user, logoutUser}) => user ? <>
                <h3>Bienvenido/a {user}!!!</h3>
                <Button variant='contained' color='primary' onClick={logoutUser}>Logout</Button>
                <hr></hr>
                </> : ('')
                }
                </userContext.Consumer>
      </header>
    )
}
}

export default Head;
