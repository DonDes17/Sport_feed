import React, { Component } from 'react';
import { Grid , Card, Header} from 'semantic-ui-react';

import { getAllteamsFromApi } from '../API/thSportDb';
import TeamItem from '../components/TeamItem/TeamItem';

import '../styles/teams.css';


export default class Teams extends Component {
 constructor(props){
  super(props);

    this.state = {
      teamsList : []
    }
 }

 componentDidMount() {
  getAllteamsFromApi()
    .then(data => {
      console.log('teams gen: ', data.teams);
      
      this.setState({
        teamsList: data.teams
      });
    })
    .catch(err => {
      console.log('oops: ' + err);
    })
}

goToDetails = (idTeam) => {
  this.props.history.push(`/details/${idTeam}`);
} 

 
 render() {
  
   const teamsComponents = this.state.teamsList.map((team)=>  (
     <TeamItem 
      key={team.idTeam}
      idTeam={team.idTeam}
      strTeamBadge={team.strTeamBadge}
      strTeam={team.strTeam}
      strStadium={team.strStadium}
      goToDetails={() => this.goToDetails(team.idTeam)}
    /> 
   ))
  
   return (
    <Grid className='teamsGrid'>
      <Header as='h1' className='header'>Liste des équipes</Header>
      <Grid.Row>
        <Grid.Column  width={8}>
          <Card.Group stackable itemsPerRow={3}>
            {teamsComponents}
            </Card.Group> 
        </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}
