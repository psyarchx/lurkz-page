import React from 'react';
import * as S from './styles.js';
import video from '../../assets/34v(1).mp4';
import talon from '../../assets/talon-prestige.png';

const VideoHero = () => {
    return (
        <>
            <S.VideoHero >
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
                {/* <S.VideoHeroContent>
                    {/* <S.VideoHeroTitle>Lurkz77</S.VideoHeroTitle> */}
                    {/* <S.ImageHero src={talon} /> 
                </S.VideoHeroContent>*/}
            </S.VideoHero>
            {/* <S.Overlay /> */}
        </>
    );
}

export default VideoHero;
