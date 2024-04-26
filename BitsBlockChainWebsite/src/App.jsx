import { useState } from 'react'
import Footer from './Components/Footer'
import TeamComponent from './Components/TeamComponent'
import Header from './Components/Header';
import AboutUs from './about';
import Info from './info';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
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
