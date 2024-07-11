"use client"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/image/icons_474161 1.png'
import unitedKingdom from '../assets/image/united kingdom.png'
import { FaUser,FaAngleDown,FaBagShopping,FaAngleUp } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import RegisterMenu from './RegisterMenu'
import { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import More from './More'

const Navbar = () => {
  const [reg,setReg] = useState(false)
  const [menu,setMenu] = useState(false)
  const [more,setMore] = useState(false)
  const handleRegistMenu = ()=>{
    setReg(!reg)
  }
  const handleMenu = () =>{
    setMenu(!menu)
  }

  const handleMore = () =>{
    setMore(!more)
  }
  
  return (
    <nav className='md:h-max-[53px] md:gap-[44px]  flex  justify-between md:justify-around items-center border-b border-[#C9C9C9] px-4 py-2'>
       <div className=' flex items-center gap-2 xl:block xl:gap-0'>       
        <div className=' w-fit  xl:hidden text-[2rem]'>
        <GiHamburgerMenu onClick={handleMenu} />
    </div>

    <div>
      <Link href="/" className='w:w-[2rem] xl:w-auto'>
      <Image src={logo} alt='main logo' className=' object-contain w-[2rem] h-[2rem]   md:w-auto md:h-auto'/>
      </Link>
    </div>
    </div>

    <div className={` fixed  transition-transform ${menu? 'translate-x-0':'-translate-x-[400px]'} xl:translate-x-0 h-screen xl:h-auto p-4 xl:p-0  left-0 top-0 z-30 bg-white xl:static `}>
      <ul className='flex flex-col xl:flex-row xl:items-center gap-[24px]'>
        <li className='flex  justify-end xl:hidden text-[1.5rem]'>
          <MdOutlineClose onClick={handleMenu} />
        </li>
        <li className='relative flex items-center gap-[4px] leading-[24px] cursor-pointer ' onClick={handleRegistMenu}>
          <FaUser /> <span >Register/SignIn</span> {reg ? <FaAngleUp />: <FaAngleDown />}
          <RegisterMenu display={reg} /> 
          </li>

        <li>
          <Link href="/" className=' font-semibold'>Home</Link>
        </li>
        <li className=' cursor-pointer'>Men</li>
        <li className=' cursor-pointer'>Women</li>
        <li className=' cursor-pointer'>Kids</li>
        <li className=' cursor-pointer'>Accessories</li>
        <li className='flex items-center gap-[4px] cursor-pointer' onClick={handleMore}>
           More {reg ? <FaAngleUp />: <FaAngleDown />} 
           <More  moreDisplay={more} />
           </li>
      </ul>
    </div>

    <div className='  md:w-auto flex  items-center gap-2 md:gap-[24px]' >
      <div className='relative flex items-center mx-auto md:m-0'>
        <FaSearch className='absolute left-2' />
        <input type="text" placeholder="Search" className='border w-[150px] md:w-auto border-[#C6C6C6] md:border-black h-[40px] py-2 pl-6 pr-2 rounded-s-[16px] rounded-e-[16px] md:rounded-e-none focus:outline-none ' />
        <button className=' hidden md:block bg-[#222222] px-2 py-2 h-[40px] w-[78px] rounded-e-[16px] text-white '><FaSearch className='  mx-auto font-thin' /></button>
      </div>

      <div className=' hidden md:flex items-center gap-[4px]'>
        <Image src={unitedKingdom} alt='flag' />
        <span className='flex items-center'>EN/Currency <FaAngleDown /></span>
      </div>

      
      <div className='relative text-[24px] text bg-[#222222] size-[44px] flex items-center justify-center rounded-full text-white cursor-pointer'>
        <div className=' absolute size-[16px] bg-red-500 rounded-full text-[10px] top-0 -right-1 flex items-center justify-center font-semibold'>2</div>
        <Link href={'/checkout'}><FaBagShopping /></Link> 
      </div>

      
    </div>

  
    
    </nav>
  )
}

export default Navbar