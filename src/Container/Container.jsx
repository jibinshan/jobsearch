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
                <div key={card.id} className='h-[200px] w-[200px] bg-slate-400 flex flex-col' style={{ color: card.color }}>
                    <div onClick={()=>deletecard(card.id)}>
                         <IoMdClose className='text-lg ml-[170px] mt-[10px] text-black' />
                    </div>
                     <p className='text-center font-bold text-2xl'>{card.type}</p>
                     <p className='text-center mt-[40px]'>{card.title}</p>
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
