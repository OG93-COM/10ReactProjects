import React from 'react'
import prevIcon from '../../assets/prev-icon.svg'
import {useDispatch, useSelector} from 'react-redux'
import {prevMusic}  from '../../features/playlist.js'

const PreviousButton = () => {
  const playlistData = useSelector(state => state.playList)
  const dispatch = useDispatch()
  const handleClick = () => {
    if (playlistData.songs) {
      const nextIndex = playlistData.songs.findIndex(song => song.id === playlistData.currentMusicId) - 1
      dispatch(prevMusic(nextIndex))
    }
  }
  return (
    <button
    onClick={handleClick}
    className='w-9 h-9 bg-slate-400/90 rounded-full flex justify-center items-center'>
      <img src={prevIcon} alt="prevIcon" className='w-5 h-5' />
    </button>
  )
}

export default PreviousButton