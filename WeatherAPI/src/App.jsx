import loader from './assets/loader.svg'
import browser from './assets/browser.svg'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {

  const [countryName, setCountryName] = useState(null);
  const [cityName, setCityName] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [iconWeather, setIconWeather] = useState('');


  useEffect(()=>{
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
    .then (res => {
      return res.json()
    })
    .then (resData => {
      setCountryName(resData.data.country);
      setCityName(resData.data.city);
      setTemperature(resData.data.current.weather.tp);
      setIconWeather(resData.data.current.weather.ic)
    }).catch(error => {
      console.error('Error fetching weather data:', error);
    });
  },[]) 
  return (

      <main>
          <div className={`loader-container ${!countryName && "active"} `}>
            <img src={loader} alt="loader" />
            {/* <img src={browser} alt="browser" /> */}
          </div>
          {countryName && (
           <>
            <p className="city-name">{cityName}</p>
            <p className="country-name">{countryName}</p>
            <p className="temperature">{temperature}</p>
            <div className="info-icon-container">
              <img src={`../public/icons/${iconWeather}.svg`} alt="Weather Icon" className='info-icon'/>
            </div>
          </> )
          }
          
          
      </main>
  
  );
}

export default App;



