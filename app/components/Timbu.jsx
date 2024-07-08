import Image from "next/image"
import shoe from '../assets/image/Ellipse 5.png'
import model from '../assets/image/Ellipse 3.png'
import cloth from '../assets/image/Ellipse 4.png'

const Timbu = () => {
  return (
    <div className=' p-2 xl:p-0 bg-[#222222] h-[373px]  md:h-[720px]  flex relative  justify-around items-center'>
        <div className="flex flex-col justify-between  h-[75%] items-center">
            <h1 className=' font-medium text-[32px] xl:text-[128px] text-white leading-[38px] xl:leading-[153px]'>TIMBU</h1>
            <div className="hidden xl:block">
                <Image src={shoe} alt="Image of a shoe" className=" size-auto object-contain"/>
            </div>
        </div>

        <div className="flex flex-col justify-around  h-[75%] items-center">
                <div>
                    <Image  src={model} alt="Picture of a mode" className=" size-[120px] md:size-[250px] object-contain xl:size-auto"/>
                </div>

                <button className=" absolute bottom-4  left-[50%] -translate-x-[50%] w-[90%] xl:translate-x-0 xl:static  xl:w-[366px] h-[44px] md:h-[66px] md:text-[24px] text-[#222222] p-[10px] bg-white rounded-[8px]  leading-[36px] font-medium">
                        Explore Now
                </button>
        </div>

        <div className="flex flex-col-reverse xl:flex-col justify-start xl:justify-between h-[75%]  xl:h-[85%]">
            <p className=" text-center xl:text-start px-2 md:p-0   absolute   left-[50%] -translate-x-[50%] xl:translate-x-0 xl:m-0  xl:static text-white text-[12px] md:text-[16px] xl:text-[20px] xl:leading-[32px] w-[337px] xl:w-[435px]  mb-3 md:m-0">
            Discover a world of convenience with our user-friendly platform, curaated collections, and exceptional customer service
            </p>

            <h1 className=" font-medium relative bottom-20 md:bottom-36  xl:static text-[32px] xl:text-[128px] text-white leading-[38px] xl:leading-[153px]">SHOP</h1>

            <div className="hidden xl:block">
                <Image src={cloth} alt="picture of cloth"/>
            </div>
        </div>
    </div>
  )
}

export default Timbu