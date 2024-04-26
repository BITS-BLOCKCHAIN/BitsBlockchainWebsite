import { useState } from 'react'
import Footer from './Components/Footer'
import TeamComponent from './Components/TeamComponent'
import Header from './Components/Header';
import AboutUs from './about';
import Info from './info';
import TypingText from "./TypingText";
import "./Typing.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <TypingText
        dynamicTexts={[
          "BITS BlockChain Hub",
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
                <TeamComponent />
            </div>
            <div id="contact-us">
            <Footer />
            </div>
        </>
   
  )
}

export default App
