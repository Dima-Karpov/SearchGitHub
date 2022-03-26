import React from 'react';
import { BackButton, Container } from './styles';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';

import logo from '../../assets/logo.svg';
import back from '../../assets/back.svg';

interface IHeader {
  setError?: (value: string) => void
}

export const Header: React.FC<IHeader> = (props) => {
  const {setError} = props

  function handleBack() {
    setError && setError('')
  }

  return (
    <Container>
      <Fade duration={500}>
        <Slide direction="down">
          <Link to="/">
            <img src={logo} alt="Github Search" />
          </Link>
            <Link to="/">
          <BackButton onClick={handleBack}>
            <img src={back} alt="Back" width="35" />
          </BackButton>
          </Link>
        </Slide>
      </Fade>
    </Container>
  );
}
