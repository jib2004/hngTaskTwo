"use client"
import Image from "next/image"
import casual from '../assets/image/category__CASUAL_WEAR_-removebg-preview.png'
import vintage from '../assets/image/Category_VINTAGE_-removebg-preview.png'
import BeowseCard from "../assets/image/BeowseCard"
import beauty from '../assets/image/Category_BEAUTY_PRODUCTS_-removebg-preview.png'

const Browse = () => {
  return (
    <div className=" overflow-x-hidden mb-[24px] xl:w-fit mx-auto">
       <h1 className=' font-semibold text-[18px] leading-[27px] pl-[24px]  mb-[16px]'>Browse by category</h1> 

       <div className="px-[14px]  xl:px-[10px] flex gap-4 xl:gap-1 overflow-x-hidden">
        <BeowseCard imgSrc={casual} productName={"Casual wear"} Stock={20} />
        <BeowseCard imgSrc={vintage} productName={"Vintage"} Stock={31} />
        <BeowseCard imgSrc={beauty} productName={"Beauty products"} Stock={24}/>
        <BeowseCard imgSrc={beauty} productName={"Gym wears"} Stock={62}/>
       </div>

    </div>
  )
}

export default Browse