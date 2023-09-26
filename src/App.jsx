import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'


function App() {


  return (
    <div style={{padding : '0px', margin : '0px'}}>
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
