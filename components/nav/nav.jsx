import Image from "next/image"


function Nav() {
  return (
    <nav className="navbar flex h-[84px] px-20 bg-[#F5F7FA]">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><a>Home</a></li>
        <li><a>Service</a></li>
        <li><a>Feature</a></li>
        <li><a>Product</a></li>
        <li><a>Testimonial</a></li>
        <li><a>FAQ</a></li>
        </ul>
      </div>
      <a className="">
        <Image src='/logo.svg' height={24} width={154} alt="logo"/>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
        <li><a>Service</a></li>
        <li><a>Feature</a></li>
        <li><a>Product</a></li>
        <li><a>Testimonial</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className=" mx-4 text-pri">Login</a>
      <a className=" bg-pri btn text-neutral-50">Sign up</a>
    </div>
  </nav>
  )
}

export default Nav