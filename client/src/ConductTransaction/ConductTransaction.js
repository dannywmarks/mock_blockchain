import React from 'react'
import Form from '../Form/Form'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const ConductTransaction = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>MoneyShot Blockchain</h1>
      <h3>conduct a transaction</h3>
      <br />
      <div>
        <Link to="/">Home</Link>
      </div>
      <br />
      <Form />
    </header>
  </div>
    
  )
}

export default ConductTransaction
