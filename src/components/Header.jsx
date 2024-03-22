import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-transparent flex justify-between items-center px-8 w-[100%] absolute min-h-20 z-20">
        <div className="cursor-pointer">
          <Image src={"/images/logo.svg"} alt="logo" width={100} height={80} />
        </div>
        <div className="flex">
          <div className="menu-container hidden md:flex">
            <div className="pl-20">
              <a
                href="https://paychek.uni.club/"
                className="apply_btn no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]"
              >
                Uni Paychek
              </a>
              <div className="w-full mt-1 h-[2px] undefined"></div>
            </div>
          </div>
          <div className="md:hidden flex pl-20">
            <button
              className="w-12 h-12 flex justify-center items-center"
              aria-label="menu"
            >
              <svg
                width="31"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31 20"
              >
                <rect width="31" height="2" fill="white"></rect>
                <rect width="31" height="2" fill="white"></rect>
                <rect width="31" height="2" fill="white"></rect>
                <rect y="9" width="31" height="2" fill="white"></rect>
                <rect y="9" width="31" height="2" fill="white"></rect>
                <rect y="9" width="31" height="2" fill="white"></rect>
                <rect y="18" width="31" height="2" fill="white"></rect>
                <rect y="18" width="31" height="2" fill="white"></rect>
                <rect y="18" width="31" height="2" fill="white"></rect>
              </svg>
            </button>
          </div>
        </div>
	  	{/* <div classNamName="md:hidden">
			<div classNamName="text-white mobile-menu-bg shadow-lg" style="opacity: 1;">
				<div classNamName="p-4 px-5 font-medium text-sm leading-7 css-5z988z">
					<a href="https://paychek.uni.club/" classNamName="flex justify-between">
						<span>Uni Paychek</span>
						<span><svg xmlns="http://www.w3.org/2000/svg" classNamName="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
					</a>
				</div>
			</div>
		</div> */}
    </header>
  );
}

export default Header;
