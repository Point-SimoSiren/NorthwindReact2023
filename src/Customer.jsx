import React, {useState} from "react"
import './App.css'
import CustomerService from './Services/Customer'

// Komponentti saa propsina näyttettävän asiakas-olion CustomerListin
// loopista jossa tätä komponenttia kutsutaan
const Customer = ({customer}) => {

    // State määritys
    const [showDetails, setShowDetails] = useState(false)


 return(
     <div>
        <h4>{customer.companyName}</h4>
        {showDetails && 
        <div className="customerDetails">
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
    </div>
  )
}

export default Customer