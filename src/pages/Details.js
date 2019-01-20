import React, { Component } from 'react';
import { Grid, Segment , Input, Button, Icon } from 'semantic-ui-react';

import { getTeamDetailsFromApi, getAllTeamPlayersFromApi } from '../API/thSportDb';
import TeamDetails from '../components/TeamDetails/TeamDetails';

import '../styles/details.css';

export default  class Details extends Component  { 
  constructor(props) {
    super(props);

    this.state = {
      teamDetails: [],
      teamPlayers: [],
      newPlayer: {
        strPlayer: "",
        strPosition: "",
        dateSigned: ""
      }
    }
  }
 

  componentDidMount() {
    this.getTeamDetails()
    this.getAllPlayers()

  }

  getTeamDetails = () => {
    const idTeam = this.props.match.params.idTeam;
    getTeamDetailsFromApi(idTeam)
      .then(data => {
       
        this.setState({
          teamDetails: data.teams
        });
      })
      .catch(err => {
        console.log('oops: ' + err);
      });
  }

  getAllPlayers = () => {
    const idTeam = this.props.match.params.idTeam;
    getAllTeamPlayersFromApi(idTeam)
    .then(data => {
     
      this.setState({
        teamPlayers  : data.player
      });
    })
    .catch(err => {
      console.log('oops: ' + err);
    });

  }

  displayTeamDetails = () => {
    return this.state.teamDetails.map((team)=>  (
      <TeamDetails 
       key={team.idTeam}
       intFormedYear={team.intFormedYear}
       intStadiumCapacity={team.intStadiumCapacity}
       strDescriptionEN={team.strDescriptionEN}
       strTeamBadge={team.strTeamBadge}
       strTeam={team.strTeam}
       strAlternate={team.strAlternate}
       strStadium={team.strStadium}
       strManager={team.strManager}
     /> 
    ))
  }


  displayTeamPlayers = () => {
    
    return this.state.teamPlayers.map((player)=>  (
      <Segment.Group className='playerListContainer'>
        <div className='divListInputs'>
         <Input style={{width:'30%', paddingRight: '0.3%'}}  type='text' value={ player.strPlayer || 'non communiqué' } placeholder='Nom & Prenom'/>
          <Input style={{width:'30%', paddingRight: '0.3%'}}  type='text' value={ player.strPosition || 'non communiqué' } placeholder='Poste'/> 
          <Input style={{width:'30%'}}  type='text' value={ player.dateSigned || 'non communiqué' } placeholder='Date de signature'/>
          <Button className='button' color='black' type='submit'>
              <Icon  color='green' name='check' size='small' />
          </Button>
          <Button onClick={ () => this.deletePlayer(player.idPlayer) } className='button' color='black' type='submit'>
             <Icon  color='red' name='close' size='small' />
          </Button>
        </div>
      </Segment.Group>
    ))
  }

  onChangeIdentity = (event) => {
    let newPlayer = Object.assign({}, this.state.newPlayer, { strPlayer: event.target.value})
    this.setState({newPlayer})
  }

  onChangePosition = (event) => {
    let newPlayer = Object.assign({}, this.state.newPlayer, { strPosition: event.target.value}) 
    this.setState({newPlayer})
  }

  onChangeDateSigned = (event) => {
    let newPlayer = Object.assign({}, this.state.newPlayer, { dateSigned: event.target.value}) 
    this.setState({newPlayer})
  }

  addPlayer = () => {
      console.log('my new Player: ' , this.state.newPlayer);
     this.setState({
       teamPlayers: [...this.state.teamPlayers, this.state.newPlayer]
     })

    
  }

 

  deletePlayer = (id) => {
      
    const teamPlayers = this.state.teamPlayers.filter(i => i.idPlayer !== id);
    this.setState({teamPlayers: [...teamPlayers]})
  }

  render() {
   

    return (
      <Grid className='detailsTable'>
        <Grid.Row>
          <Grid.Column width={10}>
            {this.displayTeamDetails()}
            <div className='divInputs'>
              <Input style={{width:'30%'}} onChange={ this.onChangeIdentity } ref='myFormRef' value={ this.state.newPlayer.strPlayer } type='text' placeholder='Nom & Prenom'/>
              <Input style={{width:'30%'}} onChange={ this.onChangePosition }  value={ this.state.newPlayer.strPosition } type='text' placeholder='Poste'/> 
              <Input style={{width:'30%'}} onChange={ this.onChangeDateSigned } value={ this.state.newPlayer.dateSigned } type='text' placeholder='Date de signature'/>
              <Button onClick={ () => {
                  this.addPlayer()
                  this.setState({
                    newPlayer: {
                      strPlayer: "",
                      strPosition: "",
                      dateSigned: ""
                    }
                  })
                }}
                color='blue'type='submit'>
                <Icon  color='white' name='add' size='small' />
              </Button>
            </div>
            {this.displayTeamPlayers()}
          </Grid.Column>
        </Grid.Row>
    </Grid>
    );
  }
}
