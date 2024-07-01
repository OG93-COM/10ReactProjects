import {useDispatch, useSelector} from 'react-redux'

const Notes = () => {
    const dispatch = useDispatch()
    const notesList = useSelector(state => state.notes)

  return (
    <div className='p-8 w-full '>
        <p className='text-xl mb-5 text-slate-200'>My Notes 📔</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-6'>
        {notesList.list &&
        notesList.list?.map(note => (
            <div key={note.id} className='bg-slate-200 hover:bg-slate-50 hover:scale-[102%] duration-300 h-full rounded px-4 py-5 cursor-pointer'>
                <p className='text-lg font-semibold mb-2'>{note.title} ✍🏻</p>
                <p className='text-sm mb-1 '>{note.subtitle}</p>
                <p className='text-xs text-slate-700'>{note.bodyText.substr(0, 100)} ...</p>
            </div>
            ) )}
        </div>
    </div>
  )
}

export default Notes