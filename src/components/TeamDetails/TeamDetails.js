import React, { Component } from 'react'
import { Grid, Image, Segment, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import './teamDetails.css';


export default class TeamDetails extends Component {
    
  render() {
    return(
      <Grid className='teamDetailsGrid' celled>
    <Grid.Row>
      <Grid.Column >
      <Header as='h2'  color='grey' attached='top'>
      { this.props.strAlternate ? this.props.strAlternate : this.props.strTeam}
    </Header>
    <Image size='small' src={ this.props.strTeamBadge } centered/>
    <Segment.Group  stackable raised>
    <Segment ><strong className='paddedTag'>Date de Création:</strong> { this.props.intFormedYear || 'non communiqué' } </Segment>
    <Segment><strong className='paddedTag'>Entraîneur:</strong> { this.props.strManager || 'non communiqué'}</Segment>
    <Segment><strong className='paddedTag'>Stade:</strong>{ this.props.strStadium  || 'non communiqué'} </Segment>
    <Segment><strong className='paddedTag'>Capacité du stade:</strong> { this.props.intStadiumCapacity  || 'non communiqué'} </Segment>
    <Segment className='description'>
     { this.props.strDescriptionEN }
    </Segment>
    </Segment.Group>
      </Grid.Column>
    </Grid.Row>
    </Grid>

    );
  }
}



TeamDetails.propTypes = {
  strAlternate: PropTypes.string.isRequired,
  strTeam: PropTypes.string.isRequired,
  strStadium: PropTypes.string.isRequired,
  intStadiumCapacity : PropTypes.string.isRequired,
  strDescriptionEN: PropTypes.string.isRequired
}
