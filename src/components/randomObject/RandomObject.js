import React, {Component} from 'react';
import superagent from 'superagent';
import {Header, Button} from 'semantic-ui-react';

class RandomObject extends Component {
  constructor() {
    super();
    this.state = {
      object: 'puppy',
      objectLoading: true
    }
  }

  generateObject = () => {
    superagent.get('object/').end((err, res) => {
      let obj = res.text
      if (err) {
        obj = 'dog'
      }
      this.setState({
        object: obj,
        objectLoading: false,
      })
    })
  }

  componentWillMount() {
    this.generateObject();
  }

  handleClick = () => {
    this.generateObject();
  }

  render() {
    return (
      <div>
        <Header sub>Randomly generated object for use in offline exercises</Header>
        <Header>{this.state.object}</Header>
        <Button onClick={this.handleClick}>Go Again</Button>
      </div>
    )
  }
}

export default RandomObject;
