import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


import  Home  from './pages/Home';
import Details from './pages/Details';
import Page404 from './pages/Page404';


class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
         <div >
          <Menu className="large inverted pointing secondary" style={{backgroundColor: 'black', height: '30% !important'}}> 
            <Menu.Item 
              name='home' 
              active={activeItem === 'home'} 
              onClick={this.handleItemClick}
              >
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              name='détails'
              active={activeItem === 'détails'}
              onClick={this.handleItemClick}
            >
              <Link to="/details">Détails</Link>
            </Menu.Item>
          </Menu>
        </div> 
        <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/details' component={Details} />
        <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
