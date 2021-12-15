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
        { header: "Deydre lo vuelve a hacer", description: "Otro increible dibujo de la fantástica Deydre, que delicia", img: "https://cdna.artstation.com/p/assets/images/images/044/215/960/large/deydre-alonso-thumbnails.jpg?1639411098" , topic:"Arte"}
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
