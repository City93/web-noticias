import React, { Component } from "react";

import Home from "../Home"
import Form from "../Form"
import ListNews from "../ListNews"

import axios from "axios";
import './Main.css'


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
  deleteNew = i => {
    const article = this.state.newsList.filter((article, j) => j !== i)
    this.setState({ newsList: article })
}

componentDidMount(){
  const getFetch = async () =>{
    try{

      await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=tn8VDYGo1xSPrEqLqbaRmEXMjM0YSzkq').then((res)=>{
       const allArticles = res.data.results
       console.log(allArticles)
       const allInfo = allArticles.map((article)=> {
         try{
           return {
            header: article.title,
            description: article.abstract,
            img: article.media[0]["media-metadata"][2].url,
            topic: article.section
         }} catch (err){
           console.log(err)
         }
         } )
       console.log(allInfo.slice(0,5))
        // const articleData = {
        //   header: res.data.results.title,
        //   description: res.data.results.abstract,
        //   img: res.data.results.media[0]["media-metadata"][2].url,
        //   topic: res.data.results.section
        // }
    
        this.setState({ newsList: [...this.state.newsList, ...allInfo.slice(0,5)] })
      })
    } catch(err){
      console.log('esto es error ' + err)
    }

  }
  getFetch()
}
  
  render() {
    return <main className="main">
            <Routes className>
              <Route path="/" element={<Home/>} exact />
              <Route path="/form" element={<Form createNew={this.createNew}/>} />
              <Route path="/list" element={<ListNews newsList={this.state} delete={this.deleteNew} />}/>
            </Routes>
    </main>;
  }
}

export default Main;
