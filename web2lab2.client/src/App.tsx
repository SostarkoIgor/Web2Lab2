import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import XSScomponent from './components/XSScomponent'
import BrokenAccessControl from './components/BrokenAccessControl'
import Account from './components/Account'
import RoleInfo from './components/RoleInfo'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/account' element={<Account />}/>
                <Route path='/' element={
                    <div className="App">
                        <XSScomponent />
                        <BrokenAccessControl />
                    </div>
                } />
                <Route path='/info/:role/details' element={<RoleInfo />}/>
                <Route element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App;