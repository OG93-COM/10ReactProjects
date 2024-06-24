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

    <div className='flex flex-wrap gap-3 mt-4'>
      {photoApiData.loading && <img src={spinner}/> }
      {photoApiData.photo.map(imgUrl =>
      <img src={imgUrl.urls.thumb}></img>
      )}
    </div>

    </>
  )
}

export default List