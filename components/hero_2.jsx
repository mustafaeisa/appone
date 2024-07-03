import Image from 'next/image'
import React from 'react'

function Hero_2() {
  return (
<>

<div className="hero">
  <div className="hero-content flex-col lg:flex-row ">
    <div className=' flex'>
    <Image
     height={433} width={400}
      src="hero3.svg"
      className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    
    <div className=''>
      <h1 className="text-2xl font-bold">The unseen of spending three years at Pixelgrade</h1>
      <p className="pt-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
      Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
      </p>
      <button className="btn bg-pri text-neutral-50">Learn More</button>
    </div>
  </div>
</div>
<div className="hero">
  <div className="hero-content flex-col lg:flex-row ">
    <div className=' flex'>
    <Image
     height={433} width={400}
      src="hero3.svg"
      className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    
    <div className=''>
      <h1 className="text-2xl font-bold">The unseen of spending three years at Pixelgrade</h1>
      <p className="pt-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
      Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
      </p>
      <button className="btn bg-pri text-neutral-50">Learn More</button>
    </div>
  </div>
</div>
</>
  )
}

export default Hero_2