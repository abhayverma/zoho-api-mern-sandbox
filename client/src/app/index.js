import React from 'react'

import { ZohoContactsList } from '../pages'

import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ZohoContactsList />
    </div>
  )
}

export default App
