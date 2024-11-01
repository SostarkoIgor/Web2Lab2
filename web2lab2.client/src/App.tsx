import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import XSScomponent from './components/XSScomponent'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={
                    <div className="App">
                        <XSScomponent />
                    </div>
                } />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App;