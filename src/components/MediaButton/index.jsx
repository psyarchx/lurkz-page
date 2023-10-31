import React from 'react';
import * as S from './styles';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const MediaButton = (props) => {
    const {icon, bgColor, shadowColor} = props;


    return (
        <>
            <S.RoundButton>
                <S.Icon icon={faDiscord} />
            </S.RoundButton>
        </>
    );
}

export default MediaButton;
