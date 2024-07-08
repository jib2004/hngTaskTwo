import Image from 'next/image'
import logo from '../assets/image/Group.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-[#222222] px-4 py-2 xl:py-[73px] xl:px-[80px] text-white flex flex-col-reverse xl:flex-row justify-between xl:items-center mt-[24px] xl:m-0'>
        <div className='flex  flex-col  gap-2'> 
          <div className='text-center'>
            <Image src={logo} className=' mx-auto xl:m-0 size-[40px] md:w-[212px] md:h-[155px] object-contain'/>
          </div>
          <ul className='text-white flex justify-center gap-3'>
            <li><FaInstagram  className='size-[32px]'/></li>
            <li><FaWhatsapp  className='size-[32px]'/></li>
            <li><FaXTwitter  className='size-[32px]'/></li>
          </ul>
        </div>

        <div className='flex gap-4 flex-col pb-4 mb-4  xl:m-0 xl:p-0  xl:flex-row border-b xl:border-none'>
          <ul>
            <h3 className='font-semibold xl:font-bold leading-[24px] xl:leading-[42px] text-[16px] md::text-[28px]'>About</h3>
            <li className='text-[24px] leading-[36px] hidden xl:block'>About Us</li>
            <li className='text-[24px] leading-[36px] hidden xl:block'>News & Blog</li>
            <li className='text-[24px] leading-[36px] hidden xl:block'>Location</li>
          </ul>
          
          <ul className=' '>
            <h3 className='font-semibold xl:font-bold leading-[24px] xl:leading-[42px] text-[16px] md::text-[28px]'>Products</h3>
            <li className='text-[24px] leading-[36px] hidden xl:block'>Pricing</li>
            <li className='text-[24px] leading-[36px] hidden xl:block'>Store</li>
            <li className='text-[24px] leading-[36px] hidden xl:block'>Features</li>
          </ul>
          
          <ul className=' '>
            <h3 className='font-semibold xl:font-bold leading-[24px] xl:leading-[42px] text-[16px] md::text-[28px]'>Discover</h3>
            <li className='text-[24px] leading-[36px] hidden xl:block'>Contact Us</li>
            <li className='text-[24px] leading-[36px] hidden xl:block'>Customers</li>
            <li className='text-[24px] leading-[36px] hidden xl:block'>Affiliates</li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer