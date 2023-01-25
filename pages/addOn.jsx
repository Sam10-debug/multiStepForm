import React from 'react'
import Link from 'next/link'

const AddOn = () => {
  return (
	<section className=" px-12 py-8">
		<h1 className="text-[28px] font-bold">Pick add-ons</h1>
		<p className=" text-slate-400 my-4">Add-ons help enhance your gaming experience</p>
		<div className=" border-[1px] space-x-4 mt-4 items-center border-purple-700 rounded-md flex p-2">
			<input type="checkbox" value="" name='' className="" />
			<div className="">
				<h4 className=" font-semibold">Online service</h4>
				<p className=" text-slate-500">Access to multiplayer games</p>
			</div>
			<span className=" ml-auto text-purple-700">+$1/mo</span>
		</div>
		<div className=" border-[1px] space-x-4 mt-4 items-center border-purple-700 rounded-md flex p-2">
			<input type="checkbox" value="" name='' className="" />
			<div className="">
				<h4 className=" font-semibold">Larger storage</h4>
				<p className=" text-slate-500">Extra 1TB of cloud storage</p>
			</div>
			<span className=" ml-auto text-purple-700">+$1/mo</span>
		</div>
		<div className=" border-[1px] space-x-4 mt-4 items-center border-purple-700 rounded-md flex p-2">
			<input type="checkbox" value="" name='' className="" />
			<div className="">
				<h4 className=" font-semibold">Customizable Profile</h4>
				<p className=" text-slate-500">Custom theme on your profile</p>
			</div>
			<span className=" ml-auto text-purple-700">+$1/mo</span>
		</div>
		<div className="mt-16 flex justify-between">
			<Link href="/select" className=" text-slate-400">Go Back</Link>
			<Link href="/thank" className=" border-[1px] bg-blue-900 text-white font-semibold px-4 py-2 rounded-lg">Next Step</Link>
		</div>
	</section>
  )
}

export default AddOn