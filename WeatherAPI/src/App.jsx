import loader from './assets/loader.svg'
import browser from './assets/browser.svg'

function App() {
 
  return (

      <main>

        <h1>Weather App</h1>
        <div className="loader-container">
        <img src={loader} alt="loader" />
        <img src={browser} alt="browser" />
        </div>
      
      </main>
  
  );
}

export default App;



