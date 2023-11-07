import { useState } from 'react'
import './App.css'
import Header from './header'
import Section from './section'

function App() {

  return (
    <main>
      <h1 className='sr-only'>Notifications Page</h1>
      <Header />
      <Section />
    </main>
  )
}

export default App
