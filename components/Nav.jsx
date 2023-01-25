import Link from "next/link"


const Nav = () => {
  return (
	<>
	<aside className="bg-blue-600 space-x-4 md:space-x-0 justify-center md:justify-start flex md:flex-col md:w-[20vw] md:space-y-6 md:h-[100vh] px-4 py-8">
		
			<Link href="/" className=" flex cursor-pointer items-center space-x-4">
				<div className=" bg-slate-400 rounded-[50%] w-6 h-6 flex justify-center items-center">1</div>
			
				<div className=" hidden md:block">
					<h5 className=" text-[12px] text-slate-400">STEP 1 </h5>
					<h4 className=" font-bold text-white">YOUR INFO</h4>
				</div>
			</Link>
		
		<Link href="/select" className=" flex cursor-pointer items-center space-x-4">
			<div className=" bg-slate-400 rounded-[50%] w-6 h-6 flex justify-center items-center">2</div>
			<div className="hidden md:block">
				<h5 className=" text-[12px] text-slate-400">STEP 2 </h5>
				<h4 className=" font-bold text-white">SELECT PLANS</h4>
			</div>
		</Link>
		<Link href="/addOn" className=" flex cursor-pointer items-center space-x-4">
			<div className=" bg-slate-400 rounded-[50%] w-6 h-6 flex justify-center items-center">3</div>
			<div className="hidden md:block">
				<h5 className=" text-[12px] text-slate-400">STEP 3 </h5>
				<h4 className=" font-bold text-white">ADD ONS</h4>
			</div>
		</Link>
		<Link href="/thank" className=" flex cursor-pointer items-center space-x-4">
			<div className=" bg-slate-400 rounded-[50%] w-6 h-6 flex justify-center items-center">4</div>
			<div className="hidden md:block">
				<h5 className=" text-[12px] text-slate-400">STEP 4 </h5>
				<h4 className=" font-bold text-white">SUMMARY</h4>
			</div>
		</Link>
	</aside>
		</>

  )
}

export default Nav