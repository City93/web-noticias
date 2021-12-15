import React, { Component } from "react";
import Card from '../Card'

class ListNews extends Component {
  paintArticles = () => {
    return this.props.newsList.newsList.map((article, i) => <Card info={article} key={i} />)
}
  render() {
    console.log(this.props.newsList.newsList[0])
    console.log(this.props.newsList.newsList[1])
    return <div>{this.paintArticles()}</div>;
  }
}

export default ListNews;
