import React, {useState} from "react"
import '../App.css'
import UserService from '../Services/User'

const LoginForm = ({setLoggedInUser, setMessage, setIsPositive, 
  setShowMessage}) => {

    // State määritys
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()

    var credentials = {
      userName: userName,
      password: password
  }
  
  UserService.Login(credentials)
  .then(response => {
    if (response.status === 200) {
 
    // Talletetaan tietoja selaimen local storageen (f12 application välilehti)
    localStorage.setItem("username", response.data.username)
    localStorage.setItem("accesslevelId", response.data.accesslevelId)
    localStorage.setItem("token", response.data.token)
    
   setMessage(`Logged in as: ${credentials.userName}`)
   setIsPositive(true)
   setShowMessage(true)
  
   setTimeout(() => {
    setShowMessage(false)
      // Asetetaan app komponentissa olevaan stateen
      setLoggedInUser(response.data.userName)
   }, 3000)

}
  })
    .catch (error => {
        setMessage(error.message)
        setIsPositive(false)
        setShowMessage(true)
        setTimeout(() => {
          setShowMessage(false)
          window.location.reload()
        } , 6000)
    })
    
  }

 return(
     <div className="add-div">
        <h4>Login</h4>
        <form onSubmit={submitForm}>
           
            <input type="text" value={userName} onChange={({target}) => setUserName(target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={({target}) => setPassword(target.value)} placeholder="Password" />
         
            <input type="submit" value="Login" />
        </form>      
    </div>
  )
}

export default LoginForm