import React, { Component } from 'react';

import { Button, Image } from 'semantic-ui-react'
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
          <Button 
            size='medium'
            className='animated infinite pulse'
            style={{
              backgroundColor: '#dfbb4c',
              color: 'white', 
              textAlign: 'center',
              fontSize: '13px',
              border: 'none',
              borderRadius: '5px',
              minHeight: '30px',
              minWidth: '100px',
              padding: '1.5%',
              marginTop: '-4%'
            }}
            onClick={this.onSubmit}
          >
          ENTRER
          </Button>
        </Animated>
      </div>
    </div>
    );
  }
}
