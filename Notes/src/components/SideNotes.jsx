import {useDispatch, useSelector} from 'react-redux'
import  loader from '../assets/spinner.svg'
import { Link } from 'react-router-dom'

const SideNotes = () => {
    const noteList = useSelector(state => state.notes)
  return (
    <aside className='bg-slate-200  w-[275px] flex flex-col pt-2 items-center border-r-2 border-slate-500'>
        <p className='w-full text-center text-xl font-semibold text-slate-700 py-6 border-b border-slate-300 '>My Notes 📝</p>
        <div className='w-full '>
            <ul className='w-full divide-y divide-slate-300'>
                {noteList &&
                noteList.list?.map(note => (
                    <li key={note.id} className='hover:bg-slate-100 p-3 hover:scale-[101%] hover:shadow-lg duration-500 cursor-pointer '>
                    <Link to={`/note/${note.id}`}>
                        <span className='block text-md font-medium md:text-xl md:font-normal'>{note.title}</span>
                        <span className='block text-xs md:text-lg md:font-light text-slate-700'>{note.subtitle}</span>
                    </Link>
                    </li>
                ))}
            </ul>
            

        </div>
    </aside>
  )
}

export default SideNotes