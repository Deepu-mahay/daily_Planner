import React from 'react';

function Header() {

const today = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString([],{
    hour :'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12:true
    }

)
    return (
        <div className='border-solid flex color1 rounded-lg py-5 flex-row font-mono'>
            <div className='flex  place-content-between text-[#3B3B1A] w-full'>
               <span className=' mx-7 p-4 rounded-2xl font-serif-(ui-serif) text-3xl m-auto  items-start box-decoration-slice bg-linear-to-r from-green-300 to-pink-300 px-2 text-white'> Daily Planner</span>
              <span className='border bg-[#8A784E] rounded-3xl p-4 mr-4 '>Date: {today}</span> 
            </div>				
        </div>
    );
}

export default Header;