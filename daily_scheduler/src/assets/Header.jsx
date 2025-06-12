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
        <div className='border-solid flex flex-row font-mono'>
            <div className='flex mx-auto'>
               <span className='bg-green-500  justify-center items-start box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white'> Daily Planner-</span>
               {today}
            </div>
        </div>
    );
}

export default Header;