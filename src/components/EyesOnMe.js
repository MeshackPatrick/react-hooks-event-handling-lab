// Code EyesOnMe Component Here
import React from "react";
import Keypad from "./Keypad";
 const EyesOnMe=()=>{
     const handleFocus=()=>{
         console.log("Good !")
     }
     const handleBlur=()=>{
         console.log("Hey Eyes on me!")
     }
     return(
         <div>
        <Keypad
            { <button onFocus={handleFocus} onBlur={handleBlur} > Eyes on me </button> }
        />

         </div>
     )
 }
 export default EyesOnMe