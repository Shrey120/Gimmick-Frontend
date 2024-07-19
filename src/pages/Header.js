import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className='flex justify-between bg-black'>
        <div className='flex'>
          <div className='p-5 pl-16 font-cursive font-extrabold text-2xl text-white'>
            Gimmick
          </div>
        </div>
        <div className='flex bg-white justify-around w-80 items-center mr-32'>
          <FaInstagram className=' text-2xl' />
          <FaLinkedinIn className='text-2xl' />
          <FaFacebookF className='text-2xl' />
          <FaYoutube className='text-2xl' />
          <FaTwitter className='text-2xl' />
        </div>
      </nav>
      <nav className='flex py-9 justify-between'>
        <div className='font-classic font-extrabold text-5xl pl-20 py-3'>
          INFLUENCE .
        </div>
        <div className='text-slate-500 flex justify-between py-5 font-headings text-3xl font-semibold'>
          <div className='px-10 '>Home</div>
          <div className='px-10 '>Services</div>
          <div className='px-10 '>Influencer</div>
          <div className='px-10 '>Contact</div>
          <div className='px-10 '>About</div>
        </div>
        <div className='pr-36'>
          <button className='text-2xl py-5 px-10 bg-orange-500 rounded-full'>
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}
