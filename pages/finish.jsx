import React from 'react'

const Finish = () => {
  return (
	<section className=" px-12 py-8">
		<h1 className="text-[28px] font-bold">Finishing up</h1>
		<p className="text-slate-400 my-4">Double check everything looks ok before confirming</p>
		<section className=" bg-purple-100 p-4 rounded-md">
			<div className=" flex justify-between">
				<div className="">
					<h5 className=" font-semibold">Arcade(monthly)</h5>
					<a href="#" className="text-[12px] underline text-purple-600 font-semibold">Change</a>
				</div>
				<h5 className=" font-bold">$9/mo</h5>
			</div>
			<div className=" flex justify-between">
				<span className="">Online service</span>
				<span className=" text-[14px]">+1$/mo</span>
			</div>
			<div className=" flex justify-between">
				<span className="">Larger storage</span>
				<span className=" text-[14px]">+2$/mo</span>
			</div>
		</section>
		<div className="flex justify-between mt-4">
			<span className=" text-[12px]">Total(Per month)</span>
			<h3 className=" text-[20px] font-bold">+$12/mo</h3>
		</div>
		<div className="mt-16 flex justify-between">
			<button className=" text-slate-400">Go Back</button>
			<button className=" border-[1px] bg-blue-900 text-white font-semibold px-4 py-2 rounded-lg">Next Step</button>
		</div>
	</section>
  )
}

export default Finish