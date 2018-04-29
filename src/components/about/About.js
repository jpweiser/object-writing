import React from 'react';
import {Embed, Header} from 'semantic-ui-react';

const About = () => {
  return (<div>
    <Header as='h2'>Object Writing</Header>
    <p>'Object writing is fun!'</p>

    <Header as='h3'>Sense-bound</Header>
    <p>More description...</p>

    <Header as='h3'>Video</Header>
    <p>Here is a video describing the technique from Pat Pattison</p>
    <Embed source='youtube' id='WFZH6Dutrtk'/>
    <Header as='h3'>Resources</Header>
    <p>List of books, websites, etc.</p>
  </div>)

}

export default About;
