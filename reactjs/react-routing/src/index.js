import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import Contact from './Contact'
import NotFound from './NotFound';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const myFunc = () => {console.log("Hello")}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ul>
      <li><a href="/">Homapage</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/blog/5">Blog Detail 5</a></li>

    </ul>
    <Routes>
      <Route path='/' element={<App users={[2,3,4]} posts={[{id:1},{id:2}]}/>}/>
      <Route path="/contact" element={<Contact myFunction={myFunc}/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogDetail/>}/>
      <Route path= "*" element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

