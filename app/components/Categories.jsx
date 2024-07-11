"use client"
import womenShoes from '../assets/image/Shoe-removebg-preview.png'
import lingerie from '../assets/image/Lingerie-removebg-preview.png'
import streetWear from '../assets/image/Street_wear-removebg-preview.png'
import belt from '../assets/image/Belts-removebg-preview.png'
import bag from '../assets/image/Bag-removebg-preview.png'
import CategoriesCard from "./CategoriesCard"

const Categories = () => {
  return (
    <div className='overflow-x-hidden '>
        <ul className='px-[24px] w-[480px] h-40px flex gap-[10px] mb-[15px] md:w-full md:justify-around'>
            <li className='w-[84px] cursor-pointer md:w-[206px] h-[40px] md:[68px] border p-[8px] md:p-[10px] border-[#c1c1c1c1] rounded-[100px] text-[13px] md:text-[24px] flex items-center justify-center font-medium leading-[24px] md:leading-[36px] md:border-[2px] text-[#1e1e1e]'>Men</li>
            <li className='w-[84px] cursor-pointer md:w-[206px] h-[40px] md:[68px] border p-[8px] md:p-[10px] border-[#c1c1c1c1] rounded-[100px] text-[13px] md:text-[24px] flex items-center justify-center font-medium leading-[24px] md:leading-[36px]  text-[white] bg-[#1e1e1e]'>Women</li>
            <li className='w-[84px] cursor-pointer md:w-[206px] h-[40px] md:[68px] border p-[8px] md:p-[10px] border-[#c1c1c1c1] rounded-[100px] text-[13px] md:text-[24px] flex items-center justify-center font-medium leading-[24px] md:leading-[36px] md:border-[2px] text-[#1e1e1e]'>Kids</li>
            <li className='w-[84px] cursor-pointer md:w-[206px] h-[40px] md:[68px] border p-[8px] md:p-[10px] border-[#c1c1c1c1] rounded-[100px] text-[13px] md:text-[24px] flex items-center justify-center font-medium leading-[24px] md:leading-[36px] md:border-[2px] text-[#1e1e1e]'>Perfumes</li>
            <li className='w-[84px] cursor-pointer md:w-[206px] h-[40px] md:[68px] border p-[8px] md:p-[10px] border-[#c1c1c1c1] rounded-[100px] text-[13px] md:text-[24px] flex items-center justify-center font-medium leading-[24px] md:leading-[36px] md:border-[2px] text-[#1e1e1e]'>Sport</li>
            <li className='w-[84px] cursor-pointer md:w-[206px] h-[40px] md:[68px] border p-[8px] md:p-[10px] border-[#c1c1c1c1] rounded-[100px] text-[13px] md:text-[24px] flex items-center justify-center font-medium leading-[24px] md:leading-[36px] md:border-[2px] text-[#1e1e1e]'>Jewelry</li>
        </ul>

        <div className='md:pl-[15px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 px-2 md:gap-3 py-2 md:p-2'>
            <CategoriesCard imgSrc={womenShoes}  categoryName={"Shoes"} />
            <CategoriesCard imgSrc={bag}  categoryName={"Bags"} />
            <CategoriesCard imgSrc={womenShoes}  categoryName={"Jackets"} />
            <CategoriesCard imgSrc={lingerie}  categoryName={"Lingerie"} />
            <CategoriesCard imgSrc={belt}  categoryName={"Belts"} />
            <CategoriesCard imgSrc={streetWear}  categoryName={"Street wear"} />
        </div>

        <div className='hidden  pl-[15px] xl:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 p-2'>
            <CategoriesCard imgSrc={womenShoes}  categoryName={"Sunglasses"} />
            <CategoriesCard imgSrc={bag}  categoryName={"Sun Wear"} />
            <CategoriesCard imgSrc={womenShoes}  categoryName={"Hats"} />
            <CategoriesCard imgSrc={lingerie}  categoryName={"Slippers"} />
            <CategoriesCard imgSrc={belt}  categoryName={"Wigs"} />
            <CategoriesCard imgSrc={streetWear}  categoryName={"Cosmetic"} />
        </div>

        <div className='text-center my-8'>
            <button className='w-[164px] font-medium cursor-pointer leading-[24px] text-[16px] h-[45px] py-[4px] text-white px-[8px] opacity-80 rounded-[8px] bg-[#222222]'>See more &gt;&gt;&gt;</button>
        </div>
    </div>
  )
}

export default Categories