import React from 'react';
import { Item , Header, Button, Image} from 'semantic-ui-react';

const text = 'blablbalbalblablabllablalblablb'

const TeamItem = () => (

    <Item style={{background: 'grey',display:'flex',alignItems: 'center'}} link >
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content style={{height: '20%', display:'flex', flexDirection: 'row', justifyContent: 'space-around'}} link >
        <Item.Header>Content A</Item.Header>
        <Item.Description>{text}</Item.Description>
        <Item.Extra>
          <Button floated='right'>Détails</Button>
        </Item.Extra>
      </Item.Content>
    </Item>

);


export default TeamItem;
