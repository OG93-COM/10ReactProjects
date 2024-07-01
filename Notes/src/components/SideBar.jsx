import { Link } from 'react-router-dom'
import edit from '../assets/edit.svg'
import folder from '../assets/folder.svg'


const SideBar = () => {
  return (
    <aside className='flex flex-col items-center w-[90px] p-5 bg-slate-700'>
        <div className='flex justify-center  gap-2 mb-12'>
            <div className='w-4 h-4 bg-red-600 rounded-full '></div>
            <div className='w-4 h-4 bg-yellow-400 rounded-full '></div>
            <div className='w-4 h-4 bg-green-500 rounded-full '></div>
        </div>
        <Link to="/">
            <img src={folder} className='w-10 mb-5 cursor-pointer hover:scale-110 duration-300' alt='Show Notes'/>
        </Link>
        <Link to={"/edit"}>
            <img src={edit} className='w-10 cursor-pointer hover:scale-110 duration-300' alt='Write New Note'/>
        </Link>
        
    </aside>
  )
}

export default SideBar