import React from 'react';
import { Button } from 'semantic-ui-react'


import logo from '../images/logo.png';

const Home = () => (

  <div style={{backgroundColor: 'black', height: '100vh', width: '100vw', display: 'flex', justifyContent:'center', alignItems: 'flex-start', paddingTop: '5%'}}>
    <div style={{display: 'flex', flexDirection: 'column',heigh: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{backgroundImage: `url(${logo})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center' , height: '45vh', width: '35vw'}}>
    </div>
    <Button style={{backgroundColor: '#dfbb4c',color: 'white', textAlign: 'center', marginTop: '5%'}}>ENTRER</Button>
    </div>
  </div>
 
)


export default Home;
