import React, { useEffect, useState } from 'react'
import InfoList from '../components/InfoList'
import axios from "axios"
import AddInfo from '../components/AddInfo'

const Home = () => {
    const [books, setBooks] = useState([])
    const url = "https://clarus-library-api.vercel.app/books"

    //! Get-Read

    const getInfo = async() =>{
        const res = await axios.get(url)
        setBooks(res.data)
    }

    useEffect(()=>{
        getInfo()
    },[])

    //! delete

    const deleteInfo = async(id) => {
        await axios.delete(`${url}/${id}`)
        getInfo()
    }

    //! Post 

    const postInfo = async(newPost) => {
        await axios.post(url, newPost)
        getInfo()
    }

    //! put-update information

    const putInfo = async(editItem) => {
        await axios.put(`${url}/${editItem.id}`,editItem)
        getInfo()
    }

  return (
    <div>
        <AddInfo postInfo={postInfo}/>
        <InfoList books={books} deleteInfo={deleteInfo} putInfo={putInfo}/>
    </div>
  )
}

export default Home