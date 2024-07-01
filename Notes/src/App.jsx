import Notes from "./components/Notes"
import {useDispatch, useSelector} from 'react-redux'
import { getNoteFromApi } from './features/notes'
import SideBar from "./components/SideBar"
import SideNotes from "./components/SideNotes"
import { Routes, Route } from "react-router-dom"
import ShowNote from './components/ShowNote'

function App() {
  const dispatch = useDispatch()
    const notesList = useSelector(state => state.notes)
    if(!notesList.list){
        dispatch(getNoteFromApi())
    }
    console.log(notesList)

  return(
  <div className="bg-slate-800 min-h-screen flex">
    <SideBar/>
    <SideNotes/>
    <Routes>
      <Route path="/" element={<Notes/>} />
      <Route path="/note/:id" element={<ShowNote />} />
    </Routes>
    
    
  </div>
  )
}

export default App
