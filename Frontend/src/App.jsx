import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Common/Home'
import Asksomething from './Component/Common/Asksomething'

const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/love' element={<Asksomething/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App