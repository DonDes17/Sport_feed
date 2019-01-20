import React, { Component } from 'react'
import { Grid, Image, Segment, Header } from 'semantic-ui-react'

import './teamDetails.css';


export default class TeamDetails extends Component {
     /**
         * intFormedYear = dta de création
         * intStadiumCapacity = capacit stade
         * strDescriptionEN = description
         * strStadium = nom du stade
         * strStadiumThumb = image du stade
         * strAlternate = nom equipe
         */


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
