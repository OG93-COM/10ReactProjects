import React from 'react'
import playIcon from '../../assets/play-icon.svg'
import pauseIcon from '../../assets/pause-icon.svg'
import { toggleLecture } from '../../features/playlist'
import {useDispatch , useSelector} from 'react-redux'
import Playlist from '../../components/Playlist'

const TogglePlayButton = () => {
  const dispatch = useDispatch()
  const playlist = useSelector(state => state.playList)

  return (
    <button
    onClick={()=> dispatch(toggleLecture())}
    className='w-14 h-14 bg-slate-100/90 shadow-md rounded-full flex justify-center items-center ml-3'>
      <img src={playlist.play ? pauseIcon : playIcon} alt="toggleIcon" className='w-full' />
    </button>
  )
}

export default TogglePlayButton