import React from 'react';
import './header.scss';
import banner from '../../assets/images/header.png';
import Nav from '../nav/index.js';
import logo from '../../assets/images/logo.png';





export default props => {

    return (
        <div>
           <img src={banner}/>
           <Nav />
           <img src={logo} className="logo center"/>
        
            <p  className="center fancy">We deliver cupcakes for the important events in your life!</p>
            <div className="brown-divider"></div>
        </div>

    );
}