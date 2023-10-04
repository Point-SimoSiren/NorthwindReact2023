import React, {useState, useEffect} from "react"
import './App.css'
import CustomerService from './Services/Customer'
import Customer from "./Customer"

const CustomerList = () => {

    // State määritys
    const [customers, setCustomers] = useState([])
    const [search, setSearch] = useState("")

    // Use Effect funktio tulee ajetuksi aina alussa kerran
    useEffect(() => {
       CustomerService.getAll() // käytetään services kansiossa olevaa palvelua
       .then(data => setCustomers(data))
    }
    ,[])

return(
    <div className="customers">

        <h2>Customers</h2>

        {/* Hakukenttä jonka muutos muuttaa search nimistä statea */}
        <input onChange={({target}) => setSearch(target.value)} type="text" placeholder="Search by Companyname" />

        {/* Jos data saapunut niin customerit loopataan läpi ja renderöidään */}
        {customers && customers.map(c => {
            let lowerCaseName = c.companyName.toLowerCase()
            if (lowerCaseName.indexOf(search.toLowerCase()) > -1) {
            return(
           <Customer key={c.customerId} customer={c} />
            )
            }
        }
        )}

    </div>
)
}

export default CustomerList
