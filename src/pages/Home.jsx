import React, { useState } from 'react'
import InfoList from '../components/InfoList'

const Home = () => {
    const [books, setBooks] = useState([])
    const url = "https://clarus-library-api.vercel.app/books"


  return (
    <div>
        <InfoList/>
    </div>
  )
}

export default Home