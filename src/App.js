import React, {Component} from 'react';
import Write from './components/Write/Write';
import About from './components/about/About';
import {Menu, Segment} from 'semantic-ui-react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'About'
    }
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
  }

  content = () => {
    let _dict = {
      About: <About />,
      Write: <Write />
    }
    return _dict[this.state.activeItem]
  }
  render() {
    const {activeItem} = this.state;
    return (<div className="App">
        <h1>Object Writing</h1>
        <Segment>
          <Menu pointing>
            <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}/>
            <Menu.Item name='Write' active={activeItem === 'Write'} onClick={this.handleItemClick}/>
          </Menu>

          <div>{this.content()}</div>
        </Segment>

      </div>);
  }
}

export default App;
