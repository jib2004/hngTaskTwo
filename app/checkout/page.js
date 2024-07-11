import Image from "next/image"
import dispayshoe from "../assets/image/61oejShhPyL._SY625_ 2.png"
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa"
import shoe from '../assets/image/Frame 160.png'
import shoe2 from '../assets/image/Frame 159.png'
import shoe3 from '../assets/image/Frame 161.png'
import shoe4 from '../assets/image/Frame 162.png'
import truck from '../assets/image/Group (2).png'
import wallet from '../assets/image/Vector.png'
import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col min-h-screen xl:items-center md:flex-row">
    
    <header className=" xl:basis-[65%]  py-4 px-8 flex flex-col justify-between md:justify-start xl:gap-8 items-center xl:flex-row xl:items-start">
        <div className="border-b border-[#C9C9C9] xl:border-none ">
            <div className=" relative w-[334px] h-[238px] bg-[#f2f2f2] flex justify-center items-center rounded-[8px] border xl:w-[321px] xl:h-[323px] xl:rounded-[16px] ">
                    <Image src={dispayshoe} alt="image of shoe" className=" xl:size-[261px] object-cover"/>

                    <div className="size-[32px] absolute bg-white flex justify-center items-center rounded-full xl:hidden -left-4 shadow-lg"><FaAngleLeft /></div>
                    <div className="size-[32px] absolute bg-white flex justify-center items-center rounded-full xl:hidden -right-4 shadow-lg"><FaAngleRight/></div>
            </div>

            <div className="flex w-[304px] mx-auto my-3 justify-between">
                <div >
                    <Image src={shoe2} alt="Image of a shoe"/>
                </div>

                <div >
                    <Image src={shoe} alt="Image of a shoe"/>
                </div>

                <div >
                    <Image src={shoe3} alt="Image of a shoe"/>
                </div>

                <div >
                    <Image src={shoe4} alt="Image of a shoe"/>
                </div>
            </div>
        </div>
          <div>
        <div className="flex w-full flex-col items-center xl:items-start p-5 border-b border-[#C9C9C9] xl:border-none">
      <h1 className="text-[24px] font-semibold tracking-[8%] leading-[36px] xl:text-[36px] xl:leading-[54px] text-[#1e1e1e]">Burberry Shine</h1>
      <div>
        <span className=" leading-[24px] text-[16px] xl:text-[18px] xl:leading-[27px]">Brand :</span> <span className="font-medium  leading-[24px] text-[16px] xl:text-[18px] xl:leading-[27px]">FENDI</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-3 border-b w-full border-[#C9C9C9] xl:border-none">
        <div className="flex items-center gap-3">
            <h2 className="text-[20px] leading-[30px] font-medium xl:text-[24px] xl:leading-[36px]">$150</h2>
            <span className=" line-through text-[16px] text-[#808080] font-light tracking-[4%] leading-[24px]">$300</span> 
            <div className="bg-[#00620029]  px-[4px] rounded-[4px] "><span className="text-[#006200] font-light text-[14px] leading-[21px]">-50%</span></div>       
            </div>

        <span className="text-[#006200] opacity-70 leading-[21px] text-[14px] font-light tracking-[4%]">50 units left</span>
        <p className="text-[#808080] leading-[21px] text-[14px] font-light tracking-[4%]">+ Shipping fee may vary on location</p>
        <div className="flex gap-4 items-center"><FaStar className="text-[#FFD700]" /> <span className="text-[#808080] leading-[21px] text-[14px] font-light">1k+ rating</span> </div>
      </div>

      <div className="flex flex-col w-full gap-2 p-6 ">
     <div className="flex gap-3 items-center">
        <span className="text-[14px] leading-[21px] tracking-[8%] text-[#1e1e1e]">Quantity: </span> 
        <div className="flex">
        <button className=" rounded-s-[8px] w-[40px] h-[32px] bg-[#222222] text-white">-</button> 
        <input type="text" value={1} disabled className="w-[40px] h-[32px] border-[2px] border-[#222222] text-center " /> 
        <button className= " rounded-e-[8px] w-[40px] h-[32px] bg-[#222222] text-white">+</button>
        </div>
     </div>

     <div className="flex items-center gap-2">
        <span className=" leading-[21px] text-[14px] xl:[16px]">Size:</span> 
         <div className="w-[60px] text-[14px] xl:text-[16px] leading-[21px] font-medium h-[41px] xl:h-[44px] p-[10px] border border-[#c1c1c1] rounded-[8px]">20</div> 
         <div className="w-[60px] text-[14px] xl:text-[16px] leading-[21px] font-medium h-[41px] xl:h-[44px] p-[10px] border border-[#c1c1c1] rounded-[8px]">25</div> 
         <div className="w-[60px] text-[14px] xl:text-[16px] leading-[21px] font-medium h-[41px] xl:h-[44px] p-[10px] border border-[#c1c1c1] rounded-[8px]">32</div> 
         <div className="w-[60px] text-[14px] xl:text-[16px] leading-[21px] font-medium h-[41px] xl:h-[44px] p-[10px] border border-[#c1c1c1] rounded-[8px]">37</div>
     </div>
     <p className="text-end font-medium leading-[15px] text-[10px]">See all size guides</p>

     <div className="flex items-center gap-2">
        <span className=" leading-[21px] text-[14px] xl:text-[16px]">Color:</span> 
         <div className="size-[32px] text-[14px]  font-medium  flex justify-center items-center border border-[#c1c1c1] rounded-[8px]">
            <div className="size-[24px] rounded-[4px] bg-[#ebcdd5]"></div>
        </div> 
         <div className="size-[32px] text-[14px] flex justify-center items-center font-medium   border border-[#c1c1c1] rounded-[8px]">
            <div className="size-[24px] rounded-[4px] bg-[#4444FF]"></div>
        </div> 
         <div className="size-[32px] text-[14px]  font-medium  flex justify-center items-center border border-[#c1c1c1] rounded-[8px]">
            <div className="size-[24px] rounded-[4px] bg-[#FF4646]"></div>
        </div> 
         <div className="size-[32px] text-[14px]  font-medium  flex justify-center items-center border border-[#c1c1c1] rounded-[8px]">

   <div className="size-[24px] rounded-[4px] bg-[#242425]"></div>     
         </div>
     </div>

     <p className="font-light leading-[21px] text-[14px] text-center text-[#006200]">Pickup & Pay on collection available</p>

        <div className=" flex flex-col gap-4 xl:flex  xl:gap-6">
        <Link href={'/checkoutProcess'}><button className="px-[10px] py-[8px] w-[319px] h-[53px] border border-[#222222] bg-white text-[#222222] rounded-[8px]">Buy Now</button></Link>  
        <button className="px-[10px] py-[8px] w-[319px] h-[53px]  text-white bg-[#222222] rounded-[8px]">Add to Cart</button>
        </div>
      </div>
      </div>

    </header>

    
    <main className=" xl:h-[530px] xl:border-[2px] xl:border-[#c1c1c1]  xl:rounded-[16px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-[20px] leading-[30px] text-[#1e1e1e] text-center border-y  py-4 font-medium">Delivery & Returns</h2>



        <div className="flex flex-col py-2 px-4">
          <div className="flex flex-col gap-4">
            <h3 className="font-medium leading-[27px] text-[18px] text-[#1e1e1e]">Location</h3>

            <div className="w-full">
            <select name="" id="" className="border border-[#c1c1c1] py-[16px] px-[10px] w-full text-[14px] leading-[21px] rounded-[8px]">
              <option value="">Location</option>
              </select>
              </div>    

              <div>
            <select name="" id="" className="border border-[#c1c1c1] py-[16px] px-[10px] w-full text-[14px] leading-[21px] rounded-[8px]">
              <option value="">SubLocation</option>
              </select>
              </div>  

            </div>

          <div className="mt-4">
            <h3 className="font-medium text-[16px] leading-[24px] flex items-center gap-2"><Image src={truck} /> Delivery</h3>
            <p className="w-[286px] h-[144px]  pl-4 leading-[18px] text-[12px] text-[#1e1e1e]">
            Estimated delivery time is 1-12 business days <br />
            For Same-Day-Delivery: Please place your order before 12pm <br />
            Next-Day-Delivery: Orders placed after 12pm will be delivered the next day. <br />
            Note: Availability may vary by location


            </p>
          </div>
          <div className="">
            <h3 className="font-medium text-[16px] leading-[24px] flex items-center gap-2"><Image src={wallet}/> Return Policy</h3>
            <h5 className=" text-[12px] leading-[18px] pl-4 font-medium text-[#1e1e1e]">Guaranteed 7-day return policy</h5>
            <p className="w-[286px] h-[fit] pl-4 leading-[18px] text-[12px] text-[#1e1e1e]">
            For details about return shipping options,<br /> please visit our Contact page
              </p>
          </div>
        </div>
        
      </div>
    </main>
  </div>
  )
}

export default page