import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;

  background-color: #000000;
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
`;