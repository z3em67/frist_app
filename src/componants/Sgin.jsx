import "./sing.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Sing (){
    const[input , setInput]=useState("");
    const[pss,setpass] =useState("");
return(
    <div className="containeer">
         <input type="text" placeholder="User" className="one"
         value={input} onChange={(e)=> setInput(e.target.value)}
         />
         <input type="password" placeholder="Password" className="two"
         value={pss} onChange={(e)=> setpass(e.target.value)}
         
         />
         <div className="b"><Link to="/"><button onClick={()=>
          input !="" && pss != "" ? alert("sucsses") :alert ("this wrong") 
        
            }> submit</button> </Link>
         <p>forget your password</p>
         </div>
         
    </div>
);
}

export default Sing ;