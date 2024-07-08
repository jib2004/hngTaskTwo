import Image from "next/image"

const CategoriesCard = ({imgSrc,  categoryName}) => {
  return (
    <div className="flex flex-col justify-between items-center w-[173px] md:w-[205px] h-[175px] md:h-[232px] border border-[#c1c1c1] rounded-[8px] md:rounded-[16px] py-2 md:py-[24px] md:px-[31px] md:border-[2px]">
                <div className="w-[117px] md:w-[143px] h-[74px] md:h-[100px] rounded-[8px] md:rounded-[16px] bg-[#f2f2f2] mx-auto flex justify-center items-center">
                    <Image src={imgSrc} alt="shoe" className=" size-[60px] md:size-[81px] object-contain" />
                </div>

                <h5 className=" font-semibold text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-center">{categoryName}</h5>

                <span className="  text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] text-[#808080]">See all collections</span>
            </div>

  )
}

export default CategoriesCard