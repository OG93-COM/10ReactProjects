import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function usePhotos(query,pageNumber) {
    const [error,setError] = useState({
        msg:"",
        state: false
    })
    const [photo,setPhoto] = useState([])
    const [maxPages, setMaxPages] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://api.unsplash.com/search/photos?page=${pageNumber}&per_page=30&query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setPhoto(state => [...state,...data.results])
            setMaxPages(data.total_pages)
            setLoading(false)
            console.log("✅✅✅✅✅ API")
        })
        .catch (err => {
            setError({ msg: err.message, state: true })
            setLoading(true)
            console.log("❌❌❌❌❌❌ API")
            })

    },[query,pageNumber])
  return {error , photo, maxPages, loading}

}
