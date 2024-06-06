import { UpdateTimeButton } from "./components/UpdateTimeButton"

function App() {

  return (
    <div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto border border-slate-500 rounded p-10">
        <h1 className="text-center text-3xl mb-8">Promodoro App</h1>
        <div className="flex justify-center mb-8">
          
          <div className="mr-10">
            <p className="text-center mb-1">Session</p>
            <div className="flex">
              <UpdateTimeButton signe="-"/>
              <p>25</p>
              <UpdateTimeButton signe="+"/>
            </div>
          </div>

          <div className="mr-10">
            <p className="text-center mb-1">Pauses</p>
            <div className="flex">
              <UpdateTimeButton signe="-"/>
              <p>5</p>
              <UpdateTimeButton signe="+"/>
            </div>
          </div>

        </div>

        <div className="text-center text-xl font-semiold mb-2">
          Work
        </div>
        <div className="text-center flex justify-center mb-1 ">
          <span className="text-2xl text-slate-800 bg-slate-300 p-4 rounded">25:00</span>
        </div>
        <div className="text-center flex justify-center mb-1 ">
        <p className="text-center text-xs m-2 text-slate-300">Passed Cycle(s) : 0</p>
        </div>
        

      </div>
    </div>
  )
}

export default App