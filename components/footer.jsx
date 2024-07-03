import Image from 'next/image'
import { HiArrowNarrowRight } from "react-icons/hi";

function Footer() {
  return (
    <footer className='text-center bg-[#F5F7FA] pt-5'>
        <div className=' my-5'>
            <h1 className=' text-3xl font-bold my-5 tracking-wider'>Pellentesque suscipit <br/>fringilla libero eu.</h1>
            <button className="btn bg-pri text-neutral-50">Get a Demo<HiArrowNarrowRight className=' ' /></button>
        </div>
        <div className='bg-[#263238] flex p-12'>   
            <div className="footer text-base-content p-10">
            <div className='text-neutral-50'>

            <a className="">
                    <Image src='/logo2.svg' height={24} width={154} alt="logo"/>
            </a>
            <p className='text-left text-sm tracking-wide'>
            Copyright © 2020 Nexcent ltd.
            <br/>
            All rights reserved
            </p>
            </div>
            <nav className='text-neutral-50'>
                <h6 className="footer-title ">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='text-neutral-50'>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <form className=' text-neutral-50'>
                <h6 className="footer-title">Stay up to date</h6>
                <fieldset className="form-control w-80">
                <div className="join">
                    <input
                    type="text"
                    placeholder="your email address"
                    className="input input-bordered bg-neutral-500 join-item" />
                    <button className="btn bg-neutral-500 border-none join-item text-neutral-50">Subscribe</button>
                </div>
                </fieldset>
            </form>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer