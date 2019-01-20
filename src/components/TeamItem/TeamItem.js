import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Card , Button, Image} from 'semantic-ui-react';

import './teamItem.css';


export default class TeamItem  extends Component {

  

 onReceiveDetails = () => {
  this.props.goToDetails() 
 }
 

  
 render() {

  return(
    <Card className='itemContainer'>
      <Image size='medium' src={ this.props.strTeamBadge } />
      <Card.Content className='itemContent'>
        <Card.Header>{ this.props.strTeam }</Card.Header>
        <Card.Meta className='itemMeta'>{ this.props.strStadium }</Card.Meta>
      </Card.Content>
      <Card.Content className='itemSubContent' extra>
        <Button
          icon='group'
          label={{ as: 'a', basic: true, content: 'Détails', color:'black' }}
          labelPosition='right'
          color='black'
          onClick={() => this.onReceiveDetails()}
        />
      </Card.Content>
    </Card>   
  );
 }
}


TeamItem.propTypes = {
  strTeamBadge: PropTypes.string.isRequired,
  strTeam: PropTypes.string.isRequired,
  strStadium: PropTypes.string.isRequired,
  goToDetails : PropTypes.func.isRequired 
}
