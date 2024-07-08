"use client"
import Link from "next/link"

const RegisterMenu = ({display}) => {
  return (
    <ul className={`absolute top-7 right-4 xl:right-0 xl:top-8 border border-[#C1C1C1] bg-white w-[194px] h-[132px] p-5  ${display ? 'block':' hidden'}`}>
        <li className=" text-center font-medium px-4 py-2 border-b border-[#C1C1C1]">
            Register
        </li> 
        <li className=" text-center font-medium px-4 py-2 ">
            Sign In
        </li>
    </ul>
  )
}

export default RegisterMenu