import loader from './assets/loader.svg'
import browser from './assets/browser.svg'
import iconWeather from '../public/icons/01d.svg'
import './App.css'

function App() {
 
  return (

      <main>
          <div className="loader-container">
            <img src={loader} alt="loader" />
            {/* <img src={browser} alt="browser" /> */}
          </div>
          <p className="city-name">Paris</p>
          <p className="country-name">France</p>
          <p className="temperature">17</p>
          <div className="info-icon-container">
            <img src={iconWeather} alt="Weather Icon" className='info-icon'/>
          </div>
      </main>
  
  );
}

export default App;



