import React from 'react'
import Home from './Home'
import Contact from './Contact'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
    <Layout>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Layout>
    </>
  )
}

export default App