import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'


const ShowNote = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const noteList = useSelector(state => state.notes)
    console.log(id)
    if(noteList.list) {
        var actualNote = noteList.list?.find(note => note.id === id)
    }
  return (
    <div className='text-slate-100 p-4 w-full'>
            <Link to={`/`}>
                <button
                className='px-3 py-1 mb-4 mx-2 bg-slate-300 hover:bg-slate-200 duration-200 text-slate-800 rounded'>
                Notes
                </button>
            </Link>
            <button className='px-3 py-1 mb-4 bg-green-600 hover:bg-green-700 duration-200 text-slate-50 rounded'>Edit</button>
            <button className='px-3 py-1 mb-4 mx-2 bg-red-600 hover:bg-red-700 duration-200 text-slate-50 rounded'>Delete</button>
            {actualNote ?   (
                <article>
                    <p className='text-2xl font-semibold m-2'>{actualNote.title}</p>
                    <p className='text-md text-slate-300 mb-2'>{actualNote.subtitle}</p>
                    <p className='text-md text-slate-100 font-thin'>{actualNote.bodyText}</p>
                </article>
            ) : <p>No Notes</p>}
    </div>
  )
}

export default ShowNote