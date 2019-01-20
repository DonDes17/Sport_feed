import React, { Component } from 'react';
import { Grid, Segment , Table, Button, Icon } from 'semantic-ui-react';

import '../styles/details.css';

export default  class Details extends Component  { 
 
 

  render() {
    console.log('mon id: ', this.props.match.params.idTeam);

    return (
      <Grid className='detailsTable'>
      <Grid.Row>
        <Grid.Column width={13}>
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
