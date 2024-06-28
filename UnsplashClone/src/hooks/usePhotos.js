import axios from 'axios'
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
        if(photo.length !== 0 && maxPages !== 0){
            setPhoto([])
            setMaxPages(0)
            setLoading(true)
        }
    },[query])

    useEffect(()=>{
        const url = `https://api.unsplash.com/search/photos?page=${pageNumber}&per_page=30&query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`
        axios.get(url)
        .then(res => {
            console.log(res)
            if (res.status !== 200) {
                throw new Error("Network response was not ok : " + res.status);
              }
              return res.data
            })
        .then(data => {
            console.log(data)
            setPhoto(state => [...state,...data.results]);
            
            setMaxPages(data.total_pages);
            setLoading(false);
            setError({
                msg:'',
                state: false
                });
            
        })
        .catch (err => {
            setError({
                msg: err.message,
                state: true
                })
            setLoading(false)
            console.log("❌❌❌❌❌❌ API")
            })

    },[query,pageNumber])
  return {error , photo, maxPages, loading}

}
