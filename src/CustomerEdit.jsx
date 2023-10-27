import React, {useState} from "react"
import './App.css'
import CustomerService from './Services/Customer'

// Propsina välitetään setAdding funktio joka piilottaa formin jos niin halutaan
const CustomerEdit = ({setEditing, setMessage, setIsPositive, 
  setShowMessage, customer}) => {

    // State määritys
  const [CustomerId, setCustomerId] = useState(customer.customerId)
  const [CompanyName, setCompanyName] = useState(customer.companyName)
  const [ContactName, setContactName] = useState(customer.contactName)
  const [ContactTitle, setContactTitle] = useState(customer.contactTitle)
  const [Address, setAddress] = useState(customer.address)
  const [City, setCity] = useState(customer.city)
  const [Country, setCountry] = useState(customer.country)
  const [Region, setRegion] = useState(customer.region)
  const [PostalCode, setPostalCode] = useState(customer.postalCode)
  const [Phone, setPhone] = useState(customer.phone)
  const [Fax, setFax] = useState(customer.fax)

  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()
    var newCustomer = {
      customerId: customer.customerId,
      companyName: CompanyName,
      contactName: ContactName,
      contactTitle: ContactTitle,
      country: Country,
      address: Address,
      city: City,
      region: Region,
      postalCode: PostalCode,
      phone: Phone,
      fax: Fax
  }
  
  CustomerService.update(newCustomer)
  .then(data => {
        setMessage(data)
        setIsPositive(true)
        setShowMessage(true)
        window.scrollTo(0, 0)
        setTimeout(() => {
          setShowMessage(false)
          window.location.reload()
        } , 4000)
    }
    )
    .catch (error => {
        setMessage(error.message)
        setIsPositive(false)
        setShowMessage(true)
        window.scrollTo(0, 0)
        setTimeout(() => {
          setShowMessage(false)
          window.location.reload()
        } , 6000)
    })
    
  }

 return(
     <div className="add-div">
        <h4>Editing Customer {customer.companyName}</h4>
        <form onSubmit={submitForm}>
            <input type="text" disabled value={CustomerId} onChange={({target}) => setCustomerId(target.value)} placeholder="ID" />
            <input type="text" value={CompanyName} onChange={({target}) => setCompanyName(target.value)} placeholder="Company name" />
            <input type="text" value={ContactName} onChange={({target}) => setContactName(target.value)} placeholder="Contact name" />
            <input type="text" value={ContactTitle} onChange={({target}) => setContactTitle(target.value)} placeholder="Contact title" />
            <input type="text" value={Address} onChange={({target}) => setAddress(target.value)} placeholder="Address" />
            <input type="text" value={City} onChange={({target}) => setCity(target.value)} placeholder="City" />
            <input type="text" value={Country} onChange={({target}) => setCountry(target.value)} placeholder="Country" />
            <input type="text" value={Region} onChange={({target}) => setRegion(target.value)} placeholder="Region" />
            <input type="text" value={PostalCode} onChange={({target}) => setPostalCode(target.value)} placeholder="Postal code" />
            <input type="text" value={Phone} onChange={({target}) => setPhone(target.value)} placeholder="Phone" />
            <input type="text" value={Fax} onChange={({target}) => setFax(target.value)} placeholder="Fax" />
            <input type="submit" value="Save" />
            <input type="submit" onClick={() => setEditing(false)} value="back" />
        </form>      
    </div>
  )
}

export default CustomerEdit