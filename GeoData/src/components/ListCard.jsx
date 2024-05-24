import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export const ListCard = (props) => {
    const [showModal, setShowModal] = useState(false);


        return (
        <>
            <li key={props.idx} 
                onClick={()=> setShowModal(!showModal)} 
                className='relative cursor-pointer rounder transition-transform duration-300 hover:-translate-y-1 will-change-transform'>
              <h2 className='absolute top-0 left-0 bg-slate-200 text-gray-950 py-2 px-4 rounded-bl-none rounded drop-shadow-lg'>{props.country.name.common}</h2>
              <img src={props.country.flags.svg} className='w-full h-full object-cover rounded-xl'/>
            </li>
            { showModal && createPortal(<ModalContent country={props.country} closeModal={()=> setShowModal(!showModal) }/>, document.body)}
        </>
          
        )
      }

