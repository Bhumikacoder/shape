import React from "react";


const Navbar = () => {
    return(
        <header className="text-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-4xl">Shape.</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 px-4 text-l font-weight: 900; ">Services</a>
      <a className="mr-5 px-4 text-l font-weight: 900;">Work</a>
      <a className="mr-5 px-4 text-l font-weight: 900;">About</a>
      <a className="mr-5 px-4 text-l font-weight: 900;">Blog</a>
      <a className="mr-5 px-4 text-l font-weight: 900;">Contact</a>
    </nav>
    <button className="items-center bg-[#d0ff71] py-2 px-5 hover:bg-[#c4ff4c] rounded-full text-l font-weight: 900 mt-4 md:mt-0">Start a Project
    </button>
  </div>
</header>
    )
}
export default Navbar