import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className=' pb-3 top-0 z-50 sticky bg-amber-100 w-full'>
        <div className="flex  flex-col lg:flex-row lg:justify-between lg:items-center px-6 py-4 gap-4">
            <span className="font-bold text-3xl ">Ecommerce</span>
            <div className='relative w-full  max-w-[500px]'>
                <input className='bg-white border-none outline-none px-6 py-2 rounded-[30px] w-full' type="text" placeholder='Search Product...' />
                <IoMdSearch className='absolute top-0 right-0 mt-2 mr-3 text-gray-500' size={30}/>
            </div>
            <div className='flex flex-wrap justify-center gap-4 items-center'>
                <ul className='flex flex-wrap justify-center gap-4 text-lg font-bold '>
                <li className="cursor-pointer hover:text-gray-700"><a href="#Home">Home</a></li>
                <li className="cursor-pointer hover:text-gray-700"><a href="#Blog">Blog</a></li>
                <li className="cursor-pointer hover:text-gray-700"><a href="#Faq">Faq</a></li>
                <li className="cursor-pointer hover:text-gray-700"><a href="#about">About</a></li>
                <li className="cursor-pointer hover:text-gray-700"><a href="#Contact">Contact</a></li>
                </ul>
            
            <div className='flex text-[25px] justify-center gap-3'>
            <div className=' border-gray-800 border  items-center flex justify-center rounded-full place-items-center  w-[50px] h-[50px] hover:bg-gray-200 '>
            <FaRegUser />
            
            </div>
            <div className=' border-gray-800 border items-center justify-center flex rounded-full place-items-center w-[50px] h-[50px] hover:bg-gray-200 '>
            <MdOutlineShoppingCart className='' />
            
            </div>
            </div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar