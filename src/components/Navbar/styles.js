import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const NavWrapper = styled.nav`
    background-color: #212121;
    min-height: 120px;
`;

export const NavIcon = styled.div`
    background-image: url(${props => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    height: 80px;
    width: 80px;
    animation: ${rotateAnimation} 5s linear infinite;
`;

export const ContentWrapper = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 120px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
