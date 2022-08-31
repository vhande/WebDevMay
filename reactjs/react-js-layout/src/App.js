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
import MovieDetail from './MovieDetail';
import { useState, useEffect } from 'react'

function App() {
  const [first, setFirst] = useState([])
  const [searchFilm, setSearchFilm] = useState("")
  const searchEvent = (e) => { setSearchFilm(e.target.value) }
  console.log(searchFilm)

  useEffect(() => {
    if (searchFilm !== "") {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1&query=${searchFilm}`)
        .then(res => res.json())
        .then(data => { setFirst(data.results) })
    }
  }, [searchFilm])


  return (
    <>
      <Layout searchEvent={searchEvent}>
        <Routes>
          <Route path='/' element={<Home filteredMovies={first}/>} />
          <Route path='/:movie_id' element={<MovieDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App