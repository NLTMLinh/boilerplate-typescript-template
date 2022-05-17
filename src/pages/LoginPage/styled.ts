import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  width: 50rem;
  padding: 4rem 3rem;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  height: fit-content;
  transform: translate(0, -10%);
  box-sizing: border-box;

  button {
    width: 100%;
  }
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
`;
