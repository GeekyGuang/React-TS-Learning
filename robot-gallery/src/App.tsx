import React from 'react'
import './App.css'
import Robot from './components/Robot'
import robots from './mockdata/robots.json'

function App() {
  return (
    <div className="App">
      {robots.map((r) => (
        <Robot id={r.id} name={r.name} email={r.email} />
      ))}
    </div>
  )
}

export default App
