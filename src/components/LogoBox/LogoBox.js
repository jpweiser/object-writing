import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import './LogoBox.css'

const LogoBox = () => {
  return (
    <div className='logo-bg'>
      <Container>
        <Header inverted className='logo' as='h1'>Object Writing</Header>
        <Header inverted className='subheader' sub>Creative exercises for songwriters, poets, and storytellers</Header>
        </Container>
    </div>
  )
}

export default LogoBox;
