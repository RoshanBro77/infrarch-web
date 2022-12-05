import React from 'react'
import './assets/styles/App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeBody from './components/HomeBody'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import TeamInfo from './components/TeamInfo'
import ContactPage from './components/ContactPage'
import HousePlans from './components/HousePlans'

export default function App() {
    return (
        <Router>
            <div className='app'>
                <Header />
                <div className='app__container'>
                    <Routes>
                        <Route path='/' element={<HomeBody />} />
                        <Route path='/house-plans' element={<HousePlans />} />
                        <Route path='/our-team' element={<TeamInfo />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}
