import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'


const EditNote = () => {
    const {id} = useParams()
    const noteList = useSelector(state => state.notes)

        var actualNote = noteList.list?.find(note => note.id === id)
    

  return (
    <div className='text-slate-200 p-6 w-full'>
        <p className='font-semibold text-xl mb-5'>Edit Note</p>
        <form className='flex flex-col gap-1 '>
            <label htmlFor='title'>Title</label>
            <input
            id='title'
            type='text'
            className='p-2 rounded text-slate-800 text-sm mb-3'
            value={actualNote?.title}>
            </input>

            <label htmlFor='subtitle' >Sub Title</label>
            <input
            value={actualNote?.subtitle}
            type='subtitle'
            className='p-2 rounded text-slate-800 text-sm mb-3'>
            </input>

            <label htmlFor='textNote'>Text Note</label>
            <textarea
            id="textNote"
            className='p-2 rounded text-slate-800 text-sm'
            rows="10"
            value={actualNote?.bodyText}>
            
            </textarea>
            <button className='p-3 py-2 my-3 bg-slate-300 hover:bg-slate-200 duration-200 text-slate-800 rounded'>Save Changes</button>
        </form>
    </div>
  )
}

export default EditNote