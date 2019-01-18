import React from 'react';
import { Grid } from 'semantic-ui-react';
import TeamItem from '../components/TeamItem';
import '../styles/teams.css';

const Teams = () => (
  <Grid className='teamsTable'>
    <Grid.Row>
      <Grid.Column width={11}>
        <TeamItem />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


export default Teams;
