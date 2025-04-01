import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeMenu from './views/HomeMenu'
import CaculateNumber from './views/CaculateNumber'
import CaculateMoneyShare from './views/CaculateMoneyShare'

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/n" element={<CaculateNumber />} />
          <Route path="/m" element={<CaculateMoneyShare />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App