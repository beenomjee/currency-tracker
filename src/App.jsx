import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Coin, ErrorPage, Home } from './modules'
import { Header } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Coin />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App