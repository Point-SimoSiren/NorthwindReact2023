import React, {useState, useEffect} from "react"
import '../App.css'
import CustomerService from '../Services/Customer'
import Customer from "./Customer"
import CustomerAdd from "./CustomerAdd"

const CustomerList = ({setMessage, setIsPositive, setShowMessage}) => {

    // State määritys
    const [customers, setCustomers] = useState([])
    const [search, setSearch] = useState("")
    const [adding, setAdding] = useState(false)
    //const [reload, setReload] = useState(false)

    // Use Effect funktio tulee ajetuksi aina alussa kerran
    useEffect(() => {
        let token = localStorage.getItem("token") ///////////
        CustomerService.setToken(token) /////////////
       CustomerService.getAll() // käytetään services kansiossa olevaa palvelua
       .then(data => setCustomers(data))
    }
    ,[])

return(
    <div className="customers">

        <h2>Customers</h2>
        {!adding && <button onClick={() => setAdding(true)}>Add new customer</button>}

        {adding && <CustomerAdd setAdding={setAdding}
        setMessage={setMessage} setIsPositive={setIsPositive} 
        setShowMessage={setShowMessage} />}

        <br />
        {/* Hakukenttä jonka muutos muuttaa search nimistä statea */}
        <input onChange={({target}) => setSearch(target.value)} type="text" placeholder="Search by Companyname" />

        {/* Jos data saapunut niin customerit loopataan läpi ja renderöidään */}
        {customers && customers.map(c => {
            let lowerCaseName = c.companyName.toLowerCase()
            if (lowerCaseName.indexOf(search.toLowerCase()) > -1) {
            return(
           <Customer key={c.customerId} customer={c}
           setMessage={setMessage} setIsPositive={setIsPositive} 
        setShowMessage={setShowMessage} />
            )
            }
        }
        )}

    </div>
)
}

export default CustomerList
