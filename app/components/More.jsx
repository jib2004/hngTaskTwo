import React from 'react'

const More = ({moreDisplay}) => {
  return (
    <ul className={`absolute top-7 right-4 xl:right-0 xl:top-8 border border-[#C1C1C1] bg-white w-[194px] ${moreDisplay? 'block' :'hidden'}`}>
        <li className=" text-center font-medium px-4 py-2 border-b border-[#C1C1C1]">
            Perfumes
        </li> 
        <li className=" text-center font-medium px-4 py-2 border-b border-[#C1C1C1]">
            Jewelries
        </li>
        <li className=" text-center font-medium px-4 py-2 border-b border-[#C1C1C1]">
            Gym wears
        </li>
        <li className=" text-center font-medium px-4 py-2 border-b border-[#C1C1C1]">
            Vintage wears
        </li>
        <li className=" text-center font-medium px-4 py-2 border-b border-[#C1C1C1]">
            Sporty wear
        </li>
        <li className=" text-center font-medium px-4 py-2 border-b border-[#C1C1C1]">
            Pyjamas
        </li>
        <li className=" text-center font-medium px-4 py-2 ">
            Slippers
        </li>
    </ul>
  )
}

export default More