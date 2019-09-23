import React from 'react';
import logo from '../../assets/logo.svg';

import {
  Wrapper,
  Title,
  ImageContainer
} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <ImageContainer>
      <img src={logo} alt="react" />
      </ImageContainer>
      <Title>React Contact Manager</Title>
    </Wrapper>
  )
}
