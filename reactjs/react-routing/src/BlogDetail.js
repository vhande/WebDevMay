import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {useEffect} from 'react'

function BlogDetail() {
    const [detail,setDetail] = useState([])
    const fetchData = async()=> {console.log('afdsfsg')
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let posts = await response.json()
    setDetail(posts) 
    }
    
    useEffect(()=>{
        fetchData()
    },[])

const {id} = useParams()
  return (

    <div>
        BlogDetail {id}
        <h1>{detail.title}</h1>

    </div>
  )
}

export default BlogDetail