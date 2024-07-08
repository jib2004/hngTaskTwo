"use client"
import bag from '../assets/image/French_Kiss_Bag-removebg-preview.png'
import burberryShine from  '../assets/image/Burberry_Shine-removebg-preview.png'
import alveroGown from '../assets/image/Alvero_Gown-removebg-preview.png'
import CollecionCard from './CollecionCard'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Latest = () => {
  return (
    <div className="overflow-x-hidden mb-[15px] md:mb-[84px]">
        <div className='flex justify-between pl-4 md:pr-16  items-center'>
        <h1 className='text-[18px] md:text-[40px] font-semibold leading-[27px] md:leading-[60px] my-4 py-2 px-4 md:tracking-[4%]'>
            Latest Collections
        </h1>

        <div className='hidden md:flex gap-[24px] '>
            <div className='bg-[#222222] rounded-s-[100px] text-white size-[40px] flex justify-center items-center cursor-pointer'>
                <FaAngleLeft className=' size-[24px]' />
            </div>

            <div className='bg-[#222222] rounded-e-[100px] text-white size-[40px] flex justify-center items-center cursor-pointer'>
                <FaAngleRight className=' size-[24px]' />
            </div>
        </div>

        </div>

        <div className="flex w-screen overflow-scroll md:overflow-hidden md:pl-[24px]">
            <CollecionCard imgSrc={bag} productName={'French Kiss Bag'}  brand={"ALDO"} price={500} />
            <CollecionCard imgSrc={burberryShine} productName={"Burberry shine"} brand={"FENDI"} price={150}/>
            <CollecionCard imgSrc={alveroGown} productName={"Alvero Gown"} brand={"DIVINE"} price={300}/>
        </div>

    </div>
  )
}

export default Latest