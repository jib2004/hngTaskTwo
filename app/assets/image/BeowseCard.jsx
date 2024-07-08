"use client"
import Image from "next/image"

const BeowseCard = ({imgSrc,productName,Stock}) => {
  return (
    <div>
            <div className='w-[182px] md:w-[170px] xl:w-[300px] h-[218px] xl:h-[400px] flex flex-col justify-between'>  
                <div className="w-full h-[152px] xl:h-[300px] rounded-[8px] md:rounded-[16px] bg-[#f2f2f2]  flex  justify-center items-center">
                    <Image src={imgSrc} className="w-[122px] xl:w-[243px] h-[124px] xl:h-[247px] object-contain"/>
                </div>

                <div className="w-full [h-50px] xl:h-[76px]">
                    <h3 className=" font-semibold text-[16px] xl:text-[28px] text-center leading-[24px] xl:leading-[42px]">
                            {productName}
                    </h3>

                    <p className="text-[#808080] text-center leading-[18px] xl:leading-[30px] text-[12px] xl:text-[20px] "> 
                    Over {Stock} categories in stock
                    </p>
                </div>

            </div>
        </div>
  )
}

export default BeowseCard