import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function usePhotos(querySearch,pageIndex) {
    const [error,setError] = useState({
        msg:"",
        state: false
    })
    const [photo,setPhoto] = useState([])
    const [maxPages, setMaxPages] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${querySearch}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setPhoto(...photo,data.results)
        })
        
    },[])
  return {error , photo, maxPages, loading}

}
