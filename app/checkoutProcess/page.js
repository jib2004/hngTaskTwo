import Image from "next/image"
import shoe from '../assets/image/Frame 159.png'

const page = () => {
  return (
    <div className=" xl:py-2 xl:px-4   xl:flex xl:flex-col xl:gap-4">
        <div className="">
            <div  className="xl:flex  xl:flex-row-reverse xl:justify-between xl:gap-4 ">
                <div className="xl:basis-[25%] xl:border relative  xl:border-[#c1c1c1] xl:rounded-[16px] xl:bg-white">
                <h1 className=' font-semibold text-[20px] leading-[30px] text-center py-6 text-[#1e1e1e] border-b xl:border-none border-[#c9c9c9]'>Order Summary</h1>
                <div className="flex gap-3 px-4 py-2">
                    <div>
                        <Image src={shoe} alt="image of shoe"/>
                    </div>
                    <div>
                        <h3 className=" font-medium text-[18px] leading-[27px] text-[#1e1e1e]">Burberry shine</h3>
                        <p className=" font-medium text-[14px] leading-[21px] text-[#808080]">FENDI</p>
                    </div>
                </div>


                <div className="py-2 px-4 flex flex-col gap-3">
                <div className="flex justify-between">
                    <span className="font-medium text-[14px] leading-[21px] text-[#808080]">Subtotal</span> <span className=" font-medium leading-[21px] text-[14px] text-[#1e1e1e]">$150</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-medium text-[14px] leading-[21px] text-[#808080]">Shipping</span> <span className=" font-medium leading-[21px] text-[14px] text-[#1e1e1e]">$10</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-medium text-[14px] leading-[21px] text-[#808080]">Tax</span> <span className=" font-medium leading-[21px] text-[14px] text-[#1e1e1e]">$5</span>
                </div>
            </div>

            <button className="hidden xl:block xl:absolute xl:bottom-2 xl:left-[50%] xl:translate-x-[-50%] xl:w-[90%] bg-[#222222] text-white px-[10px] py-[8px] rounded-[8px] h-[53px]">
                        Place order
                    </button>
            </div>

            {/* here */}

            

           <div className="xl:basis-[65%] xl:border  xl:border-[#c1c1c1] xl:rounded-[16px] xl:bg-white">
            <h1 className=' font-semibold text-[20px] leading-[30px] text-center py-6 text-[#1e1e1e] border-t xl:border-none border-b border-[#c9c9c9]'>Shipping Address</h1>
            
            <div className=" border-b xl:border-none border-[#C9C9C9]">
                <form className="px-4 py-3 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">Name</label>
                        <input type="text" placeholder="First & Last Name" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">Address 1</label>
                        <input type="text" placeholder="412, Dubai st" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">Address 2</label>
                        <input type="text" placeholder="23rd, Boulevard Ave" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px]"/>
                    </div>

                    <div className="flex  flex-wrap md:flex-nowrap items-center gap-2">
                    <div className="flex flex-col gap-2 md:basis-[33%]">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px] leading-[21px]">City</label>
                        <input type="text" placeholder="Enter City" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px] w-[171px] xl:w-auto"  />
                    </div>

                    <div className="flex flex-col gap-2 md:basis-[33%]">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">State</label>
                        <select name="" id="" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px] w-[171px] xl:w-auto">
                            <option value="">Select state</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 md:basis-[33%]">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">Zip</label>
                        <input type="text" placeholder="Zip code" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px] w-[171px] xl:w-auto" />
                    </div>
                    </div>

                    
                </form>
            </div>

            </div>
            </div>
        </div>

            {/* Payment */}
        <div className="xl:border  xl:border-[#c1c1c1] xl:rounded-[16px] xl:bg-white">
        <h1 className=' font-semibold text-[20px] leading-[30px] text-center py-6 text-[#1e1e1e] border-b border-[#c9c9c9]'>Payment Method</h1>

        <div className="flex gap-4 xl:justify-between px-4 py-2">
            <div className="w-[111px] h-[84px] bg-[#222222] flex flex-col items-center justify-center rounded-[8px] md:basis-[33%] md:h-[136px]"></div>
            <div className="w-[111px] h-[84px] border border-[#c1c1c1] flex flex-col  items-center justify-center rounded-[8px] md:basis-[33%] md:h-[136px]"></div>
            <div className="w-[111px] h-[84px] border border-[#c1c1c1] flex flex-col  items-center justify-center rounded-[8px] md:basis-[33%] md:h-[136px]"></div>
        </div>

        <div className=" border-b border-[#C9C9C9] xl:border-none">
                <form className="px-4 py-3 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">Name on card</label>
                        <input type="text" placeholder="First & Last Name" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">card number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px]" />
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap gap-2 w-full items-end">
                    <div className="flex flex-col gap-2 basis-[33%]">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">Expiry</label>
                        <select name="" id="" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px] w-[171px] xl:w-auto">
                            <option value="">MM</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 basis-[33%]">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]"></label>
                        <select name="" id="" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px] w-[171px] xl:w-auto">
                            <option value="">YYYY</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 basis-[33%]">
                        <label htmlFor="" className="text-[#1e1e1e] font-semibold text-[14px leading-[21px]">CVV</label>
                        <input type="text" placeholder="CVV" className="border border-[#c1c1c1] px-[10px] py-[16px] rounded-[8px] w-[171px] xl:w-auto" />
                    </div>
                    </div>

                    


                    <button className="bg-[#222222] text-white xl:hidden px-[10px] py-[8px] rounded-[8px] h-[53px]">
                        Place order
                    </button>
                </form>
            </div>


        </div>

        
    </div>
  )
}

export default page