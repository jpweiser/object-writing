import React, {Component} from 'react';
import {About, Write, LogoBox, RandomObject} from './components';
import {Menu, Container, Visibility} from 'semantic-ui-react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'About',
      menuFixed: false
    }
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
  }

  content = () => {
    let _dict = {
      About: <About/>,
      Write: <Write/>,
      'Random Object': <RandomObject/>
    }
    return _dict[this.state.activeItem]
  }

  stickTopMenu = () => this.setState({menuFixed: true})

  unStickTopMenu = () => this.setState({menuFixed: false})

  render() {
    const {activeItem} = this.state;
    return (<div className="App">

      <LogoBox/>

      <Visibility onTopPassed={this.stickTopMenu} onTopVisible={this.unStickTopMenu} once={false}>
        <Menu inverted borderless fixed={this.state.menuFixed && 'top'} pointing="pointing">
        {this.state.menuFixed && <Menu.Item className='lilLogo' header name='Object Writing:' />}
        <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}/>
        <Menu.Item name='Write' active={activeItem === 'Write'} onClick={this.handleItemClick}/>
        <Menu.Item name='Random Object' active={activeItem === 'Random Object'} onClick={this.handleItemClick}/>
      </Menu>
      </Visibility>
      <Container className='AppContent'>
        <div>{this.content()}</div>
      </Container>
    </div>);
  }
}

export default App;
