// Code Keypad Component Here
import React from "react";
import EyesOnMe from "./EyesOnMe";
function Keypad (){
    const handleChange=()=>{
        console.log("Entering password...")
    }
    return (
        <div>
            <EyesOnMe
                {<input type="password" onChange={handleChange}/>}
                />
        </div>
    )
}

export default Keypad;