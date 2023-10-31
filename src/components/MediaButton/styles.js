import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RoundButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #8E8E8E;
    cursor: pointer;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    &:hover {
        background-color: #d20215;
        transform: scale(1.2);
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    color: #000000';
`;


