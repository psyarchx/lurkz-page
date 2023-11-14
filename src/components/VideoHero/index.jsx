import React from 'react';
import * as S from './styles.js';
// import video from '../../assets/34v(1).mp4';
import talon from '../../assets/talon-prestige.png';
import YouTube from 'react-youtube';

const VideoHero = () => {
    const URLVideo = 'https://www.youtube.com/watch?v=MsAz2dcxY8g'
    return (
        <>
            <S.VideoHero >
                <S.VideoIframe
                    src="https://www.youtube.com/embed/03z-kLkyMZw?autoplay=1&mute=1&controls=0&loop=1&playlist=03z-kLkyMZw"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="BackgroundVideo"
                ></S.VideoIframe>
                <S.VideoHeroContent>
                    <S.VideoHeroTitle>Lurkz77</S.VideoHeroTitle>
                    <S.ImageHero src={talon} /> 
                </S.VideoHeroContent>
            </S.VideoHero>
            <S.Overlay />
        </>
    );
}

export default VideoHero;
