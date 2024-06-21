import Player from "./components/Player"
import Playlist from "./components/Playlist"


function App() {
  return(
    <>
      <div className="bg-slate-900 min-h-screen pt-20 px-4">
        <div className="max-w-xl mx-auto">
          <Player/>
          <h1 className="text-slate-100 text-2xl">OG93 Music Player</h1>
          <Playlist/>
        </div>
      </div>
      {/* Player Panel */}
    </>
  )

}

export default App
