import React from 'react'
import spinner from '../assets/spinner.svg'
import usePhotos from '../hooks/usePhotos'
import { useState } from 'react'

const List = () => {
  const [query, setQuery] = useState('random');
  const [pageNumber, setPageNumber] = useState(1);
  const photoApiData = usePhotos(query,pageNumber);
  console.log(photoApiData)


  return (
    <>

    <h1 className='text-4xl '>Unsplash Clone 🌟</h1>
    <form>
      <label htmlFor='search' className='block mb-4'>Look for Images</label>
      <input
      type='text'
      placeholder='Look for images...'
      className='block w-full text-slate-800 py-3 px-2 text-md outline-slate-600 rounded border border-slate-400'/>
    </form>
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] auto-rows[175px] mt-4 gap-4 justify-center'>
      {!photoApiData.loading && photoApiData.photo.length !== 0 &&
      photoApiData.photo.map((image,idxImg) => (
      <li key={image.id}>
        <img className='w-full h-full object-cover'  src={image.urls.regular} alt={image.alt_description}></img>
      </li>)
      )}
    </ul>
    {(photoApiData.loading && !photoApiData.error.state) &&
    <img src={spinner} className='block mx-auto' alt='Spinner'/> }


    </>
  )
}

export default List