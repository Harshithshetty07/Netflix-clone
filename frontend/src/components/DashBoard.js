import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import AuthForms from './SignUp';

function DashBoard() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<AuthForms/>}></Route>
            <Route path='/browse' element={<Browse/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default DashBoard
