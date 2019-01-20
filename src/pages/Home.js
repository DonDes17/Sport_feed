import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react'
import { Animated } from "react-animated-css";

import logo from '../images/logo.png';
import '../styles/home.css';

export default class Home extends Component {

  onSubmit = () => {
    this.props.history.push('/equipes')
  }

  render() {

    return (
      <div className='container'>
      <div className='content'>
        <Image src={logo} size='large' />
        <Animated animationIn="pulse" >
        <h1 style={{color: '#dfbb4c'}} >Toutes Les news Football !</h1>
        </Animated>
      </div>
    </div>
    );
  }
}
