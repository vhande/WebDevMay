
import React, { useEffect, useRef, useState } from 'react'
import {Button} from 'react-bootstrap'

function Blog() {
    const [posts, setPosts] = useState([])
    const getAllPosts = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await res.json()
        setPosts(posts)
    } 
    const buttonRef = useRef()
    const inputRef = useRef()
    useEffect(()=> {
        getAllPosts()
        console.log(buttonRef.current)
        console.log(inputRef.current.value)
    },[])

    const func = () => {
        console.log(inputRef.current.value)
    }
  return (
    <div>
        <input type='text' ref={inputRef}/>
        <Button onClick={func}>Get</Button>
        <br/>
        <Button onClick={getAllPosts} ref={buttonRef}>Get and Print Posts</Button>
        {
            posts.map((item,index) => (
                <a href={`/blog/${item.id}`} className="d-block" key={item.id}>{item.title}</a>
            ))
        }
    </div>
  )
}

export default Blog