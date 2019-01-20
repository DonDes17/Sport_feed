import React, { Component } from 'react';
import { Grid, Segment , Table, Button, Icon } from 'semantic-ui-react';

import { getTeamDetailsFromApi, getAllTeamPlayersFromApi } from '../API/thSportDb';
import TeamDetails from '../components/TeamDetails/TeamDetails';
import '../styles/details.css';

export default  class Details extends Component  { 
  constructor(props) {
    super(props);

    this.state = {
      teamDetails: [],
      teamPlayers: []
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
        console.log('details team: ', data.teams);
       
        /**
         * intFormedYear = dta de création
         * intStadiumCapacity = capacit stade
         * strDescriptionEN = description
         * strStadium = nom du stade
         * strStadiumThumb = image du stade
         * strAlternate = nom equipe
         */
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
      console.log('players team: ', data.player);
      
       /**
       * strPosition = psote
       * dateSigned = date de signature
       * strPlayer = nom du joueur
       * strNationality = nationnalité
       */

      this.setState({
        teamsList: data.teams
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

  render() {
    console.log('mon id: ', );

    return (
      <Grid className='detailsTable'>
     
      <Grid.Row>
        <Grid.Column  width={10}>
        {this.displayTeamDetails()}
          <Table  celled selectable inverted >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Button icon labelPosition='left' size='small'>
                    <Icon color='green' name='user' /> 
                      Add User
                  </Button>
                  <Button icon labelPosition='left' size='small'>
                    <Icon  color='blue' name='edit' />
                      Approve
                  </Button>
                  <Button icon labelPosition='left' size='small'>
                  <Icon color='red' name='remove' />
                     Approve All
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}
