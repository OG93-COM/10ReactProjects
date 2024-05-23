import React from 'react'

const ListCard = (props) => {
  return (
    <li className='relative cursor-pointer rounder transition-transform duration-300 hover:-translate-y-1'>
        <img src={props.country.flags.svg}/>
    </li>
  )
}

export default ListCard