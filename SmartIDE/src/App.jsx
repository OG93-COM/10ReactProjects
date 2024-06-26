
import PreviewButton from './components/PreviewButton'
import Tabs from './components/Tabs'

function App() {
  return (

    <div className=" bg-zinc-900 min-h-screen flex flex-col">
      <div className="text-gray-100 px-4 py-4 border-b flex items-center">
        <h1 className="w-full text-2xl">
          <span className="text-base">OG93 - </span>IDE
        </h1>
        <div className="w-full">
          <PreviewButton/>
        </div>
        <div className="w-full flex">
          <div className="ml-auto mr-2 cursor-pointer" onClick={()=> alert('Menu in developement')}>
            <div className="w-[6px] h-[6px] bg-slate-100 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-100 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-100 rounded-full"></div>
          </div>
        </div>
      </div>

      <Tabs/>
    </div>

  )
}

export default App
