import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { useSearch } from '../Context/SearchContext';

function Navbar() {
    const [interested,setInterested] = useState(false)
    const [searchinput,setSearchinput] = useState("")
    const [filteredarray,setFiltereddarray] = useState([])
    console.log(interested,"=====interested");
    const oninterested = ()=>{
        setInterested((prev)=>!prev)

    }
    const {array,oncard} = useSearch()
    const handleinputchange = (e)=>{
        setSearchinput(e.target.value)
        const arrayfilter = array.filter((arrays)=>{
           return arrays.title.toLowerCase().startsWith(e.target.value)
        })
        setFiltereddarray(arrayfilter)
    }
  return (
    <div className='relative'>
    <div className='h-[90px] bg-black border-b-[1px] border-gray-600 flex text-white justify-between pl-[20px] pr-[100px]'>
      <div className='font-bold text-3xl flex justify-center items-center'>
        Linkedin
      </div>
      <div className='flex gap-[20px]'>
         <div className='flex flex-col justify-center items-center'>
             <IoMdHome className='text-2xl'/>
             <p>Home</p>
         </div>
         <div className='flex flex-col justify-center items-center'>
         <FaNetworkWired className='text-2xl'/>
         <p>Network</p>
         </div>
         <div className='flex flex-col justify-center items-center'>
         <FaMessage className='text-2xl'/>
         <p>Message</p>
         </div>
         <div className='flex flex-col justify-center items-center ml-[30px]'>
         <p className='rounded-md bg-gray-200 p-2 text-black cursor-pointer hover:bg-gray-400' onClick={oninterested}>Interested in</p>
         </div>
      </div>
    </div>
    {
        interested && 
        <div className='absolute top-[100%] right-2 bg-black w-[350px] h-[400px]'>
            <input type="text" placeholder='enter a location or job' className='m-2 w-[330px] p-[3px] pl-2 rounded-md outline-none bg-slate-800 text-white' onChange={handleinputchange}/>
            {searchinput === "" ? "" :
            <div className='m-2 w-[330px] h-[330px] p-[3px] pl-2 rounded-md bg-slate-800 text-white overflow-y-scroll'>
              { 
                filteredarray.map((array)=>{
                    return(
                      <div key={array.id} className='flex justify-between p-2 border-b-[1px] cursor-pointer hover:bg-slate-900' onClick={()=>oncard(array)}>
                         <p>{array.title}</p>
                         <p>{array.type}</p>
                      </div>
                    )
                })
              }
            </div>
                }
        </div>
       }
    </div>
  )
}

export default Navbar
