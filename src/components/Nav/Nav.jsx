import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  render() {
    return <nav >
            <ul className="nav">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/form">Añade noticia!</Link></li>
        <li className="link"><Link to="/list">Noticias</Link></li>

      </ul>
    </nav>;
  }
}

export default Nav;
