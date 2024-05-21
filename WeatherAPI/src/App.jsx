import loader from './assets/loader.svg'
import browser from './assets/browser.svg'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weatherData,setWeatherData] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [cityName, setCityName] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [iconWeather, setIconWeather] = useState('');
  
  const [errorInfo,setErrorInfo] = useState(null);

  useEffect(()=>{
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
    .then (res => {
      if (!res.ok) throw new Error(`error ${res.status} - ${res.statusText}`);
      return res.json();
      
    })
    .then (resData => {
      setWeatherData(resData)
      setCountryName(resData.data.country);
      setCityName(resData.data.city);
      setTemperature(resData.data.current.weather.tp);
      setIconWeather(resData.data.current.weather.ic)
    }).catch(error => {
      console.error('Error fetching weather data:', error);
      setErrorInfo(error.message);
    });
  },[]) 
  return (

      <main>
          <div className={`loader-container ${(!weatherData && !errorInfo) && "active"} `}>
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

          {(errorInfo && !countryName) && (
            <>
            <p className='error-information'>{errorInfo}</p>
            <img src={browser} alt='error Icon'/>
            </>
          )}
          
          
      </main>
  
  );
}

export default App;



