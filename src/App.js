import React, { Component } from 'react'
import Footer from './components/Footer'
import Head from './components/Head'
import Main from './components/Main'

import {userContext} from './context/userContext'

import {BrowserRouter} from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user:"",
       updateUser : this.updateUser,
       logoutUser : this.logoutUser
    }
  }
  updateUser = (user) =>{
    this.setState({user})
  }
  logoutUser = () =>{
    this.setState({user:''})
  }
  

  render() {
    return (
      <div className="App">
      <userContext.Provider value={this.state}>
        <BrowserRouter>
          <Head/>
          <Main/>
        </BrowserRouter>
      </userContext.Provider>
      <Footer/>
    </div>
    );
  }
}
