import Card from './card'


const Caring = () => {
  return (
    <div className='text-center p-7' >
        <h1 className=' text-xl font-bold mb-2'>Manage your entire community <br/> in a single system</h1>
        <h2 className='w-2/5 text-center mx-auto'>The Nexcent blog is the best place to read about the latest membership insights,
        <br/>  trends and more. See who's joining the community,
             read about how our community are increasing their membership income and lot's more.​
        </h2>
        <div className='py-6 flex justify-around mt-10 flex-col lg:flex-row items-center'>
            <Card isImg={false} txt={`Creating Streamlined Safeguarding Processes with OneRen`}/>
            <Card isImg={false} txt={`What are your safeguarding responsibilities and how can you manage them?`}/>
            <Card isImg={false} txt={`What are your safeguarding responsibilities and how can you manage them`}/>
          
        </div>
    </div>
  )
}

export default Caring