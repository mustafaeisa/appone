import Card from "./card"

function Community() {
  return (
    <div className='  text-center justify-center' >
        <h1 className=' text-xl font-bold mb-2'>Manage your entire community <br/> in a single system</h1>
        <h2 className=''>Who is Nextcent suitable for?
        </h2>
        <div className='py-6 flex justify-around mt-10 flex-col lg:flex-row items-center'>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
        </div>
  )
}

export default Community