import './App.css'
import Laskuri from './Laskuri'
import React, {useState, useEffect} from 'react' ///////////
import Posts from './Posts'
import CustomerList from './customers/CustomerList'
import UserList from './users/UserList'
import Message from './Message'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm'


const App = () => {

  // App componentin statet
  // Statet messagen näyttämistä varten
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)
const [loggedInUser, setLoggedInUser] = useState("") //////////////

useEffect(() => {
  let storedUser = localStorage.getItem("username")
  if (storedUser != null) {
    setLoggedInUser(storedUser)
  }
} , [])
 

  return (
    <div className="App">
      <Router>
      
      {loggedInUser != "" &&
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href='/customers'>Customers</Nav.Link>
                <Nav.Link href='/posts'>Some higlights</Nav.Link>
                <Nav.Link href='/users'>Users</Nav.Link>
                <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
            </Nav>
          </Navbar>}
                        
        <h1>Northwind Corporation</h1>

        {loggedInUser == "" && <LoginForm setIsPositive={setIsPositive} setMessage={setMessage}
        setShowMessage={setShowMessage} setLoggedInUser={setLoggedInUser} />}

        {showMessage && <Message message={message} isPositive={isPositive} />}

        <Routes>
          <Route path="/customers"
          element={<CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>

          <Route path="/users"
          element={<UserList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>
          
          <Route path="/posts"
          element={<Posts info="Nämä ovat yhtiön sosiaalisen median parhaita pomintoja."
          tervehdys="Hello!"/>}>
          </Route>

          <Route path="/laskuri" 
          element={<Laskuri />}>
        </Route>
        
        </Routes>
      </Router>
    </div>
  )
}

export default App
