import React, { Component } from "react";
import { Navigate } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import './Form.css'
import Button from '@material-ui/core/Button'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       redirect:false
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const header = event.target.header.value // por referencia
    const description = event.target.description.value
    const img = event.target.img.value
    const topic = event.target.topic.value
    
    // Crear producto
    this.props.createNew(header,description,img,topic)
    this.setState({redirect: true})

  }
  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Navigate to='/list'/>;
     }
    return <form onSubmit={this.handleSubmit} className="formArticle">
              <label htmlFor="name">Header:</label><br/>
              <TextField label='title' type="text" id="header" name="header"/><br />
              <label htmlFor="description">Description:</label><br/>
              <TextField label='description' type='text' id="description" name="description" rows='10'/><br/>
              <label htmlFor="img">Url Foto:</label><br/>
              <TextField label='img' type="url" id="img" name="img"/><br/>
              <label htmlFor="topic">Topic:</label><br/>
              <TextField label='topic' type="text" id="topic" name="topic"/><br/>
              <Button size="small" color="primary" type='submit'>Enviar noticia</Button>

      </form>;
  }
}

export default Form;
