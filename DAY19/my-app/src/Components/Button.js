import React, { useState } from 'react'


const Button = () =>{
 
  let [count, setCount] = useState(0);
  
  let  countHandler = () =>{
    setCount((prevCount) =>{
      prevCount = prevCount + 1;
      return prevCount;
    })
  }

  return(
    <button onClick= {countHandler} >{count}</button>
  )
}

export default Button;