import { createContext,useContext,useState } from "react"

const DataContext= createContext()
const {Provider}=DataContext

const Dataget=({children})=>{
	const [showMonth, setShowMonth] = useState(false)
	const ShowMonth=()=>{
		setShowMonth(!showMonth)
    	console.log(showMonth)
	}
	
	return(
		<Provider value={{showMonth,setShowMonth,ShowMonth}}>
			{children}
		</Provider>
	)
}

const useData=()=>useContext(DataContext)

export {useData,Dataget}