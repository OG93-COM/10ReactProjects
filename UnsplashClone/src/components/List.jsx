import React from 'react'
import spinner from '../assets/spinner.svg'
import usePhotos from '../hooks/usePhotos'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const List = () => {
  const [query, setQuery] = useState('Dog');
  const [pageNumber, setPageNumber] = useState(1);
  const photoApiData = usePhotos(query,pageNumber);
  const lastPicRef = useRef()
  const searchRef = useRef()

  useEffect(() => {
    if(lastPicRef.current){
      const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting && photoApiData.maxPages !== pageNumber){
          setPageNumber(pageNumber + 1)
          lastPicRef.current = null
          observer.disconnect()
        }
      })
      observer.observe(lastPicRef.current)
    }

  },[photoApiData])

  const handleSearch = (e) => {
    e.preventDefault()
    if(searchRef.current.value !== query) {
      setQuery(searchRef.current.value)
      setPageNumber(1)
      console.log(query)
    }
  }


  return (
    <>

    <h1 className='text-4xl '>Unsplash Clone 🌟</h1>
    <form onSubmit={handleSearch}>
      <label htmlFor='search' className='block mb-4'>Look for Images</label>
      <input
      ref={searchRef}
      type='text'
      placeholder={`Look for images, Example : ${query}`}
      className='block w-full text-slate-800 py-3 px-2 text-md outline-slate-600 rounded border border-slate-400'/>
    </form>

    {/* Affiche Error */}
    {photoApiData.error.state &&
      <p className='text-red-500 text-xs m-2 float-right'>{photoApiData.error.msg}</p>}

    {/* Affiche pas de resultat */}
    {photoApiData.photo.length === 0 && !photoApiData.error.state && !photoApiData.loading &&
      <p className='text-red-500 text-xs m-2 float-right'>Sorry, No Image !! Please Try Again</p>}

    <ul className='grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] auto-rows[175px] mt-4 gap-4 justify-center'>
      {!photoApiData.loading && photoApiData.photo.length !== 0 &&
      photoApiData.photo.map((image,index) => {
        if(photoApiData.photo.length === index + 1){
          return (
          <li ref={lastPicRef} key={image.id}>
            <img
            className='w-full h-full object-cover'
            src={image.urls.regular}
            alt={image.alt_description}>
            </img>
          </li> )

        } else { return (
        <li key={image.id}>
          <img className='w-full h-full object-cover'
          src={image.urls.regular}
          alt={image.alt_description}></img>
        </li>) }
      })}

    </ul>

    {(photoApiData.loading && !photoApiData.error.state) &&
    <img src={spinner} className='block mx-auto' alt='Spinner'/> }

      {/* No More Pages */}
      {photoApiData.maxPages === pageNumber && <p>No More Images</p>}
    </>
  )
}

export default List