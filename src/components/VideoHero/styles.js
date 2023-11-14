import styled from 'styled-components';

// make a componenet using <iframe> tag that plays a video as if it was a background video similiar to what <video> componenent does
// https://www.w3schools.com/howto/howto_css_fullscreen_video.asp

export const VideoIframe = styled.iframe`
  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  min-width: 140vw;
  min-height: 80%;
  pointer-events: none;

`;  

export const VideoHero = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  top: 

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    z-index: -1;
  }
`;

export const VideoHeroContent = styled.div`
    position: absolute;
    top: 10%;
    width: 100%;
    height: 100%;
    z-index: 1;
    margin: 0 120px; 
`;

export const VideoHeroTitle = styled.h1`
    font-size: 3rem;
    color: #fff;
    text-align: left;
    margin-bottom: 1rem;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.5) 100%);
    pointer-events: none;
`;

export const ImageHero = styled.img`
  position: absolute; /* Use 'absolute' to place it in the corner of the screen */
  top: 0;
  left: 0;
  width: 1600px; /* Set the width as needed */
  height: 100vh; /* Set the height to match the viewport height */
  object-fit: cover; /* Crop the image while maintaining aspect ratio */
  z-index: 1233;
  transform: scaleX(-1); /* Flip the image horizontally if needed */
`;
