import './App.css'
import Laskuri from './Laskuri'
import React, {useState} from 'react'
import Posts from './Posts'
import CustomerList from './CustomerList'
import Message from './Message'

const App = () => {

  // App componentin statet
  const [showLaskuri, setShowLaskuri] = useState(false)
  // Statet messagen näyttämistä varten
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)


  return (
    <div className="App">
     
        <h1>Northwind Corporation</h1>

        {showMessage && <Message message={message} isPositive={isPositive} />}
      
        {!showLaskuri && <button onClick={() => setShowLaskuri(true)}>näytä laskuri</button>}
        {showLaskuri && <button onClick={() => setShowLaskuri(false)}>piilota laskuri</button>}

        {showLaskuri && <Laskuri />}

        <CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
        setShowMessage={setShowMessage} />

        <Posts info="Nämä ovat yhtiön sosiaalisen median parhaita pomintoja."
        tervehdys="Hello!" showLaskuri={showLaskuri}
        />
        

    </div>
  )
}

export default App
