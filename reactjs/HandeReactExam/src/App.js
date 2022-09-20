import React from 'react'
import Home from './Home'
import Layout from './Components/Layout/Layout'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import './Components/style.css'

function App() {
    return (
        <>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Layout>
        </>
  )
}

export default App