import React, { Component } from 'react'
import { Segment,Button, Icon, Input} from 'semantic-ui-react'

import './teamPlayers.css';


export default class TeamPlayers extends Component {
  
  
  
  render() {
    return(
     
      <div className='divListInputs'>
         <Input style={{width:'30%', paddingRight: '0.3%'}}  type='text' value={ this.props.strPlayer || 'non communiqué' } placeholder='Nom & Prenom'/>
          <Input style={{width:'30%', paddingRight: '0.3%'}}  type='text' value={ this.props.strPosition || 'non communiqué' } placeholder='Poste'/> 
          <Input style={{width:'30%'}}  type='text' value={ this.props.dateSigned || 'non communiqué' } placeholder='Date de signature'/>
         
     </div>
   
    );
  }
}

