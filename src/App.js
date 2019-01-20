import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import  Home  from './pages/Home';
import Teams from './pages/Teams';
import Details from './pages/Details';
import Page404 from './pages/Page404';



class App extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <div className="app">
        <div >
          <Menu className="huge inverted pointing secondary" style={{backgroundColor: 'black'}}  > 
            <Menu.Item 
              name='home' 
              active={activeItem === 'home'} 
              onClick={this.handleItemClick}
              >
              <Link to="/">Accueil</Link>
            </Menu.Item>
            <Menu.Item
              name='teams'
              active={activeItem === 'teams'}
              onClick={this.handleItemClick}
            >
              <Link to="/equipes">Equipes</Link>
            </Menu.Item>
            <Menu.Item
              name='details'
              active={activeItem === 'details'}
              onClick={this.handleItemClick}
            >
              <Link to="/details">Détails</Link>
            </Menu.Item>
          </Menu>
        </div> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/equipes' component={Teams} />
          <Route  path='/details/:idTeam' component={Details} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
