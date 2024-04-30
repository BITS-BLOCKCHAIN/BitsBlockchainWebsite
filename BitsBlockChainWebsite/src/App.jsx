import './Css/striper.css';
import { useState } from 'react'
import Footer from './Components/Footer'
import TeamComponent from './Components/TeamComponent'
import Header from './Components/Header';
import AboutUs from './Components/about';
import Info from './Components/info';
import TypingText from "./Components/TypingText";
import "./Css/Typing.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <TypingText
        dynamicTexts={[
          "BITS BlockChain Club",
          "The World of Web3 ",
          "The Crypto Age",
        ]}
      />
    <div id="about-us">
                <AboutUs />
            </div>
            <div id="info">
                <Info/>
            </div>
            <div id="our-team">
               <h1 className="text-3xl striper-font text-center">Meet Our Team</h1>
                <TeamComponent />
            </div>
            <div id="contact-us">
            <Footer />
            </div>
        </>
   
  )
}

export default App;
