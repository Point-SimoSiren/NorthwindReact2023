import './App.css'
import Laskuri from './Laskuri'
import React, {useState} from 'react'
import Posts from './Posts'

const App = () => {

  // App componentin state
  const [showLaskuri, setShowLaskuri] = useState(false)

  return (
    <div className="App">
     
        <h1>Northwind Corporation</h1>
      
        {!showLaskuri && <button onClick={() => setShowLaskuri(true)}>näytä laskuri</button>}
        {showLaskuri && <button onClick={() => setShowLaskuri(false)}>piilota laskuri</button>}

        {showLaskuri && <Laskuri />}

        <Posts info="Nämä ovat yhtiön sosiaalisen median parhaita pomintoja."
        tervehdys="Hello!" showLaskuri={showLaskuri}
        />
        

    </div>
  )
}

export default App
