import React from 'react';
import { Grid, Segment , Header, Button, Icon } from 'semantic-ui-react';

import '../styles/teams.css';

const Teams = () => (
  <Grid className='teamsTable'>
    <Grid.Row>
      <Grid.Column width={13}>
        <Segment inverted color='grey'>
        <Header icon>
      <Icon name='search' />
      We don't have any documents matching your query.
    </Header>
    <Segment.Inline>
      <Button primary>Clear Query</Button>
      <Button>Add Document</Button>
    </Segment.Inline>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


export default Teams;
