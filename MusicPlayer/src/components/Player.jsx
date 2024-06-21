import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fillDurationVariables, updateProgress } from '../features/progress'

const Player = () => {
    const playlist = useSelector(state => state.playList)
    const dispatch = useDispatch()
    const audioRef = useRef()

    useEffect(()=>{
        if (playlist.songs && playlist.play){
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    },[playlist])

    const handleLoadedData = (e)=>{
        if (playlist.songs){
            dispatch(fillDurationVariables({
                currentTime: e.target.currentTime,
                totalDuration: e.target.duration

            }))
        }
    }
    const handleTimeData = (e)=>{
        dispatch(updateProgress(e.target.currentTime))
    }

  return (
    <audio
    id='audio-player'
    ref={audioRef}
    src={playlist.songs?.find(obj => obj.id === playlist.currentMusicId).url}
    onLoadedData={handleLoadedData}
    onTimeUpdate={handleTimeData}>
    </audio>
  )
}

export default Player