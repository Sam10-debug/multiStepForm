import Link from 'next/link'
import React, { useState } from 'react'

const Personal = () => {
	const [formData,setFormData]=useState({
		name:"",
		email:"",
		tel:""
	})
	const handleChange=(e)=>{
		const {name,value}=e.target
		setFormData(prevForm=>{
			return {
				...prevForm,
				[name]:value
			}
		})
	}
	// console.log(formData.email.length)
  return (
	<section className="px-12 py-8">
		
		<h1 className=" text-[28px] font-bold">Personal Info</h1>
		<p className="">Please provide your name, email address and phone number</p>
		<form action="" className="">
			<div className="flex flex-col">
				<label htmlFor="name" className="my-2 flex justify-between">Name {formData.name.length===0&&<span className=" text-red-700 font-semibold">this field is required</span>}</label>
				<input type="text" id="name" value={formData.name} onChange={handleChange} name="name" placeholder='e.g Emorinken Samuel'  className='h-10 rounded-lg pl-4 border-[1px]' />
			</div>
			<div className=" flex flex-col">
				<label htmlFor="email" className="my-2 flex justify-between">Email Address {formData.email.length===0&&<span className=" text-red-700 font-semibold">this field is required</span>} </label>
				<input type="email" id="email" onChange={handleChange} value={formData.email} name="email" placeholder='e.g emorinkensam@gmail.com'  className='h-10 rounded-lg pl-4 border-[1px]' />
			</div>
			<div className="flex flex-col">
				<label htmlFor="name" className="my-2 flex justify-between">Phone Number {formData.tel.length===0&&<span className=" text-red-700 font-semibold">this field is required</span>}</label>
				<input type="tel" id="name" onChange={handleChange} value={formData.tel} name="tel" placeholder='e.g +1 234 567 890' className='h-10 rounded-lg pl-4 border-[1px]' />
			</div>
		</form>
		<div className=" flex justify-end items-center py-4"><Link href="/select" className=" border-[1px] bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">Next Step</Link></div>
	</section>

  )
}

export default Personal