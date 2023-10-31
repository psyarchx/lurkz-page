import React from 'react';
import * as S from './styles';
import PinkFox from '../../assets/red_sleepy_foxxo_FLIP_REDDER.png'
import MediaButton from '../MediaButton/index';

const Navbar = () => {
    return (
        <S.NavWrapper>
            <S.ContentWrapper>
                <S.NavIcon icon={PinkFox}/>
                <S.ButtonsWrapper>
                    <MediaButton bgColor={'#FFFF'} shadowColor={'#FFFF'}/>
                    <MediaButton bgColor={'#FFFF'} shadowColor={'#FFFF'}/>
                    <MediaButton bgColor={'#FFFF'} shadowColor={'#FFFF'}/>
                </S.ButtonsWrapper>
            </S.ContentWrapper>
        </S.NavWrapper>
    );
};

export default Navbar;
