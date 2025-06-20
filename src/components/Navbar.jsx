import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 bg-white w-full h-16 flex justify-between border-2 z-50">

        <div className="flex justify-center items-center pl-4">
          <img src="/menu.svg" alt="" />
          <img src="/mainicon.svg" className="ml-4" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-none">
            <input
              type="text"
              placeholder="Search"
              className="hidden md:flex md:w-[300px] border-2 px-4 py-1 rounded-l-full rounded-r-none outline-none lg:w-[500px] xl:w-[600px]"
            />

            <button className=" bg-white hover:bg-gray-300 cursor-pointer  rounded-full px-2 py-2 md:rounded-r-full md:rounded-l-none md:bg-gray-200 md:px-1 md:py-1">
              <img src="/searchicon.svg" alt="" />
            </button>
          </div>
          <img src="/voiceicon.svg" className="bg" alt="" />
        </div>
        <div className="flex justify-center items-center  gap-6 pr-8">
          <div className="flex justify-center items-center bg-gray-200 px-2 py-1 w-[100px] rounded-full">
            <img src="/plusicon.svg" alt="" />
            <h1>Create</h1>
          </div>
          <img src="/bellicon.svg" className="mr-5" alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
