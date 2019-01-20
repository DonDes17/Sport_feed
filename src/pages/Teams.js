import React, { Component } from 'react';
import { Grid , Card} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getAllteamsFromApi } from '../API/thSportDb';
import Details from './Details';
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
   // console.log('mes datas:' , data)
    /* key= idTeam 
       nom= strTeam
       stade= strStadium
       badge= strTeamBadge
    */
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
  //console.log('mon id: ', this.state.teamsList);
  

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
      <Grid.Row>
        <Grid.Column  width={11}>
        <Card.Group stackable itemsPerRow={3}>
          {teamsComponents}
          </Card.Group> 
        </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}
