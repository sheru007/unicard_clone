import React from 'react'

function FloatingApplyNowBtn({isVisible}) {
	return (
		<>
			<div style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 110%)' }} className="w-full bottom-0 z-40 fixed md:hidden py-8">
				<div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
					<div className="flex flex-col transition-all ease-in">
						<button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"><span>Apply now</span>
							<img src="/images/right_arrow.svg" alt="right_arrow" width="21px" className="inline ml-3 css-0" />
						</button>
					</div>
				</div>
			</div>

			{/* floating btn for desktop */}

			{
				!isVisible && <div className={`opacity-1`}>
				<section style={{backgroundColor: 'rgba(245, 245, 245)'}} className="hidden sm:block fixed bottom-0 w-screen bg-opacity-100 py-5 z-10">
					<div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
						<div className="flex justify-between items-center w-full">
							<div className="flex w-full flex-row justify-between items-center">
								<form>
									<div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
										<div className="flex items-center">
											<input className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44" placeholder="Enter Phone Number" value="" />
											<span className="w-6 flex items-center justify-end h-full"></span>
										</div>
										<button style={{backgroundColor: 'rgb(253, 239, 120)'}} type="submit" className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-opacity-100 rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed">
											<span>Apply Now</span>
										</button>
									</div>
								</form>
								<div className="consent flex items-center py-4 px-2 max-w-xs">
									<input type="checkbox" id="consent-msg" checked />
									<label htmlFor="consent-msg" className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
								</div>
							</div>
						</div>
						<div className="hidden w-full flex-row items-center justify-between">
							<div className="w-full max-w-[300px]">
								<a href="https://uni-growth.onelink.me/v6cm/" target="_blank" rel="noopener noreferrer" className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
									<div className="w-full flex justify-center items-center"><span>Download</span></div>
								</a>
							</div>
							<div className="my-2">
								<p className="text-white md:text-black text-[10px] leading-3">Thank you for your interest in the Uni Card.<br /> Download the Uni Cards app now and get your Uni Card in minutes.</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			}
		</>
	)
}

export default FloatingApplyNowBtn