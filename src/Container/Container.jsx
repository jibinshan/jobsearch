import React from 'react'
import { useSearch } from '../Context/SearchContext'
import { IoMdClose } from "react-icons/io";

function Container() {
    const {cardarray,deletecard} = useSearch()
  return (
    
    <div className='bg-slate-800 h-[87vh] flex flex-col gap-[30px] justify-center items-center'>
        <div className='flex gap-[30px] justify-center items-center'>

      {
          cardarray.length > 0 &&
        cardarray.map((card)=>{
            return(
                <div key={card.id} className='bg-slate-400 flex rounded-lg p-4 justify-center items-center gap-[15px]' style={{ color: card.color }}>
                     <p className='text-center font-semibold text-xl'>{card.title}</p>
                    <div onClick={()=>deletecard(card.id)}>
                         <IoMdClose className='text-md text-black' />
                    </div>
                </div>
            )
        })
    }
    </div>
      {cardarray.length === 3 && <p className='text-white w-full text-center'>You Cant Select Next</p>}
    </div>
  )
}

export default Container
