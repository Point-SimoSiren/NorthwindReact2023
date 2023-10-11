import React, {useState} from "react"
import './App.css'
import CustomerService from './Services/Customer'

// Komponentti saa propsina näyttettävän asiakas-olion CustomerListin
// loopista jossa tätä komponenttia kutsutaan
const Customer = ({customer, setMessage, setIsPositive, 
    setShowMessage}) => {

    // State määritys
    const [showDetails, setShowDetails] = useState(false)


    // Poistofunktio
    const remove = (customer) => {
        let answer = window.confirm("Removing customer " + customer.companyName)
        if (answer === false) {
            return
        }
        CustomerService.remove(customer.customerId)
        .then(data => {
            setMessage(data)
            setIsPositive(true)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
                window.location.reload()
            }, 4000)
        
        })
        .catch(error => {
            setMessage(error.message)
            setIsPositive(false)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
                window.location.reload()
            }, 6000)
        })
      
    }

 return(
     <div>
        <h4 onClick={() => setShowDetails(!showDetails)}>{customer.companyName}</h4>
        {showDetails && 
        <div className="customerDetails">

            <button className="hidebtn"  onClick={() => setShowDetails(!showDetails)}>X</button>
            <h5>{customer.companyName}</h5>
           
            <button>edit</button>
            <button onClick={() => remove(customer)}>delete</button>
           
            <table>
                <thead>
                    <tr>
                        <th>Contact name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{customer.contactName}</td>
                        <td>{customer.address}</td>
                        <td>{customer.city}</td>
                        <td>{customer.country}</td>
                        <td>{customer.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
    </div>
  )
}

export default Customer