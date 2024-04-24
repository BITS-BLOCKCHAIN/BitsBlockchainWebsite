import { useState } from 'react'
import Footer from './Components/Footer'
import TeamComponent from './Components/TeamComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TeamComponent/>
    <Footer/>
    </>
  )
}

export default App
