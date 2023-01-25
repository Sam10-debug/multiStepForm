
import { useData } from "../../context/DataContext";

  //since state is local i can easily maintain it in this component
const ToggleSwitch = ({ label }) => { 
	const {ShowMonth}= useData()
	// console.log(ShowMonth)
	
  return ( 
      <div className="toggle-switch"> 

        <input type="checkbox" className="checkbox" 

               name={label} id={label} /> 

        <label onClick={ShowMonth} className="label" htmlFor={label}> 

          <span className="inner" /> 

          <span className="switch" /> 

        </label> 

      </div> 

  ); 
}; 

  

export default ToggleSwitch;