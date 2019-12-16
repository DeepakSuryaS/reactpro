import React, { useState } from "react"

function App() {
  const [ inputData, setInputData ] = useState({firstName: '', lastName: ''})
  const [ contactsData, setContactsData ] = useState([])

  function handleChange(event) {
    const {name, value} = event.target
    setInputData(prevInputData => ({...prevInputData,[name] : value}))
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContactsData(prevContacts => [...prevContacts, inputData])
  }

  const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputData.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input 
          type="text"
          value={inputData.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br />
        <button>Add Contact</button>
      </form>
      {contacts}
    </>
  )
}

export default App