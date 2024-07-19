import React from "react";

function Company() {
  return (
    <div className='h-[70vh] bg-reverse'>
      <div className='flex justify-center '>
        <div className=' px-60 py-20 rounded-lg shadow-2xl mt-20'>
          <h1 className='font-casual text-8xl font-bold text-center text-white mb-3'>
            Kick Off your influencer
          </h1>
          <h1 className='font-casual text-8xl font-bold text-center text-white '>
            campaign today
          </h1>
          <p className='font-sans text-3xl text-center mt-16 '>
            Gimmick facilitates the smooth initiation and growth of your
          </p>
          <p className='font-sans text-3xl text-center mt-2 '>
            influencer outreach initiatives, all within a single platform
          </p>
          <div className='w-full flex justify-center mt-16'>
            <button className='bg-orange-600 font-bold font-headings px-10 text-2xl py-5 text-white rounded-full  w-full mx-10'>
              I'm a Influencer
            </button>
            <button className='bg-white font-bold font-headings px-10  text-2xl text-orange-600 rounded-full  w-full mx-10'>
              I'm a Brand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
