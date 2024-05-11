import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img onClick={()=>navigate(-1)} src={assets.arrow_left} className='w-8 bg-black cursor-pointer rounded-2xl p-2' alt="" />
          <img onClick={()=>navigate(1)} src={assets.arrow_right} className='w-8 bg-black cursor-pointer rounded-2xl p-2' alt="" />
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Install App</p>
          <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex justify-center items-center'><span className='relative -top-0.5'>N</span></p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
      </div>
    </>
  );
};

export default Navbar;