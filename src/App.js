import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import Home from './pages/Home';
import Page404 from './pages/Page404';


class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
         <div>
          <Menu className="large inverted pointing secondary" style={{backgroundColor: 'black'}}> >
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div> 
      </div>
    );
  }
}

export default App;
