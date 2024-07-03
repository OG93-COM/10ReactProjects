import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {nanoid} from 'nanoid'
import {addNoteFromUser , editNoteFromUser} from '../features/notes'
import toast, { Toaster } from 'react-hot-toast';


const EditNote = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const noteList = useSelector(state => state.notes)
    const dispatch = useDispatch()
    const [inputState,setInputState] = useState({
        title:'',
        subtitle:'',
        bodyText: '',
    })
    const [showValidation,setShowValidation] = useState({
        title:false,
        subtitle:false,
        bodyText: false,
    })
 


    useEffect(()=> {
        if(id && noteList.list){
            setInputState({
                title: noteList.list.find(note => note.id === id).title,
                subtitle: noteList.list.find(note => note.id === id).subtitle,
                bodyText: noteList.list.find(note => note.id === id).bodyText
            })
        } else {
            setInputState({
                title:'',
                subtitle:'',
                bodyText: ''
            })
        }
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(inputState).every(value => value)) {
            setShowValidation({
                title:false,
                subtitle:false,
                bodyText: false,
            })
            if(id && noteList.list){
                dispatch(editNoteFromUser({...inputState, id}))
                toast(`Your Note ${inputState.title} Updated Successfuly`)
                setTimeout(()=> {
                    navigate(`/note/${id}`)
                },50)
            } else {
                const newId = nanoid(8);
                dispatch(addNoteFromUser({...inputState, id:newId}))
                toast(`Your Note ${inputState.title} Added Successfuly`)
                setInputState({
                    title:'',
                    subtitle:'',
                    bodyText: '',
                })
                setTimeout(()=> {
                    navigate(`/note/${newId}`)
                },50)
            }

        } else {
            for(const [key,value] of Object.entries(inputState)){
                if(value.length === 0){
                    setShowValidation(state => ({...state,[key]:true}))
                } else { setShowValidation(state => ({...state,[key]:false})) }
            }
        }
    }

  return (
    <div className='text-slate-200 p-6 w-full'>
        <p className='font-semibold text-xl mb-5'>{id ? "Edit Note" : "Add  New Note" }</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-1 '>
            <label htmlFor='title' className='text-sm text-slate-300'>Title</label>
            <input
            id='title'
            type='text'
            spellCheck={false}
            className='p-2 rounded text-slate-800 text-sm'
            onChange={e => setInputState({...inputState, title :e.target.value})}
            value={inputState.title}>
            </input>
            {showValidation.title && (
                <p className='text-xs text-red-600'>Please add text here</p>
            )}

            <label htmlFor='subtitle' className='text-sm text-slate-300 mt-3'>Subtitle</label>
            <input
            onChange={e => setInputState({...inputState, subtitle :e.target.value})}
            value={inputState.subtitle}
            type='subtitle'
            spellCheck={false}
            className='p-2 rounded text-slate-800 text-sm'>
            </input>
            {showValidation.subtitle && (
                <p className='text-xs text-red-600'>Please add text here</p>
            )}

            <label htmlFor='textNote' className='text-sm text-slate-300 mt-3'>Content</label>
            <textarea
            id="textNote"
            className='p-2 rounded text-slate-800 text-sm'
            rows="10"
            spellCheck={false}
            onChange={e => setInputState({...inputState, bodyText :e.target.value})}
            value={inputState.bodyText}>
            </textarea>
            {showValidation.bodyText && (
                <p className='text-xs text-red-600'>Please add text here</p>
            )}
            {id ?
            <button className='p-3 py-2 my-3 bg-slate-300 hover:bg-slate-200 duration-200 text-slate-800 rounded'>Save Changes</button>
            : <button className='p-3 py-2 my-3 bg-slate-300 hover:bg-slate-200 duration-200 text-slate-800 rounded'>Add Note</button>}
        </form>
        <Toaster />
    </div>
  )
}

export default EditNote