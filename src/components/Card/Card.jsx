import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import './Card.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



class articleCard extends Component {
    

render() {
    const {header,description,img,topic} = this.props.info

    return (
        <Card className='root'>
        <CardActionArea>
          <img src={img} alt={header} className="imgArticle"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {header}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {description}. Topic: {topic}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={this.props.delete}>
            Borrar noticia
          </Button>
        </CardActions>
      </Card>
    );
    }
}

export default articleCard;
