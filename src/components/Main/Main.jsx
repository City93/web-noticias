import React, { Component } from "react";

import Home from "../Home"
import Form from "../Form"
import ListNews from "../ListNews"


import {Route, Routes} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newsList: [
        { header: "La primera noticia", description: "Todo va bien", img: "www.linux.es" , topic:"Buenas noticias"}
       ]
    }
  }
  createNew = (header, description, img, topic) => {
    const newArticle = {header, description, img, topic}
    this.setState({ lastAdded: newArticle }) // Modifica el estado. Ultimo añadido
    this.setState({ newsList: [...this.state.newsList, newArticle] })
}
  
  render() {
    return <main>
            <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/form" element={<Form createNew={this.createNew}/>} />
              <Route path="/list" element={<ListNews newsList={this.state}/>} />
            </Routes>
    </main>;
  }
}

export default Main;
