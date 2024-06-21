import React from 'react'
import { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'

const Player = () => {
    const playlist = useSelector(state => state.playList)
    const dispatch = useDispatch()
    const audioRef = useRef()

  return (
    <audio
    id='audio-player'
    controls
    ref={audioRef}
    src={playlist.songs?.find(obj => obj.id === playlist.currentMusicId).url}>
    </audio>
  )
}

export default Player