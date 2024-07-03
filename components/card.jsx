import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

function Card({isImg=true,txt='Membership Organisations'}) {
  return (
    <div className="card w-72 shadow-xl my-5 p-2">
        {isImg &&  <figure className="px-5 pt-5">
      <img
        src="card1.svg"
        alt="Shoes"
        className="rounded-xl" />
    </figure>  
        
   
}
    <div className="card-body items-center text-center">
      <h3 className=" text-l">{txt}</h3>
      {isImg && 
      <p className='text-sm'>Our membership management software provides full automation of membership renewals and payments</p>}
      <div className="card-actions">
      </div>
    </div>
    {!isImg &&  <button className=" flex items-center justify-center   text-pri pb-4">Readmore<HiArrowNarrowRight className='mx-2 ' />
        </button>}
  </div>
  )
}

export default Card