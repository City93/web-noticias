import React, { Component } from "react";
import Card from '../Card'

class ListNews extends Component {
  paintArticles = () => {
    return this.props.newsList.newsList.map((article, i) => <Card info={article} key={i} delete={()=>this.props.delete(i)} key={i}/>)
}
  render() {
    return <div>{this.paintArticles()}</div>;
  }
}

export default ListNews;
