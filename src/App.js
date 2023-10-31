import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import VideoHero from "./components/VideoHero";
import { ThemeWrapper } from "./styles";

function App() {

  const [theme, setTheme] = React.useState("light");



  return (
    <ThemeWrapper backgroundColor={'#8E8E8E'}>
      <Navbar />
      <VideoHero />
    </ThemeWrapper>
  );
}

export default App;
