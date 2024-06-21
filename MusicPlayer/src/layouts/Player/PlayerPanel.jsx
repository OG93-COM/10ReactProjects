import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'
import TogglePlayButton from './TogglePlayButton'

const PlayerPanel = () => {
    const playlist = useSelector(state => state.playList)
    const dispatch = useDispatch()
    const actualSong = playlist.songs?.find(obj => obj.id === playlist.currentMusicId)


  return (
    <div className='fixed w-full bottom-0 rounded border-t-2 border-gray-800 p-6 bg-gradient-to-r from-indigo-100 to-purple-200 '>
        <div className='max-w-[800px] mx-auto mb-2'>
            <p className='text-slate-900 text-xl font-semibold'>{playlist.songs && actualSong.title}</p>
            <div className='flex justify-between'>
                <p>{playlist.songs && actualSong.artist}</p>
                <p>{playlist.songs?.findIndex(obj => obj.id === playlist.currentMusicId) +1 }  / {playlist.songs?.length}</p>
            </div>
        </div>
        <div className='flex justify-center items-center mb-5'>
            <PreviousButton/>
            <TogglePlayButton/>
            <NextButton/>
        </div>
    </div>
  )
}

export default PlayerPanel