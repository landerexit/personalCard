import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <div className="padding-wrapper">

                <Info />

                <About />

            </div>

            <Footer />
        </>
    )
}