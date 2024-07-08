"use client"
import Image from "next/image"

import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const CollecionCard = ({imgSrc, productName,  brand , price}) => {
  return (
    <div className="flex flex-col justify-between w-[282px] md:w-[435px] h-[296px] md:h-[497px] border rounded-[8px] border-[#c1c1c1] p-2  ml-[24px] ">
                <div className=" flex flex-col gap-2 ">
                   <div className="bg-[#f2f2f2] p-2 w-[266px] md:w-[403px] h-[136px] md:h-[258px] rounded-[8px] flex  justify-around mx-auto">
                    <div className="cursor-pointer size-[24px] md:size-[40px] bg-white rounded-full flex items-center justify-center">
                    <CiHeart className=" size-[16px] md:size-[24px] "/>
                    </div>

                    <div>
                        <Image src={imgSrc} className="w-[124px] md:w-[227px] h-[141px] md:h-[258px] object-contain"/>
                    </div>

                    <p className=" w-[55px] md:w-[67px] h-[23px] md:h-[34px] rounded-[100px] py-[4px] md:py-[8px] px-[8px] md:px-[10px]   text-[10px] md:text-[12px] leading-[15px] md:leading-[18px] bg-white">In Stock</p>
                   </div>

                   <div className="flex items-center justify-between md:w-[403px]">
                        <p className="text-[10px] md:text-[12px] w-[56px] md:w-[67px] h-[23px] md:h-[26px] py-[4px] px-[8px]  md:px-[10px] leading-[15px] md:leading-[18px] text-[#808080] border border-[#c1c1c1] rounded-[100px]">Women</p>
                        <div className=" h-[18px] md:h-[24px] text-[12px] leading-[18px] flex items-center gap-[2px]">
                            <FaStar className="text-[#FFD700] size-[16px] md:size-[24px]" />
                            <span className="text-[#808080] text-[12px] md:text-[16px]">2k+ rating</span>
                        </div>
                   </div>
                </div>

                <div className="">
                    <h4 className=" leading-[15px] text-[16px] md:text-[24px] md:leading-[36px] font-semibold text-[#1e1e1e]">{productName}</h4>
                    <span className="text-[12px] md:text-[18px] leading-[18px] md:leading-[27px] font-medium text-[#808080]">{brand}</span>
                    <div className="flex items-center justify-between">
                        <span className="text-[#1e1e1e] leading-[24px] text-[16px] md:text-[24px] font-semibold">
                            &#36;{price}
                        </span>
                        <button  className="bg-[#222222] rounded-[8px] md:rounded-[16px] p-[10px] w-[174px] md:w-[150px] h-[41px]  md:h-[74px] text-[14px] font-medium text-white leading-[21px]">
                            Add to cart
                        </button>
                    </div>

                </div>
            </div>
  )
}

export default CollecionCard