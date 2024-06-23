import React from 'react'
import nextIcon from '../../assets/next-icon.svg'
import {useDispatch, useSelector} from 'react-redux'
import {nextMusic}  from '../../features/playlist.js'

const NextButton = () => {
  const playlistData = useSelector(state => state.playList)
  const dispatch = useDispatch()
  const handleClick = () => {
    if (playlistData.songs) {
      const nextIndex = playlistData.songs.findIndex(song => song.id === playlistData.currentMusicId) + 1
      dispatch(nextMusic(nextIndex))
    }
  }
  return (
    <button
    onClick={handleClick}
    className='w-9 h-9 bg-slate-400/90 rounded-full flex justify-center items-center ml-3'>
      <img src={nextIcon} alt="nextIcon" className='w-5 h-5' />
    </button>
  )
}

export default NextButton