import React, {useState} from "react"
import '../App.css'
import UserService from '../Services/User'

// Propsina välitetään setAdding funktio joka piilottaa formin jos niin halutaan
const UserAdd = ({setAdding, setMessage, setIsPositive, 
  setShowMessage}) => {

    // State määritys
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [accessLevelId, setAccessLevelId] = useState(0);

  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()

    if (password.length < 8)
    {
      alert("Password must be at least 8 characters.")
      return
    }

    var newUser = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
      phone: phone,
      accessLevelId: accessLevelId
  }
  
  UserService.addNew(newUser)
  .then(data => {
        setMessage(data)
        setIsPositive(true)
        setShowMessage(true)
        setTimeout(() => {
          setShowMessage(false)
          //window.location.reload()
        } , 4000)
    }
    )
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
        <h4>Adding new User</h4>
        <form onSubmit={submitForm}>
            <input type="text" value={firstName} onChange={({target}) => setFirstName(target.value)} placeholder="First name" />
            <input type="text" value={lastName} onChange={({target}) => setLastName(target.value)} placeholder="Last name" />
            <input type="text" value={userName} onChange={({target}) => setUserName(target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={({target}) => setPassword(target.value)} placeholder="Password" />
            <input type="text" value={phone} onChange={({target}) => setPhone(target.value)} placeholder="Phone" />
            <input type="number" value={accessLevelId} onChange={({target}) => setAccessLevelId(target.value)} placeholder="Access level" />

            <input type="submit" value="Save" />
            <input type="submit" onClick={() => setAdding(false)} value="back" />
        </form>      
    </div>
  )
}

export default UserAdd