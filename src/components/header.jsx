import React from 'react'

function header() {
  return (
   <>
   <div >
   <div className='flex justify-between bg-stone-900 align-baseline text-slate-50 '>
      <img className='h-[60px] w-[150px]  mt-4 size-48 ' src=".\src\assets\header.png" alt="" />
        <ul className='lg:flex lg:space-x-4 lg:py-8 lg:text-slate-50 hidden '>
            <li className='font-serif font-semibold  hover:text-orange-500 cursor-pointer'  > Home</li>
            <li className='font-serif font-semibold  hover:text-orange-500 cursor-pointer'> Green Energy</li>
            <li className='font-serif font-semibold  hover:text-orange-500 cursor-pointer'>EV's Sector</li>
            <li className='font-serif font-semibold  hover:text-orange-500 cursor-pointer'> manufaction & infrastructure</li>
        </ul>
        <div className='py-5'>
            <a className='pr-2 cursor-pointer ' >Login </a>
            <button className='bg-gradient-to-r from-orange-400 to-red-500 px-4 py-2 rounded-xl '>Join Us</button>
        </div>
    </div>
   </div>
   </> 
  )
}

export default header
