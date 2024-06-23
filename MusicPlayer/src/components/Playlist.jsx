import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getMusicData , changeMusic } from '../features/playlist'

const Playlist = () => {
    const dispatch = useDispatch()
    const playlist = useSelector(state => state.playList)
    if(!playlist.songs){
        dispatch(getMusicData())
    }


  return (
    <ul className='mt-4 pb-[300px]'>
        {playlist?.songs?.length && playlist.songs.map(song => (
            <li
            onClick={() => dispatch(changeMusic(song.id))}
            key={song.id}
            className='p-2 border-2 font-semiblod bg-indigo-100 hover:bg-indigo-200 text-slate-800 mb-3 rounded cursor-pointer'
            >
                <span>{song.title} - </span>
                <span>{song.artist}</span>
            </li>
        ))}

    </ul>
  )
}

export default Playlist