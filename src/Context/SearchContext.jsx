import {  createContext, useContext, useEffect, useState } from "react";


export const SearchContext = createContext()

export const SearchProvider = ({children})=>{
    const [cardarray,setCardarray] = useState([])
     const array=[
        {   id:1,
            type:"job",
            color:"red",
            title:"react.js",
        },
        {
            id:2,
            type:"job",
            color:"red",
            title:"Node.js"
        },
        {
            id:3,
            type:"job",
            color:"red",
            title:"Next.js"
        },
        {
            id:4,
            type:"job",
            color:"red",
            title:"View.js"
        },
        {
            id:5,
            type:"job",
            color:"red",
            title:"Express.js"
        },
        {
            id:6,
            type:"job",
            color:"red",
            title:"Django"
        },
        {
            id:7,
            type:"location",
            color:"blue",
            title:"Bangalore"
        },
        {
            id:8,
            type:"location",
            color:"blue",
            title:"Kochi"
        },
        {
            id:9,
            type:"location",
            color:"blue",
            title:"Chennai"
        },
        {
            id:10,
            type:"location",
            color:"blue",
            title:"Kozhikode"
        },
        {
            id:11,
            type:"location",
            color:"blue",
            title:"Thrissur"
        },
        {
            id:12,
            type:"location",
            color:"blue",
            title:"Thiruvananthapuram"
        },
    ]
     const oncard = (array)=>{
            console.log(array,"=====array");
            if (cardarray.length < 3) {
                
                setCardarray((prev)=>[
                    ...prev,
                    array
                ])
            }else{
                return <p>there are 3 items you selected</p>
            }
     }
     const deletecard = (id)=>{
        const deleted = cardarray.filter((card)=>card.id !== id )
        setCardarray(deleted)
     }
    return(
       <SearchContext.Provider value={{array,oncard,cardarray,deletecard}}>
        {children}
       </SearchContext.Provider>
    )
}
export const useSearch = ()=>{
   return useContext(SearchContext)
} 