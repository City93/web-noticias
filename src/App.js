import React, { Component } from 'react'
import Footer from './components/Footer'
import Head from './components/Head'
import Main from './components/Main'

import {BrowserRouter} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Head/>
        <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
    );
  }
}
