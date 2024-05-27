function App() {
  return (
    <div className=" bg-zinc-900 min-h-screen flex flex-col">
      <div className="text-gray-100 px-4 py-4 border-b flex items-center">
        <h1 className="w-full text-2xl">
          <span className="text-base">Smart </span>IDE
        </h1>
        <div className="w-full">
          <button className="bg-blue-600 py-2 px-3 rounded">Show Preview</button>
        </div>
        <div className="w-full flex">
          <div className="ml-auto mr-2">
            <div className="w-[6px] h-[6px] bg-slate-100 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-100 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-100 rounded-full"></div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default App
