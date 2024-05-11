import React from 'react';
import { useState, useEffect } from 'react';
import leftChevron from '../assets/left-arrow.svg';
import rightChevron from '../assets/right-arrow.svg';
import "./Slider.css";
import sliderData from "../data/sliderData.js";

const Slider = () => {
    const [sliderIndex,setSliderIndex] = useState(1);

    function changeImg(nextprev) {
        // let newState ;
        // if (nextprev + sliderIndex > sliderData.length) {
        //     newState =1
        // } else if (nextprev + sliderIndex < 1){
        //     newState = 1
        // } else {
        //     newState = nextprev + sliderIndex;
        // }
        
        // return setSliderIndex(newState);

        setSliderIndex(state =>{
            if (nextprev + state > sliderData.length){
                return 1
            } else if (nextprev + state < 1) {
                return sliderData.length
            } else {
                return state + nextprev;
            }
        })
    }

    useEffect(()=>{
        const intervalID = setInterval(()=> changeImg(1),2000)
        return () => clearInterval(intervalID)
    },[])

  return (
    <>
        <p className="index-info">{sliderIndex}/{sliderData.length}</p>
        <div className="sliders">
            <p className="image-info">{sliderData.find(item => item.id === sliderIndex).description}</p>
            <img src={`/images/img-${sliderIndex}.jpg`} alt="Room" className="slider-img" />
            <button className="navigation-button prev-button">
                <img src={leftChevron} alt="previous image" onClick={()=> changeImg(-1)} />
            </button>
            <button className="navigation-button next-button"  onClick={()=> changeImg(1)} >
                <img src={rightChevron} alt="next image" />
            </button>

        </div>
    </>
  )
}

export default Slider