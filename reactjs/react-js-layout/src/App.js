import React from 'react'
import Home from './Home'
import Contact from './Contact'
import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import MovieDetail from './MovieDetail';
import { useState, useEffect } from 'react'


function App() {
  const [first, setFirst] = useState([])
  const [searchFilm, setSearchFilm] = useState("")
  const searchEvent = (e) => {
    setPage(1)
    setSearchFilm(e.target.value)
  }  

  console.log(searchFilm)

  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage(page + 1)
  }
  const prevPage = () => {
    if (page > 1)
      setPage(page - 1)
  }



  useEffect(() => {
    if (searchFilm.trim() !== "") {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}&query=${searchFilm}`)
        .then(res => res.json())
        .then(data => { setFirst(data.results) })
    } else {

    }
  }, [searchFilm, page])


  return (
    <>
      <Layout searchEvent={searchEvent}>
        <Routes>
          <Route path='/' element={<Home filteredMovies={first} prev={prevPage} next={nextPage}
            page={page} searchFilm={searchFilm} />} />
          <Route path='/:movie_id' element={<MovieDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App